import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '@/provider/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({user}:any) => {
  const{client}=useChatContext();
  const {user:me}:any = useAuth();
  const pressHandle = async()=>{
    const channel = client.channel('messaging', {
      members: [me.id, user.id],
  });
  await channel.watch();
  router.replace(`/(home)/channel/${channel.cid}`)
  }
  return (
    <Pressable onPress={pressHandle} style={{padding:20, backgroundColor:"white"}}>
      <Text style={{fontWeight:"bold"}}>{user.full_name}</Text>
    </Pressable>
  )
}

export default UserListItem