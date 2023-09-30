import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-14"
            >
                {/** avatar and bell icon */}
                <View className="mx-4 flex-row justify-between items-center mb-2">
                    <Image
                        source={require("../../assets/images/avatar.png")}
                        style={{ height: hp(5), width: hp(5.5) }}
                    />
                    <BellIcon color="gray" size={hp(4)} />
                </View>

                {/** greeting and punch line */}
                <View className="mx-4 space-y-2 mb-2">
                    <Text
                        style={{ fontSize: hp(1.7) }}
                        className="text-neutral-600"
                    >
                        Hello Foodie!
                    </Text>
                    <View>
                        <Text
                            style={{ fontSize: hp(3.8) }}
                            className="text-neutral-600 font-semibold"
                        >
                            What would you like to eat today?
                        </Text>
                    </View>
                    <Text
                        style={{ fontSize: hp(3.8) }}
                        className="text-neutral-600 font-semibold"
                    >
                        Browse and start{" "}
                        <Text className="text-amber-400">cooking</Text>
                    </Text>
                </View>

                {/* search bar */}
                <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
                    <TextInput
                        placeholder="Search for recipes"
                        placeholderTextColor={"gray"}
                        style={{ fontSize: hp(1.7) }}
                        className="flex-1 text-base mb-1 pl-3 tracking-wider"
                    ></TextInput>
                    <View className="bg-white rounded-full p-3">
                        <MagnifyingGlassIcon
                            color="gray"
                            size={hp(2.5)}
                            strokeWidth={3}
                        />
                    </View>
                </View>

                {/** categories */}
                <View>
                    <Categories />
                </View>
            </ScrollView>
        </View>
    );
}
