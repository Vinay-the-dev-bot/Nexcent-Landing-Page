import { Box, Text } from "@chakra-ui/react";
import { gray } from "../App";
import member from "../assets/member.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
function Community() {
  return (
    <Box
      textAlign={"Center"}
      display={"flex"}
      marginTop={"20px"}
      flexDirection={"column"}
      gap={"30px"}
      padding={"0 5%"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Text fontWeight={"500"} width={"43%"} fontSize={"35px"}>
          Manage your entire community in a single system
        </Text>
        <Text color={gray}>Who is Nextcent suitable for?</Text>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        margin={"auto"}
      >
        <Box
          display={"flex"}
          width={"90%"}
          margin={"auto"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"20%"}
            flexDirection={"column"}
          >
            <img width={"80px"} src={member} alt="member" />
            <Text fontSize={"30px"} fontWeight={500}>
              Membership Organisations
            </Text>
            <Text fontSize={"12px"} color={gray}>
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"20%"}
            flexDirection={"column"}
          >
            <img width={"80px"} src={member2} alt="member" />
            <Text fontSize={"30px"} fontWeight={500}>
              National Associations
            </Text>
            <Text fontSize={"12px"} color={gray}>
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"20%"}
            flexDirection={"column"}
          >
            <img width={"80px"} src={member3} alt="member" />
            <Text fontSize={"30px"} fontWeight={500}>
              Clubs And Groups
            </Text>
            <Text fontSize={"12px"} color={gray}>
              Our membership management software provides full automation of
              membership renewals and payments
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Community;
