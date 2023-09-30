import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlastList,
} from "react-native";
import React from "react";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <Animated.View entering={FadeInDown.duration(600).springify()}>
      <ScrollView
        horizontal
        showHorizontalScrilIndicator={false}
        className="space-x-4"
        contentCotainerStyle={{ paddingRight: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.strCategory == activeCategory;
          let activeButtonCategoryStyle = isActive
            ? " bg-amber-400"
            : " bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category.strCategory)}
              className="flex items-center space-y-1"
            >
              <View
                className={"rounded-full p-[6px] " + activeButtonCategoryStyle}
              >
                <Image
                  source={{ uri: category.strCategoryThumb }}
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" font={{ fontSize: hp(1.6) }}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
