import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Categories() {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categoryData.map((category, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            className="flex items-center space-y-3"
                        >
                            <View className="rounded-full p-[6px]">
                                <Image
                                    source={{ uri: category.image }}
                                    style={{
                                        height: hp(6),
                                        width: hp(6),
                                    }}
                                    className="rounded-full"
                                />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}
