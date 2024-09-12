import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function TabTwoScreen() {
  const [fontsLoaded] = useFonts({
    'Vazirmatn': require('@/assets/fonts/Vazirmatn-VariableFont_wght.ttf'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>دکتر سحر حسینی</Text>
        <Text style={styles.paragraph}>
        
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8A4ADE',
    top: 0,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Vazirmatn',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
    textAlign: 'right', 
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    left: 20,  
    top: 10,   
    width: 80,
    height: 80, 
    resizeMode: 'contain',
    borderRadius: 40,
  },
});
