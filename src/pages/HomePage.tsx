import { Grid, GridItem } from "@chakra-ui/react";
import HeroBox from "../components/HeroBox";

const HomePage = () => {
  return (
    <Grid templateAreas={` "main"`}>
      

      <GridItem area="main">
        <HeroBox />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
