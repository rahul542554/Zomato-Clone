import React from "react";
import axios from "axios";
import { Card, Icon } from "semantic-ui-react";

function ItemCardComponent(props) {
  const returnColour = (number) => {
    let colour = "";
    switch (number) {
      case 1:
      case 2:
        colour = "green";
        break;
      case 3:
      case 4:
        colour = "red";
        break;
      case 5:
      case 6:
        colour = "olive";
        break;
      case 7:
      case 8:
        colour = "pink";
        break;
      case 9:
      case 10:
        colour = "teal";
        break;
      default:
        colour = "grey";
        break;
    }
    return colour;
  };

  const deleteFoodItem = async (_id) => {
    const response = await axios.delete(
      `http://localhost:3001/api/food-items/${_id}`
    );
    if (response.status === 200) {
      props.getAllFoodItems();
    }
  };

  return (
    <Card
      color={returnColour(Math.ceil(Math.random() * 10))}
      className={"card-border"}
    >
      <Card.Content>
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{props.item.productName}</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon
              color="grey"
              className="icon-hover"
              name="trash"
              size="small"
              onClick={() => deleteFoodItem(props.item._id)}
            />
          </div>
        </Card.Header>

        <br />
        <br />

        <Card.Description
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Icon name="rupee" size="small" style={{ marginRight: "2px" }} />
            {props.item.price}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {props.item.rating}
            <Icon name="star" size="small" style={{ marginLeft: "2px" }} />
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ItemCardComponent;
