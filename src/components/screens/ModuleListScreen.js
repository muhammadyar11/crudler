import { useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import Icons from '../UI/Icons.js';
import{ Button, ButtonTray } from '../UI/Button.js';
import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = ({ navigation }) => {
  // Initialize the component
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  
  const [modules, setModules] = useState(initialModules);

  const handleDelete = (module) => {
    console.log(`Module ${module.ModuleCode} deleted`);
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };

    const handleAdd = (module) =>
       { setModules([...modules, module]);
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack(); 
  };
 const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack(); 
  };

  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete }); 
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd }) ;


  return (
    <Screen>
      <ButtonTray>
        <Button label ='Add' icon={<Icons.Add/>} onClick ={gotoAddScreen} />

      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
