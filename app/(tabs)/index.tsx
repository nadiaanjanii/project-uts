import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  StatusBar, 
  Platform, 
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTransaction } from '../context/TransactionContext';

const Colors = {
  background: '#F4F5F7',
  cardBg: '#FFFFFF',
  headerBg: '#FFFFFF',
  primaryText: '#171717',
  secondaryText: '#6B7280',
  primaryBrand: '#4A90E2',
  primaryBrandText: '#FFFFFF',
  income: '#2ECC71',
  incomeLight: '#EAF9F1',
  expense: '#E74C3C',
  expenseLight: '#FDEEEB',
};

export default function IndexScreen() {
  const { currentBalance, totalIncome, totalExpense, refreshData } = useTransaction();

  const formatRupiah = (number: number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={[styles.safeArea, { paddingTop: StatusBar.currentHeight || 20 }]}>
        <ThemedView style={styles.header}>
          <ThemedView style={styles.headerLeft}>
            <Image 
              source={require('../../assets/images/logo-uts.png')} 
              style={styles.headerLogo} 
            />
            <ThemedText style={styles.headerTitle}>Spendy</ThemedText>
          </ThemedView>
          
          <TouchableOpacity onPress={refreshData}>
            <Ionicons name="refresh-outline" size={24} color={Colors.primaryText} />
          </TouchableOpacity>
        </ThemedView>
      </SafeAreaView>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          {/* Kartu Saldo */}
          <ThemedView style={styles.balanceCard}>
            <ThemedText style={styles.saldoLabel}>Saldo Saat Ini</ThemedText>
            <Text style={styles.saldoAmount} adjustsFontSizeToFit numberOfLines={1}>
              {formatRupiah(currentBalance)}
            </Text>
          </ThemedView>

          {/* Box Income & Expense */}
          <View style={styles.boxesContainer}>
            <TouchableOpacity style={styles.box}>
              <View style={[styles.iconWrapper, { backgroundColor: Colors.incomeLight }]}>
                <Ionicons name="arrow-up" size={24} color={Colors.income} />
              </View>
              <ThemedText style={styles.boxLabel}>Total Pemasukkan</ThemedText>
              <ThemedText style={styles.boxAmount}>{formatRupiah(totalIncome)}</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
              <View style={[styles.iconWrapper, { backgroundColor: Colors.expenseLight }]}>
                <Ionicons name="arrow-down" size={24} color={Colors.expense} />
              </View>
              <ThemedText style={styles.boxLabel}>Total Pengeluaran</ThemedText>
              <ThemedText style={styles.boxAmount}>{formatRupiah(totalExpense)}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  safeArea: { backgroundColor: Colors.headerBg },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 24, 
    paddingVertical: 20, 
    backgroundColor: Colors.headerBg, 
    borderBottomWidth: 1, 
    borderBottomColor: '#EEEEEE' 
  },
  headerLeft: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingLeft: Platform.OS === 'android' ? 16 : 0 
  },
  headerLogo: {
    width: 54,
    height: 54,
    marginRight: 12, 
    resizeMode: 'contain' 
  },
  headerTitle: { 
    fontSize: 26, 
    fontFamily: 'Poppins_700Bold', 
    color: Colors.primaryText, 
  },
  scrollView: { flex: 1 },
  mainContent: { flex: 1, padding: 24 },
  balanceCard: { 
    backgroundColor: Colors.primaryBrand, 
    borderRadius: 20, 
    padding: 24, 
    alignItems: 'center', 
    marginBottom: 24, 
    width: '100%', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 8 
  },
  saldoLabel: { 
    fontSize: 16, 
    color: Colors.primaryBrandText, 
    opacity: 0.8, 
    marginBottom: 8,
    fontFamily: 'Poppins_400Regular' 
  },
  saldoAmount: { 
    fontSize: 34, 
    fontFamily: 'Poppins_700Bold', 
    color: Colors.primaryBrandText, 
    width: '100%', 
    textAlign: 'center' 
  },
  boxesContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 16 
  },
  box: { 
    flex: 1, 
    backgroundColor: Colors.cardBg, 
    borderRadius: 16, 
    padding: 16, 
    alignItems: 'flex-start', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 5, 
    elevation: 4 
  },
  iconWrapper: { 
    width: 48, 
    height: 48, 
    borderRadius: 24, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  boxLabel: { 
    fontSize: 12, 
    color: Colors.secondaryText, 
    marginBottom: 4,
    fontFamily: 'Poppins_400Regular'
  },
  boxAmount: { 
    fontSize: 18, 
    fontFamily: 'Poppins_600SemiBold', 
    color: Colors.primaryText 
  },
});