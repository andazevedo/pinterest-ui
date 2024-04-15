import { Pressable } from "react-native";
import { Menubuttonprops } from "./menuButton";
import { Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";
export function MenuButton({title, icon}: Menubuttonprops) {
    return(
        <Pressable style={styles.container}>
            <FontAwesome 
            name={icon}
            size={32} 
            color={theme.colors.white} 
            style={styles.icon} 
            />
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}