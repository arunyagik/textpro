import React, { useState } from 'react';

import { View } from 'react-native';

import { Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dropdown = ({
    label,
    iconName,
    error,

    setDropValue,
    items,

    onFocus = () => { },


}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocused, setIsFocused] = React.useState(false);

    return (

        <View style={{ marginBottom: 20, width: width * 0.88, }}>
            <Text style={style.label}>{label}</Text>
            <View
                style={[
                    style.inputContainer,
                    
                    {
                        borderColor: error
                            ? COLORS.red
                            : isFocused
                                ? COLORS.darkBlue
                                : COLORS.light,


                    },
                ]}>







                <DropDownPicker
                    onChangeValue={(value) => {
                        setDropValue(value)

                    }}
                     style={{borderColor:error?'red':'#000'}}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}



                />

            </View>
            {error && (
                <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>

    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,

        color: COLORS.grey,
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        zIndex: 2,

    },
});


export default Dropdown;