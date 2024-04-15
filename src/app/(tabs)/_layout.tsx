import { Avatar } from "@/components/Avatar"
import { Menu } from "@/components/Menu"
import { theme } from "@/theme"
import { FontAwesome, Foundation, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { View } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react"



export default function TabLayout(){ 

const bottonSheetRef = useRef<BottomSheet>(null)
const handleBottomSheetOpen = () => bottonSheetRef.current?.expand()
const handleBottomSheetClose = () => bottonSheetRef.current?.snapToIndex(0)


return(
   <View style={{flex: 1}}>
     <Tabs
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600],
        tabBarStyle:{
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
        }
        
    }}
    >
        <Tabs.Screen 
        name="index" 
        options={{
            tabBarIcon:({size, color}) => <Foundation name="home" size={size} color={color}/>
        }}/>
        <Tabs.Screen 
        name="search"
        options={{
            tabBarIcon:({size, color}) => <Ionicons name="search" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="menu"
        options={{
            tabBarIcon:({size, color}) => <FontAwesome name="plus" size={size} color={color}/>
        }}
        listeners={()=> ({
            tabPress: (event) => {
                event.preventDefault()
                handleBottomSheetOpen()

            },
        })}
        />
        <Tabs.Screen 
        name="messages"
        options={{
            tabBarIcon:({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
        }}
        />
        <Tabs.Screen 
        name="profile"
        options={{
            tabBarIcon: ({color}) => <Avatar selected={color === theme.colors.white} source={{uri: "https://github.com/andazevedo.png"}}/>,
        }}
        />
      
    </Tabs>

    <Menu ref={bottonSheetRef} onClose={()=> {handleBottomSheetClose()}}/>
   </View> 
   
)

}