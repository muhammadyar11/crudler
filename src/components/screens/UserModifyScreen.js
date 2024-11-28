import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';
import UserForm from '../entity/users/UserForm.js';

const UserModifyScreen = ({navigation, route}) => {
  //Initialisation -----
  const {user, onModify} = route.params;
  //state.........
  //Handlers............
  const handleCancel = () => navigation.goBack;
  //Vieew............
  return (
    <Screen>


      <UserForm originalUser={user} onSubmit={onModify} onCancel={handleCancel}/>



    </Screen>
  );
};

const styles = StyleSheet.create({});
export default UserModifyScreen;
