import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className={`bg-white h-full w-full ${
        Platform.OS === "android" ? "pt-4" : "pt-5"
      }`}
    >
      <View className="flex flex-col">
        <View className="flex flex-row pb-3 items-center  mx-4 space-x-2">
          <Image
            source={require("../assets/images/logo.png")}
            className="h-7 w-7  bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-xs font-bold text-gray-400">
              Deliver Now!
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-xl font-bold mr-2">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00BBCC" />
        </View>

        {/* Search Field */}
        <View className="flex flex-row items-center pb-2 mx-2 px-2">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassCircleIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
        </View>
      </View>
      {/* BODY */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Features */}
        <FeatureRow
          id="1"
          title="Featured"
          description="Paid placement from our partners"
        />
        {/* Tasty Discounts */}
        <FeatureRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
        />
        {/* Offers near you */}
        <FeatureRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
