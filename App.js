import * as React from 'react';
import { Pressable, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Marcela Ellen</Text>
      <Image source={require('./assets/foto-eu.jpg')} style={{ width: 200, height: 200 }} />
      <Pressable
        onPress={() => navigation.navigate('Formação')}
        style={{
          backgroundColor: 'pink',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Formação acadêmica</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Cursos')}
        style={{ backgroundColor: 'pink', padding: 10 }}>
        <Text>Cursos</Text>
      </Pressable>
    </View>
  );
}

function Formacao() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>• Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
      <Text>• Bacharelado em Direito (trancado)</Text>
    </View>
  );
}

function Cursos() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cursos</Text>
      <Text>• Formação acelerada em programação - Softex Recife</Text>
      <Text>• Curso de inglês Upper - Senac</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formação" component={Formacao} />
        <Stack.Screen name="Cursos" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
