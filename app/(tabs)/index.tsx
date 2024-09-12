import { StyleSheet, Image, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Vazirmatn': require('@/assets/fonts/Vazirmatn-VariableFont_wght.ttf'),
  });

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo}/>
      </View>
      <ScrollView style={styles.content}>

        <TouchableOpacity onPress={() => handlePress('https://doctoreto.com/doctor/dr-sahar-hoseini/qoanKM')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>نوبت‌دهی دکتر تو</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://www.paziresh24.com/dr/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AD%D8%B1-%D8%AD%D8%B3%DB%8C%D9%86%DB%8C-8')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>نوبت‌دهی پذیرش بیست و چهار</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('instagram://user?username=dr.sahar_hoseini')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>اینستاگرام</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://www.darmankade.com/doctor/424092')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>مشاوره متنی و تلفنی</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://zidoctor.com/doc-profile/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AD%D8%B1-%D8%AD%D8%B3%DB%8C%D9%86%DB%8C-130455')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>نوبت‌دهی زی دکتر</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('https://getzoop.com/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AD%D8%B1-%D8%AD%D8%B3%DB%8C%D9%86%DB%8C-0107935')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>نوبت‌دهی زوپ</Text>
          </View>
        </TouchableOpacity>

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
  headerText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Vazirmatn',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: 'hidden',
    marginBottom: 20, 
    padding: 15,       
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardText: {
    fontFamily: 'Vazirmatn',
    fontSize: 16, 
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#F8F8F8',
    paddingVertical: 10, 
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
