import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import UserForm from '../entity/users/UserForm';

const UserAddScreen = ({navigation, route}) => {
  //Initialisation -----
  const {onAdd} = route.params;
  
  //State....
//Handler..........

  const handleCancel =  navigation.goBack;

  //View ________
  return (
    <Screen>
     <UserForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
}; 
const styles = StyleSheet.create({});

export default UserAddScreen;
