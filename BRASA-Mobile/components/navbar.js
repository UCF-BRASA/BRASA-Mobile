import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Image source={require('../assets/menu.png')}
          
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/brasa-logo.svg')}
          
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#1A9DF1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});


export default NavBar;