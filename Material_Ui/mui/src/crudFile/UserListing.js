import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

function UserListing() {
  const { userid } = useParams();
  const navigate = useNavigate();
  const Update = (id) => {
    navigate("/update/" + id);
  };
  const Delete = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((resp) => {
        alert("Data Deleted SuccesFully");
        getAllUsers();
      })
      .catch((err) => {});
  };
  const View = (id) => {
    navigate("/view/" + id);
  };
  const [userData, setUserData] = useState();
  //   console.log(userData);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get("http://localhost:3000/users")
      .then((resp) => {
        setUserData(resp.data);
        // console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [search, setSearch] = useState("");
  const handleStatus = (id) => {
    const status = window.confirm("Are you Sure To Change Your status");
    if (status) {
      const currentRec = userData.find((r) => r.id === id);
      const currentStatus = currentRec.status;
      const newStatus = currentStatus === "pending" ? "active" : "pending";
      //   console.log("currentStatus: ", currentStatus);
      //   console.log("newStatus: ", newStatus);
      axios
        .patch("http://localhost:3000/users/" + id, {
          status: newStatus,
        })
        .then((resp) => {
          getAllUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="d-flex my-3">
              <h4 className="card-title d-block text-3xl font-bold underline ">
                CRUD Operation
              </h4>
              <Link to="/create" className="mx-auto">
                <button className="btn btn-primary add ">Add New User</button>
              </Link>
              <input
                className="inputLeft"
                type="text"
                placeholder="Search User By Name"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    userData
                      .filter((item) => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.name.includes(search);
                      })
                      .map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>
                            <button
                              onClick={() => {
                                Update(item.id);
                              }}
                              className="btn btn-success mr-1"
                            >
                              Update
                            </button>
                            <button
                              onClick={(e) => {
                                Delete(item.id);
                              }}
                              className="btn btn-danger mr-15px"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => {
                                View(item.id);
                              }}
                              className="btn btn-info ml-1"
                            >
                              View
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                handleStatus(item.id);
                              }}
                              type="button"
                              className="btn btn-primary "
                              id="status"
                            >
                              {item.status}
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserListing;
