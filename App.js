
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Welcome} from './pages/Welcome';
import {Profile} from './pages/Profile';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'salve' }}
        />
        <Stack.Screen name="Profile" 
        component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;