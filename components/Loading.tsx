import React from 'react'
import { View} from 'react-native'
import LottieView from "lottie-react-native";


const Loading = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <LottieView
       source={require("../assets/loading.json")}
       style={{width: "45%", height: "45%"}}
       autoPlay
       loop
        />
    </View>
  )
}

export default Loading