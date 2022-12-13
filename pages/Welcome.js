import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigation.navigate('Profile')
            }
          />
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