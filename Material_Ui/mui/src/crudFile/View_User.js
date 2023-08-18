import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function View_User() {
  const { userid } = useParams();
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + userid)
      .then((resp) => {
        setUserData(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card">
      <h1 className="py-2 text-center">User Contact Info</h1>
      {userData && (
        <div className="card-body">
          <h5 className="card-title">{userData.name}</h5>
          <h4>{userData.email}</h4>
          <h4>{userData.phone}</h4>
        </div>
      )}
    </div>
  );
}
