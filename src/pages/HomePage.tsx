import { Grid, GridItem } from "@chakra-ui/react";
import HeroHomePage from "../components/HeroHomePage";

const HomePage = () => {
  return (
    <Grid templateAreas={` "main"`}>
      <GridItem area="main">
        <HeroHomePage />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
