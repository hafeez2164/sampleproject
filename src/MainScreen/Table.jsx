
import React, { useState } from "react";
import "../CSS/Form/Table.css";

function Table() {

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All"); // 👈 Added dropdown state

  const students = [
    { CollegeID:8106 , Name: "Hafeez", Department: "MCA", Number:7395902164, MailID:"hafeezrahman2004@gmail.com", CollegeName:"MIIT",CollegeFees:90000 },
    { CollegeID:8107 , Name: "Abzal", Department: "BSc Computer Science", Number:9884366326, MailID:"abzal2005@gmail.com", CollegeName:"THE NEW COLLEGE",CollegeFees:40000 },
    { CollegeID:8108 , Name: "Masiyullah", Department: "MSc Computer Science", Number:8870457571, MailID:"masi2006@gmail.com", CollegeName:"SRM", CollegeFees:100000},
    { CollegeID:8109 , Name: "Abith", Department: "B.COM", Number:9962227033, MailID:"abith2007@gmail.com", CollegeName:"LOYOLA" ,CollegeFees:95000},
    { CollegeID:8110 , Name: "Kowshik", Department: "MBA", Number:9094643699, MailID:"kowshik2003@gmail.com", CollegeName:"MCG",CollegeFees:70000}   
  ];

  // 🔎  Filter Logic 
  const filteredStudents = students.filter((student) => {

    const searchValue = search.toLowerCase();

    if (filterType === "All") {
      return (
        student.Name.toLowerCase().includes(searchValue) ||
        student.Number.toString().includes(search) ||
        student.CollegeID.toString().includes(search) ||
        student.Department.toLowerCase().includes(searchValue) ||
        student.MailID.toLowerCase().includes(searchValue) ||
        student.CollegeName.toLowerCase().includes(searchValue) ||
        student.CollegeFees.toString().includes(search)
      );
    } else {
      return student[filterType]
        ?.toString()
        .toLowerCase()
        .includes(searchValue);
    }
  });

  return (
    <div className="table-container">

      <div className="header-section">
        <h2 className="student">STUDENTS DETAILS</h2>

        <div className="search-group">

          {/* 👇 Dropdown Added */}
          <select
            className="filter-dropdown"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Name">Name</option>
            <option value="CollegeID">College ID</option>
            <option value="Number">Phone Number</option>
            <option value="Department">Department</option>
            <option value="MailID">Email</option>
            <option value="CollegeName">College Name</option>
            <option value="CollegeFees">College Fees</option>
          </select>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>College ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>College Name</th>
            <th>College Fees</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.CollegeID}>
              <td>{student.CollegeID}</td>
              <td>{student.Name}</td>
              <td>{student.Department}</td>
              <td>{student.Number}</td>
              <td>{student.MailID}</td>
              <td>{student.CollegeName}</td>
              <td>{student.CollegeFees}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="7">
              Overall Records: {filteredStudents.length}
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}

export default Table;