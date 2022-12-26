import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions, } from "react-native";
import Button from "../Button";
import { useState } from "react";
import Input from "../Input";
import { getStoreData,storeData } from "../storage/projectAsyncStorage";
import { validate } from "../../utilities/validation";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(90deg, rgba(0,0,0,1) 14%, rgba(11,18,16,1) 89%)'
    },
    backgroundImage: {
        width: width,
        height: height
    }

});

export default function Login({navigation}) {


    const [productId, setProductId] = useState('');
    const [password, setPassword] = useState('');


       const handleButton=async()=>{
    try{
      const data = await getStoreData('userData');

      //console.log("local data 123",data)
      if(data.productid==productId && data.productkey==password)
      {   navigation.navigate('HomeScreen');
      storeData(
        'userData',
        ({...userData, loggedIn: true}),
      );
        alert('Login Succes')}
      else{alert('fail to Login')}

    }catch(err){
      console.log("catch error :",err)
    }
  } 

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={{ marginTop: 60 }}>
                {/*  <Image style={{ width: 250, height: 60 }} source={require('./images/login.png')} /> */}
            </View>
            <View style={{ width: width * 0.8, alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 55, color: '#fff', fontWeight: 'bold' }}>
                    Welcome Back !
                </Text>
            </View>
            <View style={{ width: width * 0.8, justifyContent: 'center', alignSelf: 'center' }}>
                <View style={{ width: width * 0.80, height: height * 0.5, backgroundColor: '#fff', borderTopRightRadius: 70, borderBottomLeftRadius: 70, borderTopLeftRadius: 10, borderBottomRightRadius: 10 }}>


                    <View style={{ marginTop: 20,width:width*0.78 ,paddingLeft:5}}>
                        <Input
                            onChangeText={(txt) => setProductId(txt)}
                            iconName="dots-grid"
                            label="Product Id"
                            placeholder="Enter your Product Id"

                        />
                    </View>
                    <View style={{ marginTop: 20 ,width:width*0.78 ,paddingLeft:5}}>
                        <Input
                             iconName="lock-outline"
                            onChangeText={(txt) => setPassword(txt)}
                            placeholder='Enter your Product Key'
                            label="Product Key"
                            password
                        />
                    </View>

                    <View style={{ marginTop: 20, width: width * 0.60,paddingLeft:60 }}>
                        <Button  onPress={()=>{handleButton()}} size="small" bordered color='#51cbcc' text="Login" type='filled' />

                    </View>

                    <View style={{ marginTop: 25, width: width * 0.8, alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#51cbcc', marginLeft: 40 }}>
                                Sinup
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#51cbcc', marginRight: 25 }}>
                            Forgot Password
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>





        </View>
    )
}