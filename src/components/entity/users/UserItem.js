import { Pressable, StyleSheet, Text, View } from "react-native";

const UserItem = ({user, onSelect}) => {

return(
    <Pressable  onPress= {() =>onSelect(user)} >
    <View style={styles.item}>
      <Text Style={styles.text}>
        {user.UserCode} {user.UserName}

      </Text>
   </View>
   </Pressable>

);
};

const styles = StyleSheet.create({
    item:{

        paddingVertical:15,
        borderTopWidth:1,
        borderColor: 'lightgray',
      },
      text:{
        fontSize:16,
      }, 
});
export default UserItem;