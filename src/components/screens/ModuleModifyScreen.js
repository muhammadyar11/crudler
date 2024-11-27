import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm.js';

const ModuleModifyScreen = ({navigation, route}) => {
  //Initialisation -----
  const {module, onModify} = route.params;
  //state.........
  //Handlers............
  const handleCancel = () => navigation.goBack;
  //Vieew............
  return (
    <Screen>


      <ModuleForm originalModule={module} onSubmit={onModify} onCancel={handleCancel}/>



    </Screen>
  );
};

const styles = StyleSheet.create({});
export default ModuleModifyScreen;
