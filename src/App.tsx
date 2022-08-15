import {
  Box,
  Button,
  Center,
  Heading, Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { MealResponse } from "./model";

export default function App() {
  const [meal, setMeal] = useState<MealResponse | null>(null);

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
    <Center>
      <VStack spacing={5}>
        <Button onClick={getRandomMeal}>Get Meal!</Button>
        <Box p={5} bg="gray.100" rounded="lg" w="400px">
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
                  <Text textAlign="left" w="100%" fontWeight={500}>
                    Instructions
                  </Text>
                  <Text>{meal.strInstructions}</Text>
                  <Text textAlign="left" w="100%" fontWeight={500}>
                    Ingredients!
                  </Text>

                  {meal.strIngredient1 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient1} - {meal.strMeasure1}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient2 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient2} - {meal.strMeasure2}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient3 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient3} - {meal.strMeasure3}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient4 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient4} - {meal.strMeasure4}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient5 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient5} - {meal.strMeasure5}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient6 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient6} - {meal.strMeasure6}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient7 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient7} - {meal.strMeasure7}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient8 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient8} - {meal.strMeasure8}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient9 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient9} - {meal.strMeasure9}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient10 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient10} - {meal.strMeasure10}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient11 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient11} - {meal.strMeasure11}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient12 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient12} - {meal.strMeasure12}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient13 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient13} - {meal.strMeasure13}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient14 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient14} - {meal.strMeasure14}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient15 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient15} - {meal.strMeasure15}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient16 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient16} - {meal.strMeasure16}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient17 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient17} - {meal.strMeasure17}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient18 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient18} - {meal.strMeasure18}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient19 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient19} - {meal.strMeasure19}{" "}
                    </Text>
                  ) : null}
                  {meal.strIngredient20 ? (
                    <Text textAlign="left" w="100%">
                      {meal.strIngredient20} - {meal.strMeasure20}{" "}
                    </Text>
                  ) : null}
                </>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    </Center>
  );
}
