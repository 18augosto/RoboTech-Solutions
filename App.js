import React, {userState, useState} from 'react';
import { SafeArea, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert, SafeAreaView } from 'react-native';
export default function App() {
  const [pagina, setPagina] = useState('home');
  return (
    <SafeAreaView style={StyleSheet.container}>
    <Header pagina={pagina} setPagina={setPagina} />
    <ScrollView contentContainerStyle={styles.content}>
      {pagina === 'home' &&<home />}
      {pagina === 'sobre' &&<sobre />}
      {pagina === 'servicos' &&<servicos />}
      {pagina === 'contato' &&<contato />}
    </ScrollView>
    <Footer />
    </SafeAreaView>
  );
}
//ola

function Header({pagina, setPagina }){
  return (
    <View style={styles.Header}>
    <Text style={style.headerTitle}>RoboTech-Solutions</Text>
    <View style={styles.nav}>
      {['home','sobre','servicos','contato'].map((p) => (
    <TouchableOpacity
    key={p}    
    styles={[styles.navButton, pagina === p && styles.navButtonActive]}
    onPress={() => setPagina(P)}
  >
    <Text styles={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
  </TouchableOpacity>
))}
</View>
</View>
);
}
 function Home(){
  return(
    <View style={styles.section}>
    <Text style={style.title}>Bem vindo a nossa empresa</Text>
    <Text>Somos lideres em soluções tecnologias para o seu negocio</Text> 
    </View>

  );
 }
function sobre(){
  return (
    <View style={styles.section}>
    <Text style={style.title}>Sobre Nós</Text>
    <Text>Fundada em 2010, temos o compromisso de qualidade e inovação.</Text>
    </View>
  );
}
function servicos(){
  return (
    <View style={styles.section}>
    <Text style={style.title}>Nossos serviços</Text>
    <Text>Consultoria de TI</Text>
    <Text>Desenvolvimento de Software</Text>
    <Text>Suporte Técnico</Text>
    </View>
  );
}

function Contato(){
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');
  
  function Contato(){
   if (!nome || !email || !mensagem) {
    Alert.alert('mensagem enviada', `Obrigado, ${nome}! Retornamos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
   }
}
return (
  < View style = { styles . section } >
  < Text styles = { styles . section } > Contact </ Text >
  < Text Input
  style = { styles . input }
  placeholder = "Nome"
  value = { nome }
  onChangeText = { setNome }
  />
  < TextInput style = { styles . input }
  placeholder = "Email"
  value = { email }
  onChargeText = { setEmail }
  keyboardType = "email address"
  />
  < Text Input
  style = { [ styles . input , { height : 100 }] }
  placeholder = "Mensagem"
  value = { mensagem }
  onChangeText = { mensagem }
  multiline
  />
  <TouchableOpacity style={styles.button} onPress={enviar}>
    <Text style={styles.button} onPress={enviar}></Text>
  </TouchableOpacity>
  </ View >
   );
}
function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: 'white' }}>2025 minha Empresa. Todos os direitos reservados</Text>
    </View>
  );

}
const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fa'
  },
  header: {
    backgroundColor: '#004080',
    padding: 40,
    alingContent: 'center',
    alingIntems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  nav: {
    flexDirection: 'rown',
    justifyCONtent: 'space-around'
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  navButtonActive: {
    backgroundColo: '0066cc'
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  content: {
    padding: 20,
    flexGrow: 1
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    backgroundColor:'white',
    borderColor: '#ccc',
    borderWeight: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,

  },
  button: {
    backgroundColo: '004080',
    paddingVertical: 12,
    borderRadius: 6,
    alingnItems: 'center',
  },
 buttonText: {color: 'white', fontWeight: 'bold', fontSize: 16 },
 footer: {backgroundColor: '00264d',padding: 15, alingIntems: 'center' },
})
