import React,{useEffect, useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Channel as ChannelType, StreamChat } from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '@/components/Loading';



const ChannelScreen = () => {
  const [channel, setChannel] = useState<ChannelType | null>();
  const {cid} = useLocalSearchParams<{cid:'string'}>()
  const {client} = useChatContext();

  useEffect(()=>{
    const fetchChannel = async()=>{
      const channels = await client.queryChannels({cid})
      setChannel(channels[0]);
    }
    fetchChannel()
  },[])

  if(!channel){
   return <Loading/>
  }
  return (
  <Channel channel={channel}>
  <MessageList/>
  <SafeAreaView edges={['bottom']}>
  <MessageInput/>
  </SafeAreaView>
</Channel>
  )
}

export default ChannelScreen