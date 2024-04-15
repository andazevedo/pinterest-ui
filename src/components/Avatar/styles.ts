import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        borderRadius: 25,
    },
    selected:{
        borderWidth: 1,
        borderColor: theme.colors.white,
    }
})