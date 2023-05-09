import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../images/zomato_logo.svg";

const NavBarComponent = () => {
  const [tab, setTab] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => {
    setTab({ activeItem: name });
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item as={Link} to="/" name="home" onClick={handleItemClick}>
          <img style={{ width: "75px" }} alt="logo" src={Logo} />
        </Menu.Item>
        <Menu.Item
          color="blue"
          as={Link}
          to="/food-items"
          name="food-items"
          active={tab.activeItem === "food-items"}
          onClick={handleItemClick}
        />
        <Menu.Item
          color="blue"
          as={Link}
          to="/feedbacks"
          name="feedbacks"
          active={tab.activeItem === "feedbacks"}
          onClick={handleItemClick}
        />
        <Menu.Item
          color="blue"
          as={Link}
          to="/contact"
          name="contact-us"
          active={tab.activeItem === "contact-us"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={tab.activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBarComponent;
