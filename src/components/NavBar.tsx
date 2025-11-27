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
    <Box
      bg={"transparent"}
      mx={"6%"}
      mt={"0px"}
      mb={"30px"}
      
      borderColor={colors.border}
      borderRadius={15}
      fontFamily={fonts.body}
    >
      <HStack
        justifyContent={"space-between"}
        padding={"1%"}
        gap={2}
        flexWrap="nowrap"
      >
        <HStack gap={1} flexWrap="nowrap" justifyContent="center">
          <Link
            to="/account"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(12px, 1vw, 14px)",
              color: colors.white,
              textDecoration: "none",
              backgroundColor: isActive("/account")
                ? colors.button.primary
                : colors.button.primary,
              padding: "10px 20px",
              borderRadius: "10px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
              marginRight: "7%",
              marginLeft: "7%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            دعوت به اولین قدم
          </Link>

          <Link
            to="/faq"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.text,
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
            داستان موفقیت
          </Link>
          <Link
            to="/surveys"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.text,
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
            مسیر شکوفایی
          </Link>
          <Link
            to="/reports"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.text,
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
            شناخت
          </Link>
          <Link
            to="/Consulting"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.text,
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
            بیداری
          </Link>
        </HStack>
        <Link
          to="/"
          style={{
            fontFamily: fonts.black,
            fontSize: "clamp(14px, 1.2vw, 20px)",
            color: colors.black,
            textDecoration: "none",
            backgroundColor: colors.button.transparent,
            padding: "8px 16px",
            borderRadius: "8px",
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
    </Box>
  );
};

export default NavBar;
