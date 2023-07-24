import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  HStack,
  Image,
  VStack,
  Box,
  ScrollView,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const RestHeader = () => {
  const { navigate } = useNavigation();

  const ProfilePage = () => {
    // @ts-ignore
    navigate("EditProfile");
  };
  return (
    <>
      <HStack justifyContent={"space-between"} p={4} alignItems={"center"}>
        <Image
          w={"12"}
          h={"12"}
          resizeMode="contain"
          alt="Image not found"
          source={require("../../assets/wirclogo.png")}
        />
        <TouchableOpacity onPress={ProfilePage}>
          <Image
            w={"12"}
            h={"12"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      </HStack>
    </>
  );
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const OngoingCard: React.FC<{
  name: string;
  duration: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
}> = ({ name, duration, startdatetime, enddatetime, vanue }) => {
  return (
    <>
      <VStack
        space={2}
        p={2}
        w={"72"}
        shadow={3}
        borderWidth={0.5}
        borderColor={"darkBlue.300"}
        style={{ shadowColor: "blue" }}
        borderRadius={"15"}
        bg={"white"}
      >
        <Text
          fontWeight={"medium"}
          fontSize={"lg"}
          color={"amber.600"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          {name}
        </Text>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Duration
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"65%"}>{duration}</Text>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Date & Time
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={3}>
              <Text>{startdatetime}</Text>
              <Text>to</Text>
            </HStack>
            <Text>{enddatetime}</Text>
          </VStack>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Venue
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"60%"}>{vanue}</Text>
        </HStack>
      </VStack>
    </>
  );
};

const UpcomingCard: React.FC<{
  name: string;
  duration: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
}> = ({ name, duration, startdatetime, enddatetime, vanue }) => {
  return (
    <>
      <VStack
        space={2}
        p={2}
        w={"72"}
        shadow={3}
        borderWidth={0.5}
        borderColor={"amber.600"}
        style={{ shadowColor: "#FFD54F" }}
        borderRadius={"15"}
        bg={"white"}
      >
        <Text
          fontWeight={"medium"}
          fontSize={"lg"}
          color={"darkBlue.300"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          {name}
        </Text>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Duration
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"65%"}>{duration}</Text>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Date & Time
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={3}>
              <Text>{startdatetime}</Text>
              <Text>to</Text>
            </HStack>
            <Text>{enddatetime}</Text>
          </VStack>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Venue
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"60%"}>{vanue}</Text>
        </HStack>
      </VStack>
    </>
  );
};

const data = [
  // {
  //   population: 300,
  //   name: "Attendees",
  //   color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
  //     Math.random() * 255
  //   )}, ${Math.floor(Math.random() * 255)}, 1)`,
  //   legendFontColor: "#7F7F7F",
  //   legendFontSize: 15,
  // },
  {
    population: 190,
    name: "Present",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    population: 110,
    name: "Absent",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const data1 = [
  {
    population: 500,
    name: "Present",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    population: 100,
    name: "Absent",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const data2 = [
  {
    population: 400,
    name: "Present",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    population: 200,
    name: "Absent",
    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const ProfilePage = () => {
    // @ts-ignore
    navigate("EditProfile");
  };
  return (
    <>
      <View flex={1} bg={"white"}>
        <RestHeader />
        {/* <HStack justifyContent={"space-between"} p={3} alignItems={"center"}>
          <Image
            w={"12"}
            h={"12"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../assets/wirclogo.png")}
          />
          <TouchableOpacity onPress={ProfilePage}>
            <Image
              w={"12"}
              h={"12"}
              resizeMode="contain"
              alt="Image not found"
              source={require("../../assets/profile.png")}
            />
          </TouchableOpacity>
        </HStack> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4} pl={4} pr={4} pb={4}>
            <HStack alignItems={"center"} space={2}>
              <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
                Ongoing Events
              </Text>
              {/* <Box h={6} w={6}>
              <LottieView
              source={require("../../assets/upcoming/129646-coming-soon.json")}
              autoPlay
              loop
            />
            </Box> */}
            </HStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
                <OngoingCard
                  name="Direct Tax Refresher Course (Physical)"
                  duration="40 Minute"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
                />
                <OngoingCard
                  name="Two days Workshop on Excel Skills for Real World Business
                  Operations"
                  duration="45 Minute"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="NarayanWadi Atladara, Vadodara - 360002"
                />
                <OngoingCard
                  name="Tech Edge Series (Virtual)"
                  duration="45 Minute"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="NarayanWadi Atladara, Vadodara - 360002"
                />
              </HStack>
            </ScrollView>
          </VStack>

          <VStack>
            <HStack alignItems={"center"} space={2}>
              <Text
                fontWeight={"semibold"}
                fontSize={"xl"}
                color={"gray.400"}
                pl={4}
              >
                Reports
              </Text>
              <Box h={7} w={7}>
                <LottieView
                  source={require("../../assets/report/76113-chart-reports.json")}
                  autoPlay
                  loop
                />
              </Box>
            </HStack>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              mt={5}
            >
              <VStack bg={"white"} borderRadius={16} w={"96"}>
                <PieChart
                  data={data}
                  width={screenWidth}
                  height={160}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={""}
                  center={[5, -10]}
                  absolute
                />
                <Text
                  fontWeight={"semibold"}
                  color={"amber.600"}
                  fontSize={"md"}
                  alignSelf={"center"}
                  mx={5}
                >
                  Direct Tax Refresher Course (Physical)
                </Text>
              </VStack>

              <VStack bg={"white"} borderRadius={16} w={"96"}>
                <PieChart
                  data={data1}
                  width={screenWidth}
                  height={160}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={""}
                  center={[5, -10]}
                  absolute
                />
                <Text
                  fontWeight={"semibold"}
                  color={"amber.600"}
                  fontSize={"md"}
                  alignSelf={"center"}
                  mx={5}
                >
                  Two days Workshop on Excel Skills for Real World Business
                  Operations
                </Text>
              </VStack>

              <VStack bg={"white"} borderRadius={16} w={"96"}>
                <PieChart
                  data={data2}
                  width={screenWidth}
                  height={160}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={""}
                  center={[5, -10]}
                  absolute
                />
                <Text
                  fontWeight={"semibold"}
                  color={"amber.600"}
                  fontSize={"md"}
                  alignSelf={"center"}
                  mx={5}
                >
                  Tech Edge Series (Virtual)
                </Text>
              </VStack>
            </ScrollView>
          </VStack>

          <VStack space={4} p={4}>
            <HStack alignItems={"center"} space={3}>
              <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
                Upcoming Events
              </Text>
            </HStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
                <UpcomingCard
                  name="Direct Tax Refresher Course (Physical)"
                  duration="12 Hour"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="Yogi Sabhagruh, Dadar (E), Mumbai"
                />
                <UpcomingCard
                  name="Two days Workshop on Excel Skills for Real World Business Operations"
                  duration="12 Hour"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="RVG Hostel, Near Lallubhai Park, Andheri west."
                />
                <UpcomingCard
                  name="Tech Edge Series (Virtual)"
                  duration="12 Hour"
                  startdatetime="20-06-2023, 7:30 AM"
                  enddatetime="22-06-2023, 9:30 AM"
                  vanue="	Virtual Mode"
                />
              </HStack>
            </ScrollView>
          </VStack>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
