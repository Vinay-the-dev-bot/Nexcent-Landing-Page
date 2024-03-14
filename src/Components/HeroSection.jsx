import { Box, Button, Text } from "@chakra-ui/react";
import illustration from "../assets/HeroIllustration.png";
import { green } from "../App";
function HeroSection() {
  return (
    <Box
      backgroundColor={"#F5F7FA"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={"50px 5%"}
      alignItems={"center"}
    >
      {/* font-family: Inter; font-size: 64px; font-weight: 600; line-height: 76px;
      letter-spacing: 0em; text-align: left; //styleName: Heading/Headline 1;
      font-family: Inter; font-size: 64px; font-weight: 600; line-height: 76px;
      letter-spacing: 0em; text-align: left; */}

      <Box width={"40%"} display={"flex"} gap={"5px"} flexDirection={"column"}>
        <Text
          fontFamily={"Inter"}
          fontSize={"50px"}
          fontWeight={600}
          lineHeight={"76px"}
          textAlign={"left"}
        >
          Lessons and insights <span>from 8 years</span>
        </Text>
        <Text fontSize={"16px"}>
          Where to grow your business as a photographer: site or social media?
        </Text>
        <Button
          _hover={{ bg: green, opacity: ".75" }}
          backgroundColor={green}
          width={"128px"}
          color={"white"}
        >
          Register
        </Button>
      </Box>
      <Box width={"40%"}>
        <img src={illustration} />
      </Box>
    </Box>
  );
}

export default HeroSection;
