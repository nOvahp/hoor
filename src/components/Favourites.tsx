import { HStack, VStack, Text, Box, ScrollArea, Flex } from "@chakra-ui/react";
import { fonts } from "../utilities/font";
import { colors } from "../utilities/colors";
import { Link } from "react-router-dom";
import FavouriteCard, { type FavCardData } from "./FavouriteCard";
import FavouritesPagination from "./FavouritesPagination";
import { useFavouritesScroll } from "../hooks/useFavouritesScroll";

interface FavouritesProps {
  title: string;
  data: FavCardData[];
}

function Favourites({ title, data }: FavouritesProps) {
  const {
    currentPage,
    totalPages,
    scrollRef,
    isDragging,
    handleDotClick,
    handleScroll,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useFavouritesScroll({ totalCards: data.length });

  return (
    <VStack mx="6%" mb={{ base: "40px", sm: "45px", md: "50px", lg: "55px", xl: "65px" }}>
      
      <HStack justifyContent="space-between" width="100%" mb={{ base: "12px", sm: "24px", md: "28px", lg: "32px" }}>
        <Link
          to="/"
          style={{
            fontFamily: fonts.body,
            fontSize: "20px",
            color: colors.dark,
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textDecoration = "underline")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.textDecoration = "none")
          }
        >
          مشاهده همه
        </Link>

        <Text 
          color={colors.black} 
          fontFamily={fonts.bold} 
          fontSize={{ base: "12px", sm: "24px", md: "30px", lg: "35px", xl: "40px" }}
        >
          {title}
        </Text>
      </HStack>

      
      <ScrollArea.Root 
        width="100%" 
        maxW={{ 
          base: "320px",  // 1 card: 294px + 32px gap
          sm: "425px",    // 2 cards: 294*2 + 32*1 + 32 = 652px
          md: "768px",    // 3 cards: 294*3 + 32*2 + 32 = 978px
          lg: "1022px" ,
          xl: "1372px"   // 4 cards: 294*4 + 32*3 = 1272px
        }} 
        size="lg"
      >
        <ScrollArea.Viewport 
          ref={scrollRef} 
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <ScrollArea.Content py="4">
            <Flex gap="32px" flexWrap="nowrap">
              {data.map((item) => (
                <Box key={item.id} flexShrink={0}>
                  <FavouriteCard data={item} />
                </Box>
              ))}
            </Flex>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Corner />
      </ScrollArea.Root>

      
      <FavouritesPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onDotClick={handleDotClick}
      />
    </VStack>
  );
}

export default Favourites;
