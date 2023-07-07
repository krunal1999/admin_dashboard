import { CircularProgressbar } from "react-circular-progressbar";
import "./secondchart.css";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SecondChart = () => {
  return (
    <>
      <div className="secondChartsec">
        <div className="tops">

          <div className="tittle">Total Revenue</div>

          <div className="icon">
                <MoreVertIcon />
          </div>

        </div>
        <div className="bottom">
          <div className="chart">
            <CircularProgressbar value={60} text={60} strokeWidth={6} />
          </div>

          <p className="pTittle">Total sales made today</p>
          <p className="pMoney">$ 2332 </p>
          <p className="pSmall"> previous transtion not be included, last paymet is processing </p>
        </div>
      </div>
    </>
  );
};

export default SecondChart;
