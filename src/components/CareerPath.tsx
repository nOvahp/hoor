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
      h={{ base: "auto", lg: "420px" }}
      pt={{ base: "32px", lg: "0px" }}
      pb={{ base: "32px", lg: "60px" }}
      px={{ base: "20px", lg: "120px" }}
      overflow="hidden"
      position="relative"
    >
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        justify="space-between"
        align="center"
        gap={{ base: "40px", lg: "0" }}
        mt={{ lg: "-60px" }}
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
