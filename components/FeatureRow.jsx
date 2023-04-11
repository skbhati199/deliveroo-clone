import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text class="">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restaurants Cards */}
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imaUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          genre="japanese"
          short_description="This is Test Description"
          dishes={[]}
          long={76}
          lat={26}
          rating={4.5}
          address="123, Main Street"
        />
        {/* Restaurants Cards */}
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imaUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          genre="japanese"
          short_description="This is Test Description"
          dishes={[]}
          long={76}
          lat={26}
          rating={4.5}
          address="123, Main Street"
        />

        {/* Restaurants Cards */}
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imaUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          genre="japanese"
          short_description="This is Test Description"
          dishes={[]}
          long={76}
          lat={26}
          rating={4.5}
          address="123, Main Street"
        />

        {/* Restaurants Cards */}
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imaUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
          genre="japanese"
          short_description="This is Test Description"
          dishes={[]}
          long={76}
          lat={26}
          rating={4.5}
          address="123, Main Street"
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
