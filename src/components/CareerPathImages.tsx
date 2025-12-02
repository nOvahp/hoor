import { Box, Flex, VStack, Image } from "@chakra-ui/react";

function CareerPathImages() {
  return (
    <Box
      position="relative"
      w={{ base: "100%", lg: "544px" }}
      h={{ base: "auto", lg: "544px" }}
      display="flex"
      justifyContent="center"
    >
      <Flex gap="28px" align="center">
        {/* Column 1 */}
        <VStack gap="28px" mt={{ lg: "57px" }}>
          <Image
            src="/CareerPath1.png"
            borderRadius="16px"
            w={{ base: "140px", lg: "258px" }}
            h={{ base: "120px", lg: "229px" }}
            objectFit="cover"
          />
          <Image
            src="/CareerPath2.png"
            borderRadius="16px"
            w={{ base: "140px", lg: "258px" }}
            h={{ base: "120px", lg: "229px" }}
            objectFit="cover"
          />
        </VStack>

        {/* Column 2 */}
        <VStack gap="28px" mb={{ lg: "57px" }}>
          <Image
            src="/CareerPath3.png"
            borderRadius="16px"
            w={{ base: "140px", lg: "258px" }}
            h={{ base: "120px", lg: "229px" }}
            objectFit="cover"
          />
          <Image
            src="/CareerPath4.png"
            borderRadius="16px"
            w={{ base: "140px", lg: "258px" }}
            h={{ base: "120px", lg: "229px" }}
            objectFit="cover"
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default CareerPathImages;
