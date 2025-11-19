import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Pastikan @expo/vector-icons terinstal

// Daftar warna (sesuaikan dengan tema Anda jika perlu)
const Colors = {
  icon: '#000000', // Ikon hitam
  iconInactive: '#8e8e93', // Ikon abu-abu saat tidak aktif
  activeBackground: '#e0f2ff', // Background biru muda saat aktif (sesuai gambar)
  tabBar: '#ffffff', // Background tab bar putih
  tabBarBorder: '#e0e0e0', // Garis batas di atas tab bar
};

/**
 * Komponen kustom untuk render ikon di tab bar.
 */
function TabBarIcon({
  name,
  focused,
}: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  focused: boolean;
}) {
  const iconColor = focused ? Colors.icon : Colors.iconInactive;

  return (
    // View ini akan menjadi lingkaran jika 'focused'
    <View
      style={[
        styles.tabIconContainer,
        focused && { backgroundColor: Colors.activeBackground },
      ]}>
      <Ionicons name={name} size={26} color={iconColor} />
    </View>
  );
}

// Ini adalah komponen default yang diekspor dari _layout.tsx
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Menyembunyikan label teks (Home, Explore, dll.)
        tabBarActiveTintColor: Colors.icon,
        tabBarInactiveTintColor: Colors.iconInactive,
        tabBarStyle: {
          backgroundColor: Colors.tabBar,
          borderTopWidth: 1,
          borderTopColor: Colors.tabBarBorder,
          height: 80, // Sesuaikan tinggi tab bar
          paddingBottom: 20, // Padding untuk area aman (iPhone)
          paddingTop: 10,
        },
      }}>
      {/* TAB 1: HOME */}
      <Tabs.Screen
        name="index" // HARUS COCOK dengan file `app/(tabs)/index.tsx`
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              focused={focused}
            />
          ),
        }}
      />
      {/* TAB 2: FINANCE */}
      <Tabs.Screen
        name="finance" // HARUS COCOK dengan file `app/(tabs)/finance.tsx`
        options={{
          title: 'Finance',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'cash' : 'cash-outline'}
              focused={focused}
            />
          ),
        }}
      />
      {/* TAB 3: EXPLORE */}
      <Tabs.Screen
        name="explore" // HARUS COCOK dengan file `app/(tabs)/explore.tsx`
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              focused={focused}
            />
          ),
        }}
      />
      {/* TAB 4: PROFILE */}
      <Tabs.Screen
        name="profile" // HARUS COCOK dengan file `app/(tabs)/profile.tsx`
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 44, // Lebar lingkaran background
    height: 44, // Tinggi lingkaran background
    borderRadius: 22, // Setengah dari width/height untuk membuatnya bulat
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4, // Sedikit margin ke atas
  },
});