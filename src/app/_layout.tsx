import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import { 
    useFonts, 
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold, 
} from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();//mantém tela de splash na tela... usando para o caso de a fonte nao carregar

export default function Layout() {
   const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    if(fontsLoaded) {
        SplashScreen.hideAsync();
    }

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content"/>
            {fontsLoaded && <Slot/>}
        </GestureHandlerRootView>
    ) 
}