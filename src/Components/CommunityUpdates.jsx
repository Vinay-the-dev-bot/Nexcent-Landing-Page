import { Box, Center, Img, Text } from "@chakra-ui/react";
import { gray, green } from "../App";
import communityImage from "../assets/communityImage.png";
import communityImage2 from "../assets/communityImage2.png";
import communityImage3 from "../assets/communityImage3.png";

import right from "../assets/Right.png";
function CommunityUpdates() {
  return (
    <Box padding={"0 5%"}>
      <Text textAlign={"center"} fontSize={"36px"} fontWeight={600}>
        Caring is the new marketing
      </Text>
      <Text
        textAlign={"center"}
        margin={"auto"}
        width={"50%"}
        fontSize={"16px"}
        color={gray}
      >
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </Text>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        margin={"10px auto"}
      >
        <Box
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Img src={communityImage} alt="communityImage" />
          <Box
            borderRadius={"5px"}
            transform={"translate(0 , -50px)"}
            padding={"10px"}
            bg={"#F5F7FA"}
            width={"80%"}
            textAlign={"center"}
            shadow={"0px 4px 8px 0px #ABBED1 "}
          >
            <Text>
              Creating Streamlined
              <br /> Safeguarding Processes with <br />
              OneRen
            </Text>
            <Text color={green} margin={"10px 0"}>
              ReadMore
              <Img
                verticalAlign={"middle"}
                display={"inline-block"}
                src={right}
                paddingLeft={"5px"}
                alt="right"
              />
            </Text>
          </Box>
        </Box>
        <Box
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Img src={communityImage2} alt="communityImage2" />
          <Box
            borderRadius={"5px"}
            transform={"translate(0 , -50px)"}
            padding={"10px"}
            bg={"#F5F7FA"}
            width={"80%"}
            textAlign={"center"}
            shadow={"0px 4px 8px 0px #ABBED1 "}
          >
            <Text>
              What are your safeguarding <br />
              responsibilities and how can you <br />
              manage them?
            </Text>
            <Text color={green} margin={"10px 0"}>
              ReadMore
              <Img
                verticalAlign={"middle"}
                display={"inline-block"}
                src={right}
                paddingLeft={"5px"}
                alt="right"
              />
            </Text>
          </Box>
        </Box>
        <Box
          width={"30%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Img src={communityImage3} alt="communityImage3" />
          <Box
            borderRadius={"5px"}
            transform={"translate(0 , -50px)"}
            padding={"10px"}
            bg={"#F5F7FA"}
            width={"80%"}
            textAlign={"center"}
            shadow={"0px 4px 8px 0px #ABBED1 "}
          >
            <Text>
              Revamping the Membership
              <br /> Model with Triathlon <br /> Australia
            </Text>
            <Text color={green} margin={"10px 0"}>
              ReadMore
              <Img
                verticalAlign={"middle"}
                display={"inline-block"}
                src={right}
                paddingLeft={"5px"}
                alt="right"
              />
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CommunityUpdates;
