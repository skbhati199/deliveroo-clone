import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
const RestaurantCard = ({
  id,
  title,
  imaUrl,
  genre,
  short_description,
  dishes,
  long,
  lat,
  rating,
  address,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imaUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View>
            <Text className="text-sm text-gray-500">{short_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
