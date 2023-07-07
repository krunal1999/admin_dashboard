export const rows = [
  {
    id: 1,
    username: "snow",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "active",
    email: "kbd6@gmail.com",
    age: 12,
  },
  {
    id: 2,
    username: "sno22w",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "active",
    email: "kbd622@gmail.com",
    age: 23,
  },
  {
    id: 3,
    username: "sn23 ow",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "inactive",
    email: "kbd6@gmail.com",
    age: 54,
  },
  {
    id: 4,
    username: "snoq eqew",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "active",
    email: "kbqweqed6@gmail.com",
    age: 65,
  },
  {
    id: 5,
    username: "snow",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "active",
    email: "kbdwqeq6@gmail.com",
    age: 53,
  },
  {
    id: 6,
    username: "snqeqe ow",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    status: "inactive",
    email: "kbd6@gmail.com",
    age: 124,
  }
  
];

export const columns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "username",
    headerName: "User name",
    width: 160,
    renderCell: (param) => {
      return (
      <div className="cellwithImg">
        <img src={param.row.img} alt="asadad" className="cellImg" />
        <div className="usernamecs"> 
                {param.row.username}
                </div>
      </div>
      );
    },
  },

  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 120,
  },
  { field: "status", headerName: "Status",  width: 150  },
  { field: "email", headerName: "Email", width: 200 },
  
];
