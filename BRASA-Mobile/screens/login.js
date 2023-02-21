// we do not want the person to be able to sign up through the app, if the app's backend identifies that the person
// does not have an account --> show message saying that they should procceed to brasaucf.com (whatever the website will be)
// to create an account and then log inimport { Text, View } from 'react-native';
import { Text, View } from 'react-native';

const LogInScreen = () => {
    return (
        <View>
            <Text>Log In</Text>
        </View>
    );
}

export default LogInScreen;