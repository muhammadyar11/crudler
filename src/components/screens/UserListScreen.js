import { ActivityIndicator,Alert, StyleSheet, Text, View } from 'react-native';
import useLoad from '../API/useLoad.js';
import Screen from '../layout/Screen';
//import ignoreWarnings from '../../utils/ignoreWarnings';
//import RenderCount from '../UI/RENDERCOUNT.JS';
import Icons from '../UI/Icons.js';
import{ Button, ButtonTray } from '../UI/Button.js';
import UserList from '../entity/users/UserList.js';
import API from '../API/API.js';

const UserListScreen = ({ navigation }) => {
  // Initialize the component
  const usersEndpoint ='https://softwarehub.uk/unibase/api/users';
  //state....................
  const [users, isLoading, loadUsers] = useLoad(usersEndpoint);

 
  //loadModules(modulesEndpoint);
   //handler........
  const onAdd = async (user) =>{
    const result = await API.post(usersEndpoint, user);
    if( result.isSuccess) {
       loadUsers(usersEndpoint)
       navigation.goBack(); 
    } else Alert.alert(result.message);

  }
    
  const onModify = async(user) => {
    const putEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.put(putEndpoint, user);
    if (result.isSuccess) {
      loadUsers(usersEndpoint);
      navigation.navigate('UserViewScreen',{user,onDelete,onModify});
      }  else Alert.alert(result.message);
    
};
  const onDelete = async(user) => { 
    //console.log(`Module ${module.ModuleCode} deleted`);
    const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.delete(deleteEndpoint, user);
    if( result.isSuccess) {
      loadUsers(usersEndpoint)
      navigation.goBack(); 
    } else Alert.alert(result.message);

  }
 
  const gotoAddScreen = () => navigation.navigate('UserAddScreen', { onAdd }) ;
  const gotoViewScreen = (user) =>
     navigation.navigate('UserViewScreen', { user , onDelete, onModify  }); 
  
  //View............

  return (
    <Screen>
      <ButtonTray>
        <Button label ='Add User' icon={<Icons.Add />} onClick ={gotoAddScreen} />
      </ButtonTray>
      {isLoading &&  (
        <View style={styles.spinner}>
           <Text>Retrieving records from {usersEndpoint}...</Text>
           <ActivityIndicator size='large' />
       </View>
      )}
      <UserList users={users} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
