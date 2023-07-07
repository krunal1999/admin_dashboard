import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

const TableList = () => {
  let data = [
    {
      id: 1,
      product: "acer laptop",
      img: "https://mundoconectado.com.br/uploads/chamadas/chamada-macbook.jpg",
      customer: "Krunal dhavle",
      date: "1 March",
      amount: 3232,
      method: "online Payment",
      status: "Pending",
    },
    {
      id: 2,
      product: "Apple iPhone",
      img: "https://mundoconectado.com.br/uploads/chamadas/chamada-macbook.jpg",
      customer: "John Smith",
      date: "5 April",
      amount: 2500,
      method: "Credit Card",
      status: "Completed",
    },
    {
      id: 3,
      product: "Samsung TV",
      img: "https://mundoconectado.com.br/uploads/chamadas/chamada-macbook.jpg",
      customer: "Emma Johnson",
      date: "12 May",
      amount: 500,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 12,
      product: "Dell Monitor",
      img: "https://mundoconectado.com.br/uploads/chamadas/chamada-macbook.jpg",
      customer: "Sophie Turner",
      date: "25 February",
      amount: 1200,
      method: "Online Payment",
      status: "Completed",
    },
    {
      id: 13,
      product: "Sony PlayStation",
      img: "https://mundoconectado.com.br/uploads/chamadas/chamada-macbook.jpg",
      customer: "Daniel Johnson",
      date: "14 April",
      amount: 800,
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: 14,
      product: "Logitech Keyboard",
      img: "https://www.laptopsdirect.co.uk/Images/NX.K86EK.005_1_Supersize.jpg?v=3",
      customer: "Sarah Davis",
      date: "9 May",
      amount: 300,
      method: "Cash",
      status: "Completed",
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Id</TableCell>
              <TableCell className="tableCell">product</TableCell>
              <TableCell className="tableCell">customer</TableCell>
              <TableCell className="tableCell">date</TableCell>
              <TableCell className="tableCell">amount</TableCell>
              <TableCell className="tableCell">method</TableCell>
              <TableCell className="tableCell">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="wrapper">
                    <img src={row.img} alt="img" className="imagecss" />
                    {row.product}
                  </div>
                </TableCell>

                
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableList;
