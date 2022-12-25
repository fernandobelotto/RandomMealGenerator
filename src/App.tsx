import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Ingredients } from "./components/Ingredients";
import { MealResponse } from "./model";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [meal, setMeal] = useLocalStorage<MealResponse | null>("recipe", null);

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  function getRandomMeal() {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setMeal(response);
      });
  }

  return (
    <VStack spacing={5}>
      <Button onClick={getRandomMeal}>Get Meal!</Button>
      <Container p={5} bg="gray.100" rounded="lg">
        <VStack>
          {meal?.meals.map((meal) => {
            return (
              <>
                <Image
                  src={meal.strMealThumb}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  rounded="lg"
                />
                <Heading>{meal.strMeal}</Heading>
                <Text textAlign="left" w="100%" fontWeight={500}>
                  Category {meal.strCategory}
                </Text>

                <Tabs w="full">
                  <TabList>
                    <Tab>Instructions</Tab>
                    <Tab>Ingredients</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box>
                        <Text>{meal.strInstructions}</Text>
                      </Box>
                    </TabPanel>
                    <TabPanel w="full">
                      <Ingredients meal={meal} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </>
            );
          })}
        </VStack>
      </Container>
    </VStack>
  );
}
