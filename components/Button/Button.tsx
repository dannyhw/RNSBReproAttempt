import React, { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export const MyButton = ({ onPress, children }: MyButtonProps) => {
  return (
    <TouchableOpacity
      className="px-8 py-2 bg-purple-600 self-start rounded-lg"
      onPress={onPress}
    >
      <Text className="text-white text-base font-bold">{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
