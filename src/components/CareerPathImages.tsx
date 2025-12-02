import { Box, Flex, VStack, Image } from "@chakra-ui/react";

function CareerPathImages() {
  return (
    <Box
      position="relative"
      w={{ base: "100%", md: "80%", lg: "544px", xl: "650px" }}
      h={{ base: "auto", lg: "544px", xl: "650px" }}
      display="flex"
      justifyContent="center"
      mb={{ base: "20px", md: "30px", lg: "0" }}
    >
      <Flex gap={{ base: "16px", sm: "20px", lg: "28px" }} align="center">
        {/* Column 1 */}
        <VStack gap={{ base: "16px", sm: "20px", lg: "28px" }} mt={{ lg: "57px" }}>
          <Image
            src="/CareerPath1.png"
            borderRadius="16px"
            w={{ base: "38vw", sm: "140px", md: "180px", lg: "258px", xl: "300px" }}
            h={{ base: "33vw", sm: "120px", md: "160px", lg: "229px", xl: "270px" }}
            objectFit="cover"
          />
          <Image
            src="/CareerPath2.png"
            borderRadius="16px"
            w={{ base: "38vw", sm: "140px", md: "180px", lg: "258px", xl: "300px" }}
            h={{ base: "33vw", sm: "120px", md: "160px", lg: "229px", xl: "270px" }}
            objectFit="cover"
          />
        </VStack>

        {/* Column 2 */}
        <VStack gap={{ base: "16px", sm: "20px", lg: "28px" }} mb={{ lg: "57px" }}>
          <Image
            src="/CareerPath3.png"
            borderRadius="16px"
            w={{ base: "38vw", sm: "140px", md: "180px", lg: "258px", xl: "300px" }}
            h={{ base: "33vw", sm: "120px", md: "160px", lg: "229px", xl: "270px" }}
            objectFit="cover"
          />
          <Image
            src="/CareerPath4.png"
            borderRadius="16px"
            w={{ base: "38vw", sm: "140px", md: "180px", lg: "258px", xl: "300px" }}
            h={{ base: "33vw", sm: "120px", md: "160px", lg: "229px", xl: "270px" }}
            objectFit="cover"
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default CareerPathImages;
