import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Gender from 'react-native-vector-icons/FontAwesome'

const Radio = (props) => {
 

  return (
    <View style={{flexDirection:'row' ,alignItems:'center'}}>
    <View  style={{flexDirection:'row',alignItems:'center',marginLeft:18}}>
        <Gender    
        name='male'
        size={28}
        color='black'
        
        />
      <RadioButton
        value="male"
        status={  props.checked === 'male' ? 'checked' : 'unchecked' }
        onPress={() => props.setChecked('male')}
      />

      <Gender    
        name='female'
        size={28}
        color='black'
        
        />
      <RadioButton
        value="female"
        status={ props.checked === 'female' ? 'checked' : 'unchecked' }
        onPress={() =>props.setChecked('female')}
      />
    </View>
    </View>
  );
};

export default Radio
