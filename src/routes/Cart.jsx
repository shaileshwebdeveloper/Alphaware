import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const { handleRemoveCart } = useContext(ProductContext);

  const { state } = useContext(ProductContext);

  const removeFromCart = (payload) => {
    const updatedCart = state.cart.filter((item) => item._id !== payload._id);
    handleRemoveCart(updatedCart);
  };

  console.log("statecart", state.cart);

  return (
    <>
      {" "}
      <SimpleGrid columns={3} spacing={10} mt="20px" width={"80%"} m="auto">
        {state.cart?.map((item) => (
          <Box
            key={item._id}
            style={{
              borderRadius: "10%",
              padding: "10%",
              width: "400px",
              margin: "auto",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              textAlign: "left",
            }}
          >
            <Img
              src={item.imageUrl}
              alt=""
              style={{ width: "400px", height: "200px" }}
            />
            <Text as="b" fontSize="md">
              {item.description}
            </Text>
            <br />
            <Flex justifyContent={"space-between"}>
              <Text as="b" fontSize="md">
                {item.price} <span style={{ color: "teal" }}> 25% off</span>
              </Text>
              <Text fontSize="sm" padding={"2px"} w="170px" p="1%">
                <StarIcon /> {item.rating}
              </Text>
            </Flex>
            <br />
            <Text as="b" fontSize="sm" color={"purple"} align={"left"}>
              Big Saving Deal
            </Text>
            <br />
            <br />
            <Flex justifyContent={"space-around"}>
              <Button
                colorScheme="teal"
                variant="outline"
                size="lg"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
