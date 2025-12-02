import { Box, Flex } from "@chakra-ui/react";
import { colors } from "../utilities/colors";
import CareerPathImages from "./CareerPathImages";
import CareerPathContent from "./CareerPathContent";

function CareerPath() {
  return (
    <Box
      as="section"
      w="100%"
      bg={colors.button.primary}
      backgroundImage="url('/backgroundImageHero.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h={{ base: "auto", md: "auto", lg: "420px", xl: "500px" }}
      pt={{ base: "50px", sm: "60px", md: "70px", lg: "0px", xl: "0px" }}
      pb={{ base: "50px", sm: "60px", md: "70px", lg: "60px", xl: "80px" }}
      px={{ base: "6%", sm: "8%", md: "6%", lg: "6%", xl: "6%" }}
      maxW="100vw"
      overflow="hidden"
      position="relative"
    >
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        justify="space-between"
        align="center"
        gap={{ base: "40px", sm: "50px", md: "60px", lg: "0" }}
        mt={{ base: "0", lg: "-60px", xl: "-80px" }}
      >
        {/* Left Side - Images */}
        <CareerPathImages />

        {/* Right Side - Content */}
        <CareerPathContent />
      </Flex>
    </Box>
  );
}

export default CareerPath;
