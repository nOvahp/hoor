import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/FooterApp";

const Layout = () => {
  return (
    <>
      
      <Box hideBelow="lg" >
        <NavBar />
      </Box>
      <Box hideFrom="lg">
        <MobileNav />
      </Box>
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
