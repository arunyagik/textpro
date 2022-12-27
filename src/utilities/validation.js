import { Keyboard } from "react-native";
import { storeData } from "../components/storage/projectAsyncStorage";
   export function validate(checkedfacebook,checkedWhatspp,checkdinstagram,handleError,inputs,valuetype,status,setTypeError,setStatusError,checked,navigation) {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.productid) {
      handleError('Please input ProductId', 'productid');
      isValid = false;
    } 
   
   
    if (!inputs.productname) {
      handleError('Please input fullname', 'productname');
      isValid = false;
    }
    
    if (!inputs.rate) {
      handleError('Please input Rate', 'rate');
      isValid = false;
    }
    if (!inputs.offer) {
      handleError('Please input offer', 'offer');
      isValid = false;
    }
    if (!inputs.productkey) {
      handleError('Please input productkey', 'productkey');
      isValid = false;
    } else if (inputs.productkey.length < 5) {
      handleError('Min productkey length of 5', 'productkey');
      isValid = false;
    }
if(valuetype==null|| valuetype==''){
  setTypeError('Pls Select any Type ')
}
if(!valuetype){
  isValid=false;
}
inputs['valuetype']=valuetype
inputs['status']=status
inputs['checked']=checked
inputs['social']=`${checkedfacebook}${checkedWhatspp}${checkdinstagram}`
if(status==null|| status==''){
  setStatusError('Pls Select any Status ')
}
if(!status){
  isValid=false;
}

    if (isValid) {
      //alert(JSON.stringify(inputs))
        storeData('userData',inputs)     
        navigation.navigate('LoginScreen')
      console.log('arun',inputs)
    }
}