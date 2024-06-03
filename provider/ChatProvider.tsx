import { useEffect, PropsWithChildren, useState } from "react";
import {  Stack } from "expo-router";
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import Loading from "@/components/Loading";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/lib/supabase";

export default function ChatProvider({children}:PropsWithChildren){
    const {profile} = useAuth();
    const[isReady,setIsReady] = useState(false);
    const client = StreamChat.getInstance("ttnhzhkaezaf",{
        timeout: 6000,
    });
    useEffect(()=>{
        if(!profile){
            return;
        }        
        const connect = async ()=>{
            setIsReady(false);
                await client.connectUser(
                    {
                      id: profile.id,
                      name: profile.full_name,
                      image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
                    },
                    client.devToken(profile.id)
                  );                     
                  setIsReady(true);
            
            //   const channel = client.channel('messaging', 'the_park', {
            //     name: 'The Park',
            //   });
            //   await channel.watch();
        }
        connect();

        return ()=>{
            if(isReady){
                client.disconnectUser();
            }
            setIsReady(false);
        }
    },[profile])

    if(!isReady){
        return <Loading/>
    }
    return( 
    <OverlayProvider>
        <Chat client={client}>
            {children}
        </Chat>
    </OverlayProvider>
    )
}