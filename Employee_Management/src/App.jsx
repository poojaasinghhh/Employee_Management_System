import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./components/styles.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee.jsx";
import Category from "./components/Category.jsx";
import Profile from "./components/Profile.jsx";
import AddCategory from "./components/AddCategory.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import EditEmployee from "./components/EditEmployee.jsx";
import Start from "./components/Start.jsx";
import EmployeeLogin from "./components/EmployeeLogin.jsx";
import EmployeeDetail from "./components/EmployeeDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}>
          {" "}
        </Route>{" "}
        <Route path="/adminlogin" element={<Login />} />{" "}
        <Route path="/employee_login" element={<EmployeeLogin />}>
          {" "}
        </Route>{" "}
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}>
          {" "}
        </Route>{" "}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}>
            {" "}
          </Route>{" "}
          <Route path="/dashboard/employee" element={<Employee />}>
            {" "}
          </Route>{" "}
          <Route path="/dashboard/category" element={<Category />}>
            {" "}
          </Route>{" "}
          <Route path="/dashboard/profile" element={<Profile />}>
            {" "}
          </Route>{" "}
          <Route
            path="/dashboard/add_category"
            element={<AddCategory />}
          ></Route>{" "}
          <Route
            path="/dashboard/add_employee"
            element={<AddEmployee />}
          ></Route>{" "}
          <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
