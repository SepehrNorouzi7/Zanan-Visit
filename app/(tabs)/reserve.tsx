import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts } from 'expo-font';

export default function TabTwoScreen() {
  const [fontsLoaded] = useFonts({
    'Vazirmatn': require('@/assets/fonts/Vazirmatn-VariableFont_wght.ttf'),
  });

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const englishToPersianNumber = (num: number): string => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/[0-9]/g, (digit: string) => persianDigits[parseInt(digit)]);
  };

  const generateTimes = (): string[] => {
    const times: string[] = [];
    let startTime = 7 * 60;
    const endTime = 17 * 60 - 20;
    const interval = 20;

    while (startTime <= endTime) {
      const hours = Math.floor(startTime / 60);
      const minutes = startTime % 60;
      const formattedTime = `${englishToPersianNumber(hours)}:${minutes < 10 ? '۰' : ''}${englishToPersianNumber(minutes)}`;
      times.push(formattedTime);
      startTime += interval;
    }

    return times;
  };

  const times = generateTimes();

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) setSelectedDate(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.datePickerContainer}>
          <Text style={styles.selectedDateText}>
            تاریخ انتخاب شده: {selectedDate.toLocaleDateString('fa-IR')}
          </Text>
          <TouchableOpacity 
            style={styles.datePickerButton} 
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.datePickerButtonText}>انتخاب تاریخ</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
              locale="fa-IR"
            />
          )}
        </View>

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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  datePickerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 18,
    fontFamily: 'Vazirmatn',
    marginBottom: 10,
  },
  datePickerButton: {
    backgroundColor: '#8A4ADE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  datePickerButtonText: {
    fontSize: 16,
    fontFamily: 'Vazirmatn',
    color: 'white',
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeContainer: {
    backgroundColor: '#F0F0F0',
    width: '30%',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
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
