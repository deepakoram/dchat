import { Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabNavigator(){
    return <Tabs>
        <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ size,color }) => <FontAwesome5 name="home" size={size} color={color} />,
          headerTitleAlign:"center"
        }}
        />
        <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size,color }) => <FontAwesome5 name="user-alt" size={size} color={color} />,
          headerTitleAlign:"center"
        }}
        />
    </Tabs>
}