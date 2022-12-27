import { storeData,getStoreData } from '../storage/projectAsyncStorage';
import React ,{useState}from 'react';
import { Text, View,Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await getStoreData('userData');
    if (userData) {
      setUserDetails(userData);
    }
  };

  const logout = () => {
    storeData(
      'userData',
      ({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome {userDetails?.productname}
      </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
