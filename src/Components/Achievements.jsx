import { Box, Text } from "@chakra-ui/react";
import achievementBookings from "../assets/achievementBookings.png";
import achievementClubs from "../assets/achievementClubs.png";
import achievementMembers from "../assets/achievementMembers.png";
import achievementPayments from "../assets/achievementPayments.png";
function Achievements() {
  return (
    <Box
      padding={"0 5%"}
      alignItems={"center"}
      display={"flex"}
      margin={"50px auto"}
    >
      <Box width={"50%"}>
        <Text width={"60%"} fontWeight={500} fontSize={"33px"}>
          Helping a local <span>business reinvent itself</span>
        </Text>
        <Text>We reached here with our hard work and dedication</Text>
      </Box>
      <Box
        width={"50%"}
        justifyContent={"space-around"}
        display={"flex"}
        gap={"10px"}
        flexWrap={"wrap"}
      >
        <Box width={"40%"} display={"flex"} alignItems={"center"} gap={"5px"}>
          <img
            height={"fit-content"}
            src={achievementMembers}
            alt="achievementMembers"
          />
          <Box>
            <Text fontSize={"28px"} fontWeight={700}>
              2,245,341
            </Text>
            <Text>Members</Text>
          </Box>
        </Box>
        <Box width={"40%"} display={"flex"} alignItems={"center"} gap={"5px"}>
          <img
            height={"fit-content"}
            src={achievementClubs}
            alt="achievementClubs"
          />
          <Box>
            <Text fontSize={"28px"} fontWeight={700}>
              46,328
            </Text>
            <Text>Clubs</Text>
          </Box>
        </Box>
        <Box width={"40%"} display={"flex"} alignItems={"center"} gap={"5px"}>
          <img
            height={"fit-content"}
            src={achievementBookings}
            alt="achievementBookings"
          />
          <Box>
            <Text fontSize={"28px"} fontWeight={700}>
              828,867
            </Text>
            <Text>Event Bookings</Text>
          </Box>
        </Box>
        <Box width={"40%"} display={"flex"} alignItems={"center"} gap={"5px"}>
          <img
            height={"fit-content"}
            src={achievementPayments}
            alt="achievementPayments"
          />
          <Box>
            <Text fontSize={"28px"} fontWeight={700}>
              1,926,436
            </Text>
            <Text>Payments</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Achievements;
