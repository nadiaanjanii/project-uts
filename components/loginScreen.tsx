import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; 

// Impor MOCK_AUTH_STATE dari root layout
// Pastikan path '../app/_layout' ini benar sesuai struktur folder Anda
import { MOCK_AUTH_STATE } from '../app/_layout'; 

const LoginScreen: React.FC = () => {
  const router = useRouter(); 
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // --- PERUBAHAN ---
    // Logika diubah agar dinamis:
    // Sekarang, login akan berhasil jika username DAN password TIDAK kosong.
    // Cek 'trim()' adalah untuk memastikan spasi saja tidak dihitung sebagai input valid.
    if (username.trim() !== '' && password.trim() !== '') { 
      Alert.alert('Login Sukses', `Selamat datang, ${username}!`);
      
      // Update status login ke TRUE
      MOCK_AUTH_STATE.setIsLoggedIn(true);
      
      // Navigasi ke Tabs
      router.replace('/(tabs)'); 
      
    } else {
      // Pesan error diubah agar sesuai dengan logika baru
      Alert.alert('Login Gagal', 'Username dan Password tidak boleh kosong.');
    }
    // --- AKHIR PERUBAHAN ---
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.title}>Login</Text>
        
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Masukkan Username Anda"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Masukkan Password Anda"
          secureTextEntry={true}
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

// Styles (tetap sama)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 150,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  button: {
    alignSelf: 'flex-end', 
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;