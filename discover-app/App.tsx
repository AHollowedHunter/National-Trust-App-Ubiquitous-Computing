import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { NativeStackParamList } from "./types";

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#363636" />
      <NavigationContainer>
        <Stack.Navigator>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
