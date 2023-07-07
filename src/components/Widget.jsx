import { Card } from "@mui/material";
import "./widget.css";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        cardtitlee: "users",
        isMoney: false,
        number: 100,
        link: "see all user",
        icon: <SupervisedUserCircleIcon />,
        per:"20%"
      };

      break;
      case "order":
      data = {
        cardtitlee: "order",
        isMoney: false,
        number: 1088,
        link: "see all order",
        icon: <SupervisedUserCircleIcon />,
        per:"50%"
      };

      break;
      case "earning":
      data = {
        cardtitlee: "earning",
        isMoney: true,
        number: 100,
        link: "see all earning",
        icon: <SupervisedUserCircleIcon />,
        per:"20%"
      };

      break;
      case "balance":
      data = {
        cardtitlee: "Balance",
        isMoney: true,
        number: 100,
        link: "see all Balance",
        icon: <SupervisedUserCircleIcon />,
        per:"20%"
      };

      break;

    default:
      break;
  }
  return (
    <>
      <Card className="widgetBox">
        <div className="left">
          <span className="cardtitle">{data.cardtitlee}</span>
         
          <span className="cardnumber">{data.isMoney ? "$":""}{data.number}</span>
          

          <span className="cardLink">{data.link}</span>
        </div>
        <div className="right">
          
          <span className="cardPercentage">{data.per}</span>
          <br />
          <span className="cardBottonicon">
            <SupervisedUserCircleIcon />
          </span>
        </div>
      </Card>
    </>
  );
};

export default Widget;
