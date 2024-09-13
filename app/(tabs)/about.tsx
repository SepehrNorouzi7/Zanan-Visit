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
          <Text style={styles.highlight}>دکتر سحر حسینی</Text> یکی از برترین متخصصین زنان و زایمان در شهر دلیجان است. او با سال‌ها تجربه در زمینه بهداشت و درمان زنان، خدمات بسیار متنوعی از جمله معاینات پیش از بارداری، مراقبت‌های بارداری، زایمان طبیعی و سزارین، درمان ناباروری، و مدیریت مشکلات هورمونی و اختلالات قاعدگی را به بیماران ارائه می‌دهد.
        </Text>
        <Text style={styles.paragraph}>
          علاوه بر این، او به سلامت باروری و جنسی زنان توجه ویژه‌ای داشته و با استفاده از آخرین روش‌ها و تکنولوژی‌های پزشکی، تلاش می‌کند تا بهترین نتایج ممکن را برای بیماران خود فراهم کند.
        </Text>
        <Text style={styles.subtitle}>تحصیلات و تجربه کاری</Text>
        <Text style={styles.paragraph}>
          دکتر حسینی تحصیلات پزشکی خود را از دانشگاه علوم پزشکی تهران به پایان رسانده و پس از آن در بیمارستان‌های معتبر کشور تجربه کاری ارزشمندی کسب کرده است. او همچنین در زمینه مشاوره و راهنمایی در مورد مسائل بهداشت زنان، نقش فعالی در آموزش و آگاهی رسانی به جامعه ایفا می‌کند.
        </Text>
        <Text style={styles.paragraph}>
          مطب دکتر حسینی در خیابان بهشتی شمالی، ابتدا خیابان مهندس هاشمی، ساختمان پزشکان کیمیا واقع شده است. برای نوبت‌گیری می‌توانید با شماره تلفن 08644221915 تماس بگیرید.
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
    backgroundColor: '#F7F7F7',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Vazirmatn',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
    textAlign: 'right',
    borderBottomWidth: 2,
    borderBottomColor: '#8A4ADE',
    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#8A4ADE',
    textAlign: 'right',
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#8A4ADE',
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
