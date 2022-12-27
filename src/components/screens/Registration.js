import React from "react";

import { useEffect } from "react";
import Input from '../Input';
import {View, Keyboard,ScrollView} from 'react-native';

import Dropdown from '../Dropdown'
import Button from '../Button';
import { Text } from 'react-native';
import {validate} from '../../utilities/validation'


import Radio from '../Radiobutton';
import Check from '../CheckBox';


const Registration =({navigation})=>{

    const [inputs, setInputs] = React.useState({
        productid: '',
        productname: '',
        rate: '',
        offer:'',
        productkey: '',
        
      });
    
    
    
    
       const [errors, setErrors] = React.useState({});
    
    
    
    
    const [valuetype,setValuetype]=React.useState('')
    const [typeerror,setTypeError]=React.useState('')
    
    
    
    const [status,setStatus]=React.useState('')
    const [statusError,setStatusError]=React.useState('') 
     

    const [checked, setChecked] = React.useState('male')
     
    
  const[checkedWhatspp,setCheckedWhatspp]=React.useState('')
  const[checkedfacebook,setCheckedFacebook]=React.useState('')
  const[checkdinstagram,setCheckedinstagram]=React.useState('')
    console.log('Arin',checkdinstagram,checkedfacebook,checkedWhatspp)
     const items=([
    
        {label:'Electronics',value:'electronics'},
        {label:'Fashion',value:'fashion'},
        {label:'Food',value:'food'},
      ])
      const itemsstatus=([
        {label:'Continue',value:'continue'},
        {label:'Discontinue',value:'Discontinue'},
      ])
    
      useEffect(()=>{
    if(valuetype==''){
      setTypeError('Pls Select any Type')
    }else{
      setTypeError(null)
    }
      },[valuetype])
    
    
      
      useEffect(()=>{
        if(status==''){
          setStatusError('Pls Select any Status')
        }else{
          setStatusError(null)
        }
          },[status])
    
    
       const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      }; 
     

return(
    <ScrollView>
    <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <View style={{marginVertical: 20, padding: 20,zIndex:-1}}>
<Text style={{fontSize:36,fontWeight:'bold',color:'black'}}>Product Details</Text>

        <Input
         keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'productid')}
          onFocus={() => handleError(null, 'productid')}
          iconName="view-comfy"
          label="productid"
          placeholder="Enter Your Product Id"
          error={errors.productid}
        />
<Dropdown   
label='Type'
setDropValue={setValuetype}
items={items}
error={typeerror}


/>

        <Input
           
          onChangeText={text => handleOnchange(text, 'productname')}
          onFocus={() => handleError(null, 'productname')}
          iconName="printer-pos"
          label="Product Name"
          placeholder="Enter your Product name"
        
          error={errors.productname}
        />
        <Input
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'rate')}
          onFocus={() => handleError(null, 'rate')}
          iconName="currency-rupee"
          label="Enter Your Rate"
          placeholder="Enter your Rate"
          error={errors.rate}
        />






<Input
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'offer')}
          onFocus={() => handleError(null, 'offer')}
          iconName="offer"
          label="Enter Your offer"
          placeholder="Enter your offer"
          error={errors.offer}
        />
<Dropdown   
label='Status'
error={statusError}
items={itemsstatus}
setDropValue={setStatus}
/>
<View>

 </View>
        <Input
          onChangeText={text => handleOnchange(text, 'productkey')}
          onFocus={() => handleError(null, 'productkey')}
          iconName="lock-outline"
          label="productkey"
          placeholder="Enter your productkey"
          error={errors.productkey}
          password

          
        />
<Radio   checked={checked} setChecked={setChecked} />


<Check  setCheckedWhatspp={setCheckedWhatspp} 
setCheckedFacebook={setCheckedFacebook}
setCheckedinstagram={setCheckedinstagram}

/>

      <Button  text='Submit' onPress={()=>validate(checkedfacebook,checkedWhatspp,checkdinstagram,handleError,inputs,valuetype,status,setTypeError,setStatusError,checked,navigation)} />

      </View>
    </View>
    </ScrollView>
)
}

export default Registration