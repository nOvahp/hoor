import { Grid, GridItem } from "@chakra-ui/react";
import HeroHomePage from "../components/HeroHomePage";
import Favourites from "../components/Favourites";
import { mockFavCards } from "../data/favouritesData";
import { specializedCoursesData } from "../data/specializedCoursesData";
import CareerPath from "../components/CareerPath";

const HomePage = () => {
  return (
    <Grid templateAreas={` "main"`}>
      <GridItem area="main">
        <HeroHomePage />
        <Favourites 
          title="محبوب ترین دوره های رشد و توسعه فردی"
          data={mockFavCards}
        />
        <Favourites 
          title="محبوب‌ترین دوره های آموزش تخصصی"
          data={specializedCoursesData}
        />
        <CareerPath />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
