import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "semantic-ui-react";
import ItemCardComponent from "./ItemCardComponent";

function FoodItemsComponent() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    getAllFoodItems();
  }, []);

  const getAllFoodItems = async () => {
    const response = await axios.get("http://localhost:3001/api/food-items");
    setFoodItems(response.data);
  };

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Card.Group itemsPerRow={3}>
        {foodItems.map((item) => (
          <ItemCardComponent
            key={item._id}
            item={item}
            getAllFoodItems={getAllFoodItems}
          />
        ))}
      </Card.Group>
    </Container>
  );
}

export default FoodItemsComponent;
