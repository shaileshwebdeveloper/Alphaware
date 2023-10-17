import {  NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// NavLinks
const baseStyle = {
  color: "white",
  textDecoration: "none",
};

const activeStyle = {
  color: "red",
  textDecoration: "none",
};

export const Navbar = () => {
  const { state } = useContext(ProductContext);

  const links = [
    {
      to: "/",
      title: "HOME",
    },
    {
      to: "/about",
      title: "ABOUT",
    },
    {
      to: "/contact",
      title: "CONTACT",
    },
    {
      to: "/cart",
      title: "CART",
    },
  ];

  return (
    <Box
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        backgroundColor: "teal",
        padding: "20px",
      }}
    >
      {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title === "CART" ? (
            <>
              {item.title}{" "}
              <sup>
                <Text display="inline" fontSize="lg" fontWeight={"bold"}>
                  {state.cart.length > 0 ? state.cart.length : ""}
                </Text>
              </sup>{" "}
            </>
          ) : (
            <>{item.title} </>
          )}
        </NavLink>
      ))}
    </Box>
  );
};
