import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {ChannelList} from 'stream-chat-expo';
import { Link, Stack, router } from 'expo-router';
import { useAuth } from '@/provider/AuthProvider';
import { Feather } from '@expo/vector-icons';

const index = () => {
  const {user} = useAuth();
  return <>
  <Stack.Screen options={{
    headerRight:()=> 
      <Link href={'/(home)/users'} asChild>
         <Feather name="users" size={24} color="black" style={{marginRight:20}}/>
      </Link>
  }}/>
  <ChannelList
  filters={{members:{$in: [user?.id || null]}}}
   onSelect={(channel)=>router.push(`/channel/${channel.cid}`)}/>
  <StatusBar style="dark" />
  </>
}

export default index