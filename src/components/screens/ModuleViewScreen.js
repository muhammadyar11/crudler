import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({ navigation, route }) => {
  //intialisation.......
  // Destructure the module from route params
  const { module,onDelete, onModify } = route.params;

  //state............
  //Handlers.............
  const gotoModifyScreen = () => navigation.navigate('ModuleModifyScreen',{module, onModify});
  //View...............

  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
