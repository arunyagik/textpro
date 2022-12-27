import { View, Text } from 'react-native'
import React from 'react'
import { getStoreData } from '../storage/projectAsyncStorage'
import { useEffect } from 'react'
const SplashScreen = (props) => {




  const authUser = async () => {
    let userData = await getStoreData('userData')

    if (userData) {
      if (userData.loggedIn) {
        props.navigation.navigate('HomeScreen')
      }

      else {
        props.navigation.navigate('LoginScreen')
      }

    }
    else {
      props.navigation.navigate('Registration')
    }


  }

  //console.log('ddddddddd',loggedIn) 

  useEffect(function () {
    authUser()

  }, [])

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen