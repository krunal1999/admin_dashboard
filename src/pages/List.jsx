import DataTable from "../components/DataTable";
import Navabr from "../components/Navabr";
import SideBar from "../components/SideBar";
import "./list.css";

const List = () => {
  return (
    <>
      <div className="home">
        <SideBar></SideBar>
        <div className="listComponet">
          <Navabr />
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default List;
