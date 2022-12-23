import * as React from 'react';
import { View ,Text} from 'react-native';
import { Checkbox } from 'react-native-paper';
import Social from 'react-native-vector-icons/FontAwesome'

const Check = (props) => {
 const[checked,setChecked]=React.useState(false)
const[checkedfb,setCheckedFb]=React.useState(false)
const[checkedinsta,setCheckedinsta]=React.useState(false)
  return (
    <View style={{padding:12}}>
    <View style={{flexDirection:'row' }}>
  <Social  
  name='whatsapp'
  size={24}
  color='black'
  style={{marginTop:3}}
  />
        
      <Checkbox
        value="whatsapp"
        status={  checked ?  'checked' : 'unchecked' }
        onPress={()=>{
            setChecked(!checked)
            props.setCheckedWhatspp(checked?'':'whatsapp')
        }}
    
        
      />
<Social  
  name='facebook'
  size={24}
  color='black'
  style={{marginTop:3}}
  />
        
      <Checkbox
        value="facebook"
        status={  checkedfb  ? 'checked' : 'unchecked' }
        onPress={()=>{
            setCheckedFb(!checkedfb)
            props.setCheckedFacebook(checkedfb?'':'facebook')
        }}
    
        
      />

<Social  
  name='instagram'
  size={24}
  color='black'
  style={{marginTop:4}}
  />
        
      <Checkbox
        value="instagram"
        status={  checkedinsta  ? 'checked' : 'unchecked' }
        onPress={()=>{
            setCheckedinsta(!checkedinsta)
            props.setCheckedinstagram(checkedinsta?'':'instagram')
        }}
    
        
      />

    
    
    </View>
    </View>
  );
};

export default Check
