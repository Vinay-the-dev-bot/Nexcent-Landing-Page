import { Box, Button, UnorderedList } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import { green } from "../App";
function NavBar() {
  return (
    <Box
      backgroundColor={"#F5F7FA"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={"20px 5%"}
    >
      <Box>
        <img src={logo} alt="logo" />
      </Box>
      <Box width={"50%"}>
        <UnorderedList
          justifyContent={"space-around"}
          listStyleType={"none"}
          display={"flex"}
        >
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testomonial</li>
          <li>FAQ</li>
        </UnorderedList>
      </Box>
      <Box display={"flex"} gap={"20px"}>
        <Button
          width={"80px"}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          color={green}
        >
          Login
        </Button>
        <Button
          width={"80px"}
          _hover={{ bg: green, opacity: ".75" }}
          color={"white"}
          bg={green}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default NavBar;
