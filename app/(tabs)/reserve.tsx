import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function TabTwoScreen() {
  const [fontsLoaded] = useFonts({
    'Vazirmatn': require('@/assets/fonts/Vazirmatn-VariableFont_wght.ttf'),
  });

  const [selectedDate, setSelectedDate] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });

  const generateTimes = () => {
    const times = [];
    let startTime = 7 * 60; 
    const endTime = 17 * 60 - 20; 
    const interval = 20; 

    while (startTime <= endTime) {
      const hours = Math.floor(startTime / 60);
      const minutes = startTime % 60;
      times.push(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
      startTime += interval;
    }

    return times;
  };

  const times = generateTimes();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.timesContainer}>
          {times.map((time, index) => (
            <View key={index} style={styles.timeContainer}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
          ))}
        </View>
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
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeContainer: {
    backgroundColor: '#e0e0e0',
    width: '30%',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 16,
    fontFamily: 'Vazirmatn',
    color: '#333',
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
