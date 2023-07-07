import FirstChart from "../components/FirstChart";
import Navabr from "../components/Navabr";
import SecondChart from "../components/SecondChart";
import SideBar from "../components/SideBar";
import TableList from "../components/Table";
import Widget from "../components/Widget";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar></SideBar>
        
        <div className="homecontainer">
        <Navabr />

          <div className="widgetbox">
            <Widget type={"user"} />
            <Widget type={"order"} />

            <Widget type={"earning"} />
            <Widget type={"balance"} />
          </div>

          <div className="chartSection">
            <div className="firstChart">
              <FirstChart />
            </div>
            <div className="secondChart">
              <SecondChart />
            </div>
          </div>
          <div className="listcontainer">
            <div className="tittle">Lastest Transcantion</div>
            <TableList />
            
            

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
