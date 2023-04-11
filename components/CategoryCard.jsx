import React from "react";
import { View } from "react-native";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="rounded w-20 h-20" />
      <Text className="absolute bottom-1 left-1 text-white font-bold ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
