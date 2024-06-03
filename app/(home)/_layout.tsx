import { useAuth } from "@/provider/AuthProvider";
import ChatProvider from "@/provider/ChatProvider";
import {  Redirect, Stack } from "expo-router";
export default function HomeLayout(){
    const{user} = useAuth();
    if(!user){
        return <Redirect href={'/(auth)/login'}/>
    }
    return (
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
                <Stack.Screen name="channel" options={{headerShown:false}}/>
            </Stack>
        </ChatProvider>  
)
}