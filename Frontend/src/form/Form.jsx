import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ import toast

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      axios.get(`http://localhost:4000/api/${id}`).then((res) => {
        const user = res.data.data || res.data;
        setFormData({
          name: user.name || "",
          designation: user.designation || "",
          salary: user.salary || "",
        });
      }).catch(() => {
        toast.error("Failed to fetch user details");
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`http://localhost:4000/api/${id}`, formData);
        toast.success("User updated successfully!");
      } else {
        await axios.post("http://localhost:4000/api/users", formData);
        toast.success("User added successfully!");
      }
      setTimeout(() => navigate("/"), 1000); // Navigate after toast
    } catch (err) {
      console.error("Submit Error:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>{isEdit ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="designation"
          value={formData.designation}
          placeholder="Designation"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          value={formData.salary}
          placeholder="Salary"
          onChange={handleChange}
          required
        />
        <button type="submit">{isEdit ? "Update" : "Add"} User</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
