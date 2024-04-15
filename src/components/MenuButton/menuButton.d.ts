import { FontAwesome } from "@expo/vector-icons";

export type Menubuttonprops = {
    title: string;
    icon: keyof typeof FontAwesome.glyphMap; //para poder escrever o nome do icon pois a tipagem não aceitava string
}