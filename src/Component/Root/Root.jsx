import { Outlet } from "react-router-dom";
import Navbar from "../Navbar&Footer/Navbar";
import Footer from "../Navbar&Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
