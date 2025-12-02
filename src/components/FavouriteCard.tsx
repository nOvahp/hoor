import { Box, Button, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";

export interface FavCardData {
  id: number;
  title: string;
  
  sessions: string;
  hours: string;
  image: string; 
}

interface FavouriteCardProps {
  data: FavCardData;
}

function FavouriteCard({ data }: FavouriteCardProps) {
  return (
    <Box
      as="section"
      position="relative"
      w="294px"
      h="398px"
      bgImage={`url(${data.image})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius="16px"
      overflow="hidden"
    >
      <VStack
        position="absolute"
        bottom="20px"
        left="0"
        right="0"
        alignItems="center"
      >
        <Text
          fontFamily={fonts.bold}
          fontSize="20px"
          color="white"
          textAlign="center"
        >
          {data.title}
        </Text>

        
        <HStack>
          <Box
            borderWidth={2}
            borderColor={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize="14px"
            px={6}
            py={2}
            borderRadius={5}
          >
            {data.sessions}
          </Box>

          <Box
            borderWidth={2}
            borderColor={colors.button.primary}
            color="white"
            fontFamily={fonts.body}
            fontSize="14px"
            px={6}
            py={2}
            borderRadius={5}
          >
            {data.hours}
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}

export default FavouriteCard;
