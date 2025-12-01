import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/FooterApp";

const Layout = () => {
  return (
    <Box position="relative" minH="100vh">
      
      <Box
        as="header"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        zIndex={100}
      >
        <Box hideBelow="lg">
          <NavBar />       
        </Box>
        <Box hideFrom="lg">
          <MobileNav />    
        </Box>
      </Box>

     
      <Box as="main">
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
