import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({ navigation, route }) => {
  // Destructure the module from route params
  const { module,onDelete } = route.params;

  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
