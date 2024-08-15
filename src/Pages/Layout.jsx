import { Outlet } from "react-router-dom";
import Navbar from '../component/Navbar';

const Layout = () => {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  
  export default Layout;