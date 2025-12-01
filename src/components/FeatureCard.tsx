import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export interface cardData {
  title: string;
  description: string;
  number: string;
}

function FeatureCard({ title, description, number }: cardData) {
  return (
    <HStack
      
      
      bg={"transparent"}
      borderColor={colors.border}
      padding={"1%"}
      alignItems="center"
    >
      <VStack alignItems="flex-end" flex="1">
        <Text
          fontFamily={fonts.bold}
          fontSize={{ base: 16, md: 20, lg: 20, xl: 24 }}
          color="colors.white"
          textAlign="right"
        >
          {title}
        </Text>
        <Text
          fontFamily={fonts.light}
          fontSize={{ base: 12, md: 14, lg: 15, xl: 16 }}
          color="colors.white"
          textAlign="right"
        >
          {description}
        </Text>
      </VStack>
      <Box
        marginLeft="3%"
        borderRadius={25}
        bg={colors.button.primary}
        width={{ base: "40px", md: "45px", lg: "47px", xl: "50px" }}
        height={{ base: "40px", md: "45px", lg: "47px", xl: "50px" }}
        
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        fontSize={30}
      >{number}</Box>
    </HStack>
  );
}

export default FeatureCard;
