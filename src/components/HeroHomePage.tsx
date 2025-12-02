import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import heroImage from "../../public/HeroSection.png";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import Features from "./Features";
import Favourites from "./Favourites";

const HeroHomePage = () => {
  return (
    <Box
      as="section"
      position="relative"
      pt={{ base: "100%", sm: "80%", md: "65%", lg: "55%", xl: "50.9%" }}
      bgImage={`url(${heroImage})`}
      bgSize="cover"
      bgPos="top"
      bgRepeat="no-repeat"
      mb={{ base: "40px", sm: "45px", md: "50px", lg: "55px", xl: "65px" }}
    >
      
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background={{
          base: "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 50%, #000000ee 95%)",
          md: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 40%, #000000ff 95%)",
        }}
        pointerEvents="none"
      />
      
      
      <VStack
        position="absolute"
        top={{ base: "12%", sm: "14%", md: "18%", lg: "22%", xl: "25%" }}
        right={{ base: "6%", md: "6%", lg: "6%" }}
        left={{ base: "6%", md: "6%", lg: "50%" }}
        alignItems={{ base: "center", md: "flex-end" }}
        gap={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        pointerEvents="none"
      >
        <Text
          fontFamily={fonts.bold}
          fontSize={{ base: "18px", sm: "22px", md: "28px", lg: "36px", xl: "50px" }}
          color="white"
          textAlign={{ base: "center", md: "right" }}
          lineHeight={{ base: "1.3", md: "1.2" }}
        >
          این بار، اولویت با توست
        </Text>
        
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "17px", xl: "20px" }}
          color="white"
          textAlign={{ base: "center", md: "right" }}
          lineHeight={{ base: "1.6", md: "1.5" }}
          maxW={{ base: "100%", md: "90%", lg: "85%", xl: "100%" }}
        >
          سال‌ها برای همه چیز وقت گذاشتی. حالا زمان سرمایه‌گذاری روی ارزشمندترین
          دارایی‌ات فرا رسیده: خودت.
        </Text>
        
        <HStack
          gap={{ base: 2, sm: 3, md: 3, lg: 4 }}
          flexWrap={{ base: "wrap", sm: "nowrap" }}
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Button
            variant="outline"
            borderWidth={2}
            borderColor={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "14px", xl: "15px" }}
            px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10 }}
            py={{ base: 2, sm: 2.5, md: 2.5, lg: 3 }}
            borderRadius={5}
            _hover={{ bg: "rgba(255,255,255,0.12)" }}
            pointerEvents="auto"
            minW={{ base: "100px", sm: "110px" }}
          >
            ثبت نام
          </Button>

          <Button
            bg={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "14px", xl: "15px" }}
            px={{ base: 5, sm: 6, md: 7, lg: 10, xl: 12 }}
            py={{ base: 2, sm: 2.5, md: 2.5, lg: 3 }}
            borderRadius={5}
            boxShadow="0 4px 14px rgba(0,0,0,0.15)"
            _hover={{ bg: colors.button.primary, opacity: 0.85 }}
            pointerEvents="auto"
            minW={{ base: "120px", sm: "130px" }}
          >
            دعوت به اولین قدم
          </Button>
        </HStack>
      </VStack>
      
      
      <Box
        borderRadius={{ base: 6, sm: 8, md: 12, lg: 14, xl: 15 }}
        position="absolute"
        bottom={{ base: "2%", sm: "5%", md: "12%", lg: "10%", xl: "10%" }}
        mx="6%"
        width="88%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={{ base: 1.5, sm: 2, md: 3, lg: 3.5, xl: 4 }}
        bg="rgba(0,0,0,0.5)"
        backdropFilter="blur(10px)"
      >
        <Features />
      </Box>
    </Box>
  );
};

export default HeroHomePage;
