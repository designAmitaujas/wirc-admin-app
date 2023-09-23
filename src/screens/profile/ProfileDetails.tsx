import { FontAwesome5, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import * as Yup from "yup";
import { CustomButton, CustomInput } from "../../components/CustomForm";
import { TouchableOpacity } from "react-native-gesture-handler";

const initialValue = {
  name: "CA. Mihir Shah",
  email: "mihirshah@gmail.com",
  state: "",
  city: "",
  mobilenumber: "7885694875",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  state: Yup.string().required("State is required field"),
  city: Yup.string().required("City is required field"),
  mobilenumber: Yup.string().min(10).max(10).required(),
});

const RestHeader = () => {
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

  const logout = () => {
    // @ts-ignore
    navigate("Login");
  };
  return (
    <HStack
      backgroundColor="#0f045d"
      borderRadius={25}
      py="2"
      space={5}
      mt={2}
      alignItems="center"
      alignSelf={"center"}
      w="95%"
    >
      <Button
        bg="transparent"
        colorScheme={"white"}
        w="14%"
        ml={2}
        onPress={goBack}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      />
      <Text
        color="white"
        ml={16}
        fontSize="22"
        fontWeight="bold"
        mb={1}
        w={"41%"}
      >
        Profile
      </Text>
      <TouchableOpacity onPress={logout}>
        <Feather name="power" size={24} color="white" />
      </TouchableOpacity>
    </HStack>
  );
};

const ProfileScreen = () => {
  const [key, setKey] = React.useState(Math.random());

  const handleSubmit = () => {};

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <ScrollView
          bg={"white"}
          showsVerticalScrollIndicator={false}
          h={"full"}
        >
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleSubmit,
              values,
              touched,
              errors,
              handleChange,
              setFieldValue,
              isSubmitting,
            }) => {
              return (
                <>
                  <ScrollView p={4}>
                    <VStack space={1} mt={5} mb={3} alignSelf={"center"}>
                      {/* <Avatar
                        borderWidth={2}
                        borderColor={"#0f045d"}
                        bg="white"
                        alignSelf={"center"}
                        mb={3}
                        size={"xl"}
                        source={{
                          uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                        }}
                      /> */}
                      <Image
                        borderWidth={2}
                        borderColor={"#0f045d"}
                        alignSelf={"center"}
                        borderRadius={"full"}
                        mb={3}
                        w={"24"}
                        h={"24"}
                        resizeMode="contain"
                        alt="Image not found"
                        source={require("../../../assets/profile.png")}
                      />
                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.name}
                        errMsg={errors.name}
                        isInvalid={!!touched.name && !!errors.name}
                        label="Name"
                        name="name"
                        placeholder="Enter Full Name"
                        setFieldValue={setFieldValue}
                        isRequired={true}
                        value={values.name}
                      />

                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.email}
                        errMsg={errors.email}
                        isInvalid={!!touched.email && !!errors.email}
                        label="Email Address"
                        name="email"
                        keyboardType="email-address"
                        placeholder="Enter Email Address"
                        setFieldValue={setFieldValue}
                        isRequired={true}
                        value={values.email}
                      />
                      <CustomInput
                        w={"72"}
                        keyboardType="numeric"
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.mobilenumber}
                        errMsg={errors.mobilenumber}
                        isInvalid={
                          !!touched.mobilenumber && !!errors.mobilenumber
                        }
                        label="Mobile Number"
                        name="mobilenumber"
                        placeholder="Enter Mobile Number"
                        setFieldValue={setFieldValue}
                        isRequired={true}
                        value={values.mobilenumber}
                      />

                      {/* <FormControl.Label isRequired mt={1}>
                        State
                      </FormControl.Label>
                      <Select
                        // @ts-ignore
                        name="State"
                        dropdownIcon={
                          <Entypo
                            name="chevron-small-down"
                            size={30}
                            color="#64B5F6"
                            style={{ marginRight: 10 }}
                          />
                        }
                        errMsg={errors.state}
                        w={"72"}
                        mt={-1}
                        alignSelf={"center"}
                        placeholder="Select State"
                        borderRadius={12}
                        borderColor={"#0f045d"}
                        value={values.state}
                        isInvalid={!!touched.state && !!errors.state}
                        onValueChange={handleChange("state")}
                        _selectedItem={{
                          endIcon: (
                            <Feather
                              name="check"
                              size={18}
                              color="#64B5F6"
                              style={{ marginTop: 2 }}
                            />
                          ),
                        }}
                      >
                        <Select.Item label="Gujrat" value="gujrat" />
                        <Select.Item label="Hariyana" value="hariyana" />
                        <Select.Item label="Bihar" value="bihar" />
                        <Select.Item label="Punjab" value="punjab" />
                      </Select>
                      {errors.state && touched.state && (
                        <Text color={"red.600"} fontSize={"xs"}>
                          {errors.state}
                        </Text>
                      )} */}

                      {/* <FormControl.Label isRequired>City</FormControl.Label>
                      <Select
                        // @ts-ignore
                        name="City"
                        dropdownIcon={
                          <Entypo
                            name="chevron-small-down"
                            size={30}
                            color="#64B5F6"
                            style={{ marginRight: 10 }}
                          />
                        }
                        mt={-1}
                        errMsg={errors.city}
                        w={"72"}
                        alignSelf={"center"}
                        placeholder="Select City"
                        borderRadius={12}
                        borderColor={"#0f045d"}
                        value={values.city}
                        isInvalid={!!touched.city && !!errors.city}
                        onValueChange={handleChange("city")}
                        _selectedItem={{
                          endIcon: (
                            <Feather
                              name="check"
                              size={18}
                              color="#64B5F6"
                              style={{ marginTop: 2 }}
                            />
                          ),
                        }}
                      >
                        <Select.Item label="Mumbai" value="mumbai" />
                        <Select.Item label="Bangalore" value="bangalore" />
                        <Select.Item label="Delhi" value="delhi" />
                        <Select.Item label="Vadodara" value="vadodara" />
                        <Select.Item label="Ahmedabad" value="ahmedabad" />
                      </Select>
                      {errors.city && touched.city && (
                        <Text color={"red.600"} fontSize={"xs"}>
                          {errors.city}
                        </Text>
                      )} */}

                      <FormControl.Label isRequired>State</FormControl.Label>
                      <Select
                        dropdownIcon={
                          <Entypo
                            name="chevron-small-down"
                            size={30}
                            color="#0f045d"
                            style={{ marginRight: 10 }}
                          />
                        }
                        w={"72"}
                        mt={-1}
                        alignSelf={"center"}
                        placeholder="Select State"
                        borderRadius={12}
                        borderColor={"#0f045d"}
                        bg={"white"}
                        // @ts-ignore
                        errMsg={errors.state}
                        selectedValue={values.state}
                        value={values.state}
                        isInvalid={!!touched.state && !!errors.state}
                        _selectedItem={{
                          endIcon: (
                            <Feather
                              name="check"
                              size={18}
                              color="#0f045d"
                              style={{ marginTop: 2 }}
                            />
                          ),
                        }}
                        onValueChange={handleChange("state")}
                      >
                        <Select.Item label="Gujrat" value="gujrat" />
                        <Select.Item label="Hariyana" value="hariyana" />
                        <Select.Item label="Bihar" value="bihar" />
                        <Select.Item label="Punjab" value="punjab" />
                      </Select>
                      {errors.state && touched.state && (
                        <Text color={"red.600"} fontSize={"xs"}>
                          {errors.state}
                        </Text>
                      )}

                      <FormControl.Label isRequired>City</FormControl.Label>
                      <Select
                        dropdownIcon={
                          <Entypo
                            name="chevron-small-down"
                            size={30}
                            color="#0f045d"
                            style={{ marginRight: 10 }}
                          />
                        }
                        w={"72"}
                        mt={-1}
                        alignSelf={"center"}
                        placeholder="Select City"
                        borderRadius={12}
                        borderColor={"#0f045d"}
                        bg={"white"}
                        // @ts-ignore
                        errMsg={errors.city}
                        selectedValue={values.city}
                        value={values.city}
                        isInvalid={!!touched.city && !!errors.city}
                        _selectedItem={{
                          endIcon: (
                            <Feather
                              name="check"
                              size={18}
                              color="#0f045d"
                              style={{ marginTop: 2 }}
                            />
                          ),
                        }}
                        onValueChange={handleChange("city")}
                      >
                        <Select.Item label="Mumbai" value="mumbai" />
                        <Select.Item label="Bangalore" value="bangalore" />
                        <Select.Item label="Delhi" value="delhi" />
                        <Select.Item label="Vadodara" value="vadodara" />
                        <Select.Item label="Ahmedabad" value="ahmedabad" />
                      </Select>
                      {errors.city && touched.city && (
                        <Text color={"red.600"} fontSize={"xs"}>
                          {errors.city}
                        </Text>
                      )}

                      <Button
                        mt="10"
                        mb="2"
                        borderRadius={25}
                        size={"lg"}
                        w={"40"}
                        alignSelf={"center"}
                        bgColor={"#0f045d"}
                        //@ts-ignore
                        onPress={handleSubmit}
                      >
                        <Text
                          color={"white"}
                          fontSize={"sm"}
                          fontWeight={"medium"}
                        >
                          Submit
                        </Text>
                      </Button>
                    </VStack>
                  </ScrollView>
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </View>
    </>
  );
};

export default ProfileScreen;
