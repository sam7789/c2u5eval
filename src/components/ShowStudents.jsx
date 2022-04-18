import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select className="sortby">
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select name="sortorder" className="sortorder">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {Data.map((e) => (
            <tr className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{Number(e.age)}</td>
              <td className="tenth_score">{Number(e.tenth_score)}</td>
              <td className="twelth_score">{Number(e.twelth_score)}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
