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
        </div>
      </div>
    </>
  );
};

export default List;
