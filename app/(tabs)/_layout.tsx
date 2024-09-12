import { Tabs } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native'; 

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'Vazirmatn': require('@/assets/fonts/Vazirmatn-VariableFont_wght.ttf'),
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}> 
              <TabBarIcon name={focused ? 'woman' : 'woman-outline'} color='#8A4ADE' />
              <Text style={{ fontFamily: 'Vazirmatn', fontSize: 14, color: color }}>خانه</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reserve"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center', flexDirection: 'column' }}> 
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color='#8A4ADE' />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}> 
              <Text style={{ fontFamily: 'Vazirmatn', fontSize: 14, color: color }}>نوبت</Text>
              <Text style={{ fontFamily: 'Vazirmatn', fontSize: 14, color: color, marginLeft: 4}}>رزرو</Text>
            </View>
          </View>
          ),
        }}
      />
    <Tabs.Screen
      name="about"
      options={{
        title: '',
        tabBarIcon: ({ color, focused }) => (
          <View style={{ alignItems: 'center' }}> 
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color='#8A4ADE'  />
            <Text style={{ fontFamily: 'Vazirmatn', fontSize: 14, color: color }}>درباره</Text>
          </View>
        ),
      }}
    />
    </Tabs>
  );
}
