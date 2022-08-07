import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default Routes;