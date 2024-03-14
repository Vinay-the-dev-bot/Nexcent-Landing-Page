import { Box, Text, Button } from "@chakra-ui/react";
import unlock from "../assets/unlock.png";
import { gray, green } from "../App";
function Unlock() {
  return (
    <Box
      backgroundColor={"#F5F7FA"}
      display={"flex"}
      padding={"0 5%"}
      alignItems={"center"}
    >
      <Box width={"40%"}>
        <img src={unlock} alt="unlock" />
      </Box>

      <Box
        width={"40%"}
        display={"flex"}
        margin={"auto"}
        gap={"15px"}
        flexDirection={"column"}
      >
        <Text fontSize={"30px"} fontWeight={600} textAlign={"left"}>
          The unseen of spending three years at Pixelgrade
        </Text>
        <Text color={gray} fontSize={"12px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </Text>
        <Button
          _hover={{ bg: green, opacity: ".75" }}
          backgroundColor={green}
          width={"128px"}
          color={"white"}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Unlock;
