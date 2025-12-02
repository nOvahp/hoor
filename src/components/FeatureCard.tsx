import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export interface cardData {
  title: string;
  description: string;
  number: string;
}

function FeatureCard({ title, description, number }: cardData) {
  return (
    <HStack
      bg="transparent"
      borderColor={colors.border}
      padding={{ base: "0.5%", sm: "1%", md: "1.5%", lg: "1%" }}
      alignItems="center"
      gap={{ base: 1, sm: 1.5, md: 3, lg: 3 }}
    >
      <VStack 
        alignItems="flex-end" 
        flex="1"
        gap={{ base: 0.5, sm: 0.5, md: 1, lg: 1 }}
      >
        <Text
          fontFamily={fonts.bold}
          fontSize={{ base: "11px", sm: "13px", md: "16px", lg: "18px", xl: "20px" }}
          color="white"
          textAlign="right"
          lineHeight="1.2"
        >
          {title}
        </Text>
        <Text
          fontFamily={fonts.light}
          fontSize={{ base: "9px", sm: "10px", md: "12px", lg: "14px", xl: "15px" }}
          color="white"
          textAlign="right"
          lineHeight="1.3"
          opacity={0.9}
        >
          {description}
        </Text>
      </VStack>
      
      <Box
        borderRadius="50%"
        bg={colors.button.primary}
        width={{ base: "26px", sm: "32px", md: "40px", lg: "45px", xl: "50px" }}
        height={{ base: "26px", sm: "32px", md: "40px", lg: "45px", xl: "50px" }}
        minW={{ base: "26px", sm: "32px", md: "40px", lg: "45px", xl: "50px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{ base: "14px", sm: "16px", md: "22px", lg: "26px", xl: "30px" }}
        fontWeight="bold"
        color="white"
        flexShrink={0}
      >
        {number}
      </Box>
    </HStack>
  );
}

export default FeatureCard;
