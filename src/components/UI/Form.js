import { KeyboardAvoidingView, ScrollView, StyleSheet, Text,TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import RNPickerSelect from 'react-native-picker-select'
import Icons from './Icons.js';
import{ Button, ButtonTray } from './Button.js';


const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {
    //Initialisations.....
    //State........
    //Handlers......
    //View.........

    return (

       <KeyboardAvoidingView style={styles.formContainer}>
          <ScrollView contentContainerStyle={styles.formContainer}>{children}</ScrollView>

            <ButtonTray>
              <Button label ={submitLabel} icon={submitIcon} onClick ={onSubmit} />
              <Button label ='Cancel' icon={<Icons.Close />} onClick ={onCancel} />
            </ButtonTray>
      </KeyboardAvoidingView>
    );
};

const InputText = ({label,value,onChange }) => {
    //Initialisations.....
    //State........
    //Handlers......
    //View.........

   return (
        <View style={styles.item}>
          <Text style={styles.itemLabel}>{label || 'hh'}</Text>
          <TextInput value={value} onChangeText={onChange} style={styles.itemTextInput}/>
        </View>

  
    );
};

const InputSelect = ({label,prompt, options, value,onChange }) => {
    //Initialisations.....
    //State........
    //Handlers......
    //View.........
  //  const selectListData = options.map((option) => ({
  //    Key: option.value,
  //    value: option.label,
  //   }));

   return (
        <View style={styles.item}>
          <Text style={styles.itemLabel}>{label}</Text>
          {/* <SelectList
            setSelected={onChange}
            on

            data={selectListData}

            placeholder={prompt}

            defaultOption={selectListData.find((item) => item.key === value)}

            boxStyles={styles.selectListBoxStyle}

            dropdownStyles={styles.selectListDropdownStyle}
          />   */}
         <RNPickerSelect
          mode = 'dropdown'
          selectedValue = {value}
          onValueChange={onChange}
          placeholder={{label: prompt,value:null,color:'whitesmoke'}}
          items={options.map((option)=>({label:option.label,value:option.value}))}
          style={
            {
              inputIOSContainer:{pointerEvents:"none"}
            }
          }
          

         />



       </View>
          
);
};


//Compose component.....
Form.InputText = InputText;
Form.InputSelect = InputSelect;
//Styles.......

const styles = StyleSheet.create({
    formContainer:{
        gap:10,
    },

  selectListBoxStyle: {
    height: 50,
    backgroundColor: "Whitwsmoke",
    borderRadius: 7,
    borderWidth: 1,
    bordereColor:"lightgrey",
    paddingLeft: 10,
    paddingTop: 15,
  },
  selectListDropdownStylee: {
    borderColor: "lightgrey",
  },


});

export default Form;