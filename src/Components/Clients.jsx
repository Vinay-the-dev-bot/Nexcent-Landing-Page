import { Box, Center, Text } from "@chakra-ui/react";
import logo1 from "../assets/clientLogo1.png";
import logo2 from "../assets/clientLogo2.png";
import logo3 from "../assets/clientLogo3.png";
import logo4 from "../assets/clientLogo4.png";
import logo5 from "../assets/clientLogo5.png";
import logo6 from "../assets/clientLogo6.png";
import logo7 from "../assets/clientLogo7.png";
import { gray } from "../App";
function Clients() {
  return (
    <Box
      height={"190px"}
      textAlign={"Center"}
      display={"flex"}
      marginTop={"20px"}
      flexDirection={"column"}
      gap={"30px"}
      padding={"0 5%"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Text fontSize={"50px"}>Our Clients</Text>
        <Text color={gray}>
          We have been working with some Fortune 500+ clients
        </Text>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        margin={"auto"}
      >
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
        <img src={logo7} alt="logo7" />
      </Box>
    </Box>
  );
}

export default Clients;
