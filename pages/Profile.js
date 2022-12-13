import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>getour</Text>
            <Image
            style={styles.Logo}
            source={require('../assets/Logo.svg')}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Logo:{
      width:155,
      height:155,
    }
  });