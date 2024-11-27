import { ScrollView, StyleSheet, } from "react-native";
import ModuleItem from './ModuleItem.js';

const ModuleList = ({modules, onSelect}) => {
 //intialisation......
 //state.........
 //Handlers........
 //View..................

  return(
    <ScrollView style={styles.container}>
      {modules.map ((module)=>{
       return <ModuleItem key ={module.ModuleCode}  module={module} onSelect={onSelect}  />;
      })}
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container:{},
});

export default ModuleList;