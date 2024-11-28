import { useEffect,  useState } from 'react';
import { StyleSheet,ActivityIndicator , Text ,TextInput, View } from 'react-native';
import useLoad from '../../API/useLoad.js'
//import Screen from '../layout/Screen';
//import {ButtonTray, Button } from '../UI/Button';
import Icons from '../../UI/Icons.js';
///import ModuleList from './UserList.js';
import Form from '../../UI/Form.js';
const defaultUser = {
    UserID: null, 
    UserCode: null,
    UserName: null,
    UserLevel: null,
    UserYear: null,
    UserLeaderID: null,
    UserImageURL: null,
  };

const UserForm = ({originalUser, onSubmit, onCancel}) => {
  //Initialistions.........
  defaultUser.UserID = Math.floor (100000 + Math.random() * 900000); 
  defaultUser.UserImageURL =
   'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';
  const yearsEndpoint = 'http://softwarehub.uk/unibase/api/years';
  const staffEndpoint = 'http://softwarehub.uk/unibase/api/users/staff';
  const levels = [
   {value: 3, label: '3(Foundation)'},
   {value: 4, label: '4(First year)'},
   {value: 5, label: '5(Second year)'},
   {value: 6, label: '6(Third year)'},
   {value: 7, label: '7(Masters)'},
  ];

  //State.........
  const [user, setUser] = useState(originalUser || defaultUser);
  const [years, setYears, isYearsLoading, yearsLoad ]= useLoad(yearsEndpoint);
  const [leaders, ,isLeadersLoading] = useLoad(staffEndpoint)


  //Handlers..............
  const handleChange = (field,value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  //View..........
  const submitLabel = originalUser ? 'Modify' : 'Add';
  const submitIcon = originalUser ? <Icons.Edit/> : <Icons.Add/>; 


  const cohorts = years.map((year) => ({value: year.YearID, label: year.YearName }));
  const staff = leaders.map((leader) => ({value: leader.UserID, LABEL: `${leader.UserFirstname} ${leader.UserLastname}`}));

 return (
   <Form
     onSubmit={handleSubmit}
     onCancel={onCancel}
     submitLabel={submitLabel}
     submitIcon={submitIcon}
    >

      <Form.InputText 
        label="User code"
        value={user.UserCode}
        onChange={(value) => handleChange('UserCode', value)}
      />

      <Form.InputText 
        label="User name"
        value={user.UserName}
        onChange={(value) => handleChange('UserName', value)}
      />
     <Form.InputSelect 
        label="User level"
        value={user.UserLevel}
        onChange={(value) => handleChange('UserLevel', value)}
         prompt='Select user level.....'
         options={levels}
      />
      
      <Form.InputSelect 
        label="User cohort"
        value={user.UserYearID}
        onChange={(value) => handleChange('UserYearID', value)}
         prompt='Select user cohort.....'
         options={cohorts}
         isLoading={isYearsLoading}
      />
      <Form.InputSelect 
        label="User leader"
        value={user.UserLeaderID}
        onChange={(value) => handleChange('UserLeaderID', value)}
         prompt='Select user leader.....'
         options={staff}
         isLoading={isLeadersLoading}
      />

      <Form.InputText 
        label="Module Image URL"
        value={user.UserImageURL}
        onChange={(value) => handleChange('UserImageURL', value)}
      />


    </Form>

  );
};

    
const styles = StyleSheet.create({});

export default UserForm;
