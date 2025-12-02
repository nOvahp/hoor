import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/Logo.svg";

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

  return (
    
    
      <HStack
      mx={"6%"}
        justifyContent={"space-between"}
        gap={2}
        flexWrap="nowrap"
        my={"1%"}
        
      >
       
          <Link
          
            to="/account"
            style={{
              fontFamily: fonts.heading,
              fontSize: "clamp(12px, 1vw, 14px)",
              color: colors.white,
              textDecoration: "none",
              backgroundColor: isActive("/account")
                ? colors.button.primary
                : colors.button.primary,
              padding: "1% 3%",
              borderRadius: "10px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
              
             
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
ورود به پلتفرم
          </Link>
          <HStack>
            <Link
              to="/faq"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(11px, 1vw, 15px)",
                color: colors.white,
                textDecoration: "none",
                backgroundColor: isActive("/faq")
                  ? colors.button.secondory
                  : colors.button.transparent,
                padding: "6px 12px",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
          مشاغل
            </Link>
            <Link
              to="/surveys"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(11px, 1vw, 15px)",
                color: colors.white,
                textDecoration: "none",
                backgroundColor: isActive("/surveys")
                  ? colors.button.secondory
                  : colors.button.transparent,
                padding: "6px 12px",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
             دوره های آموزشی
            </Link>
            <Link
              to="/reports"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(11px, 1vw, 15px)",
                color: colors.white,
                textDecoration: "none",
                backgroundColor: isActive("/reports")
                  ? colors.button.secondory
                  : colors.button.transparent,
                padding: "6px 12px",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
             مهارت آموزی
            </Link>
            <Link
              to="/Consulting"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(11px, 1vw, 15px)",
                color: colors.white,
                textDecoration: "none",
                backgroundColor: isActive("/Consulting")
                  ? colors.button.secondory
                  : colors.button.transparent,
                padding: "6px 12px",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
            استعدادیابی
            </Link>
             <Link
              to="/Consulting"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(11px, 1vw, 15px)",
                color: colors.white,
                textDecoration: "none",
                backgroundColor: isActive("/Consulting")
                  ? colors.button.secondory
                  : colors.button.transparent,
                padding: "6px 12px",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
       مشاوره
            </Link>
          </HStack>

          <Link
            to="/"
            style={{
              fontFamily: fonts.black,
              fontSize: "clamp(14px, 1.2vw, 20px)",
              color: colors.white,
              textDecoration: "none",
              backgroundColor: colors.button.transparent,
              
              
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            <HStack>
              <VStack align="end" fontFamily={fonts.bold}>
                <Text style={{ fontSize: "18px", fontWeight: "600" }}>
                  آکادمی بانوان هور
                </Text>

                <Text style={{ fontSize: "13px", opacity: 0.8 }}>
                  این بار، اولویت با توست
                </Text>
              </VStack>

              <Image src={logo} boxSize="52px" objectFit="contain" />
            </HStack>
          </Link>
        </HStack>
      
    
  );
};

export default NavBar;
