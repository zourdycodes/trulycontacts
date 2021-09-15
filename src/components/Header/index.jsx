import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../logo.svg";

export const Header = ({ pages }) => {
  const { pathname } = useLocation();

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />

      <Menu.Item
        style={{
          fontSize: "24px",
        }}
        as={Link}
        to="/"
      >
        TrulyContacts
      </Menu.Item>

      {pathname === "/" && (
        <Menu.Item
          position="right"
          style={{
            fontSize: "17px",
          }}
        >
          <Button as={Link} to="/contacts/create" basic primary icon>
            <Icon name="add"></Icon>
            Create Contact
          </Button>
        </Menu.Item>
      )}

      {pathname === "/" && (
        <Menu.Item
          position={`${pages === "register" ? "right" : ""}`}
          style={{
            fontSize: "17px",
          }}
        >
          <Button color="red" icon basic>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};
