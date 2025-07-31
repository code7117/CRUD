import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Table = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const res = await axios.get("https://crud-4-m0vy.onrender.com/api/users");
      const data = res.data;
      if (Array.isArray(data)) setUsers(data);
      else if (Array.isArray(data.data)) setUsers(data.data);
      else if (Array.isArray(data.users)) setUsers(data.users);
      else setUsers([]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`https://crud-4-m0vy.onrender.com/api/${id}`);
        toast.success("User delete successfully!");
      getAllUsers();
    } catch (err) {
      console.error("Delete error:", err);
        toast.Danger("Error in deleting user!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>User Management</h2>
        <button className={styles.addBtn} onClick={() => navigate("/userform")}>
          <CiSquarePlus /> Add User
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>{user.salary}</td>
                  <td>
                    <button onClick={() => navigate(`/userform/${user._id}`)}>
                      <MdOutlineEdit />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)}>
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
