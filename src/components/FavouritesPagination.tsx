import { HStack, Box } from "@chakra-ui/react";
import { colors } from "../utilities/colors";

interface FavouritesPaginationProps {
  totalPages: number;
  currentPage: number;
  onDotClick: (pageIndex: number) => void;
}

function FavouritesPagination({
  totalPages,
  currentPage,
  onDotClick,
}: FavouritesPaginationProps) {
  return (
    <HStack gap="12px" mt="20px">
      {Array.from({ length: totalPages }, (_, index) => (
        <Box
          key={index}
          width={currentPage === index ? "40px" : "12px"}
          height="12px"
          bg={currentPage === index ? colors.button.primary : "#C3C3C3"}
          borderRadius="full"
          cursor="pointer"
          onClick={() => onDotClick(index)}
          transition="all 0.3s"
          _hover={{
            bg: currentPage === index ? colors.button.primary : "#888",
          }}
        />
      ))}
    </HStack>
  );
}

export default FavouritesPagination;
