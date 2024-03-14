import { Box, Button, UnorderedList } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
function NavBar() {
  return (
    <Box display={"flex"} justifyContent={"space-between"} padding={"20px 0"}>
      <Box>
        <img src={logo} />
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
        <Button width={"80px"}>Login</Button>
        <Button>Sign Up</Button>
      </Box>
    </Box>
  );
}

export default NavBar;
