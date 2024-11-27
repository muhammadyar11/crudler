import { ActivityIndicator,Alert, StyleSheet, Text, View } from 'react-native';
import useLoad from '../API/useLoad.js';
import Screen from '../layout/Screen';
//import ignoreWarnings from '../../utils/ignoreWarnings';
//import RenderCount from '../UI/RENDERCOUNT.JS';
import Icons from '../UI/Icons.js';
import{ Button, ButtonTray } from '../UI/Button.js';
import ModuleList from '../entity/modules/ModuleList.js';
import API from '../API/API.js';

const ModuleListScreen = ({ navigation }) => {
  // Initialize the component
  const modulesEndpoint ='https://softwarehub.uk/unibase/api/modules';
  //state....................
  const [modules, isLoading, loadModules] = useLoad(modulesEndpoint);

 
  //loadModules(modulesEndpoint);
   //handler........
  const onAdd = async (module) =>{
    const result = await API.post(modulesEndpoint, module);
    if( result.isSuccess) {
       loadModules(modulesEndpoint)
       navigation.goBack(); 
    } else Alert.alert(result.message);

  }
    
  const onModify = async(module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate('ModuleViewScreen',{module,onDelete,onModify});
      }  else Alert.alert(result.message);
    
};
  const onDelete = async(module) => { 
    //console.log(`Module ${module.ModuleCode} deleted`);
    const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.delete(deleteEndpoint, module);
    if( result.isSuccess) {
      loadModules(modulesEndpoint)
      navigation.goBack(); 
    } else Alert.alert(result.message);

  }
 
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd }) ;
  const gotoViewScreen = (module) =>
     navigation.navigate('ModuleViewScreen', { module , onDelete, onModify  }); 
  
  //View............

  return (
    <Screen>
      <ButtonTray>
        <Button label ='Add Module' icon={<Icons.Add />} onClick ={gotoAddScreen} />
      </ButtonTray>
      {isLoading &&  (
        <View style={styles.spinner}>
           <Text>Retrieving records from {modulesEndpoint}...</Text>
           <ActivityIndicator size='large' />
       </View>
      )}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
