import DataImage1 from "../images/data1.jpg";
import DataImage2 from "../images/data2.jpg";
import DataImage3 from "../images/data3.jpg";
import DataImage4 from "../images/data4.jpg";
import DataImage5 from "../images/data5.jpg";
import DataImage6 from "../images/data6.jpg";
import DataImage7 from "../images/data7.jpg";
import DataImage8 from "../images/data8.jpg";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "username_1",
    img: DataImage1,
    status: "active",
    email: "user1@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "username_2",
    img: DataImage2,
    email: "user2@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "username_3",
    img: DataImage3,
    email: "user3@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "username_4",
    img: DataImage4,
    email: "user4@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "username_5",
    img: DataImage5,
    email: "user5@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "username_6",
    img: DataImage6,
    email: "user6@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "username_7",
    img: DataImage7,
    email: "user7@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "username_8",
    img: DataImage8,
    email: "user8@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "username_9",
    img: DataImage5,
    email: "user9@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "username_10",
    img: DataImage7,
    email: "user10@gmail.com",
    status: "active",
    age: 65,
  },
  {
    id: 10,
    username: "username_11",
    img: DataImage3,
    email: "user11@gmail.com",
    status: "active",
    age: 55,
  },
];
