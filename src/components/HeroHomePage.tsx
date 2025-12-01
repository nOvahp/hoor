import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import heroImage from "../../public/HeroSection.png";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import Features from "./Features";

const HeroHomePage = () => {
  return (
    <Box
      as="section"
      position="relative"
      pt="64.9%"
      bgImage={`url(${heroImage})`}
      bgSize="100%"
      bgPos={"top"}
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background={{
          base: "linear-gradient(0deg, rgba(122, 226, 207, 0) 0%, #000000ff 60%)",
          md: "linear-gradient(180deg, transparent 50%, #000000ff 100%)",
        }}
        pointerEvents="none"
      />
      <VStack
        position="absolute"
        top={{ base: "10%", md: "20%", lg: "31%" }}
        right={{ base: "5%", md: "5%" }}
        left={{ base: "5%", md: "50%", lg: "50%" }}
        alignItems="flex-end"
        gap={{ base: 3, md: 4, lg: 6 }}
        pointerEvents="none"
      >
        <Text
          fontFamily={fonts.bold}
          fontSize={{ base: 12, md: 13, lg: 64 }}
          color="white"
          textAlign="right"
        >
          این بار، اولویت با توست
        </Text>
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: 12, md: 13, lg: 24 }}
          color="white"
          textAlign="right"
        >
          سال‌ها برای همه چیز وقت گذاشتی. حالا زمان سرمایه‌گذاری روی ارزشمندترین
          دارایی‌ات فرا رسیده: خودت.
        </Text>
        <HStack>
          <Button
            variant="outline"
            borderWidth={2}
            borderColor={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize={{ base: "10px", md: "12px", lg: "14px" }}
            px={{ base: 4, md: 6, lg: 10 }}
            py={{ base: 2, md: 3 }}
            borderRadius={5}
            _hover={{ bg: "rgba(255,255,255,0.12)" }}
            pointerEvents="auto"
          >
            ثبت نام
          </Button>

          <Button
            bg={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize={{ base: "10px", md: "12px", lg: "14px" }}
            px={{ base: 5, md: 7, lg: 12 }}
            py={{ base: 2, md: 3 }}
            borderRadius={5}
            boxShadow="0 4px 14px rgba(0,0,0,0.15)"
            _hover={{ bg: colors.button.primary, opacity: 0.85 }}
            pointerEvents="auto"
          >
            دعوت به اولین قدم
          </Button>
        </HStack>
      </VStack>
      <Box
        borderRadius={15}
        position="absolute"
        bottom={{ base: "10%", md: "20%", lg: "10%" }}
        mx={"6%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={4}
        bg="rgba(0,0,0,0.5)"
        
      >
        <Features />
      </Box>
    </Box>
  );
};

export default HeroHomePage;
