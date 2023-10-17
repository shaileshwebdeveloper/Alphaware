import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { ProductContext } from "../context/ProductContext";

export const Products = () => {
  const { getAllProduct, handleAddCart, handleRemoveCart } =
    useContext(ProductContext);

  const { state } = useContext(ProductContext);

  useEffect(() => {
    axios
      .post(
        "http://3.7.252.58:4001/product/getAllProduct",
        {
          limit: 100,
          page: 0,
          search: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            cookies: {
              "connect.sid":
                "=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8",
            },
          },
        },
      )
      .then((response) => getAllProduct(response.data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  const addCart = (product) => {
    const productExist = state.cart.filter((item) => item._id === product._id);

    if (productExist.length === 0) {
      handleAddCart(product);
    } else {
      alert("Product Already Exist");
    }
  };

  console.log("cart", state.cart);

  return (
    <>
      <SimpleGrid columns={3} spacing={10} mt="20px" width={"80%"} m="auto">
        {state.products?.map((item) => (
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
                {item.price}{" "}
                <span style={{ color: "teal" }}>
                  <Img
                    w="100px"
                    h="50px"
                    src={
                      "https://media2.giphy.com/media/KyS5Ilk5RR5ygeipqi/200w.webp?cid=ecf05e476q18atyrzctff66i9vajvigsmafau8zinb4ko1xw&ep=v1_gifs_search&rid=200w.webp&ct=g"
                    }
                    alt="sale"
                  />
                </span>
              </Text>
              <Text>
                {item.rating} <StarIcon />
              </Text>
            </Flex>
            <Text as="b" fontSize="sm" color={"purple"} align={"left"}>
              Big Saving Deal
            </Text>
            <br />
            <br />
            <Flex justifyContent={"space-around"}>
              <Button
                colorScheme="teal"
                color="black"
                variant="outline"
                size="lg"
                bgColor="teal"
                onClick={() => addCart(item)}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
