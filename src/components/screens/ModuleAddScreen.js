import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';

const ModuleAddScreen = ({navigation, route}) => {
  //Initialisation -----
  const {onAdd} = route.params;
  
  //State....
//Handler..........

  const handleCancel =  navigation.goBack;

  //View ________
  return (
    <Screen>
     <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
}; 
const styles = StyleSheet.create({});

export default ModuleAddScreen;
