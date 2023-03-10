import React,  { useState } from 'react';
import {Alert, View, Text, TextInput, StyleSheet, Button} from 'react-native';


export function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcularIMC = () => {
    const imcCalculado = Number(peso) / (Number(altura) * Number(altura));
    setImc(imcCalculado.toFixed(1));
  };

  return (
    <View style={ estilos.viewPrincipal }>
      <Text style={estilos.texto}> Digite seu peso: </Text>
      <TextInput style={estilos.texto}
        placeholder="Peso"
        onChangeText={setPeso}
        value={peso}
        keyboardType="numeric" />

      <Text style={estilos.texto}> Digite sua altura: </Text>
      <TextInput style={estilos.texto}
        placeholder="Altura"
        onChangeText={setAltura}
        value={altura}
        keyboardType="numeric" />
        
        <Button 
        title="Calcular IMC"
        color="#006DB2"
        onPress={calcularIMC}/>
        <Text style={estilos.viewPrincipal}>Seu IMC é: {imc}</Text>
    </View>

  );
}

const estilos = StyleSheet.create( {
    
  viewPrincipal:{
    marginTop: 60,
    textAlign: 'center'
  },
  texto: {
    textAlign: 'center',
    
  },
});

export default App;