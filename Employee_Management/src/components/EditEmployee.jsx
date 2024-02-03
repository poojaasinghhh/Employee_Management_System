import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    salary: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/employee/" + id)
      .then((res) => {
        setEmployee({
          ...employee,
          name: res.data.Result[0].name,
          email: res.data.Result[0].email,
          address: res.data.Result[0].address,
          salary: res.data.Result[0].salary,
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:4000/auth/edit_employee/" + id, employee)
      .then((res) => {
        if (res.data.Status) {
          navigate("/dashboard/employee");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2> Update Employee </h2>{" "}
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            value={employee.name}
          />{" "}
        </div>{" "}
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email{" "}
          </label>{" "}
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            value={employee.email}
          />{" "}
        </div>{" "}
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
            Salary{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
            value={employee.salary}
          />{" "}
        </div>{" "}
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address{" "}
          </label>{" "}
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, address: e.target.value })
            }
            value={employee.address}
          />{" "}
        </div>{" "}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default EditEmployee;
