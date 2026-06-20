import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { formatSpaceTime } from '@/utils/timezone';

export default function DashboardScreen() {
  const scheme = useColorScheme() ?? 'dark';
  const colors = Colors[scheme];

  // Placeholder for Stock Data
  const [stockPrice] = useState('142.50');
  const [priceChange] = useState('+2.30 (1.64%)');
  const isPositive = true;

  const now = new Date();
  const times = formatSpaceTime(now);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Dashboard</Text>

      {/* Stock Widget */}
      <View style={[styles.card, { backgroundColor: colors.backgroundElement }]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={[styles.ticker, { color: colors.text }]}>SPCX</Text>
            <Text style={[styles.companyName, { color: colors.textSecondary }]}>SpaceX</Text>
          </View>
          <Ionicons name="rocket" size={32} color={colors.tint} />
        </View>

        <View style={styles.priceContainer}>
          <Text style={[styles.price, { color: colors.text }]}>${stockPrice}</Text>
          <Text style={[styles.change, { color: isPositive ? '#4ade80' : '#ef4444' }]}>
            {priceChange}
          </Text>
        </View>

        <Text style={[styles.marketStatus, { color: colors.textSecondary }]}>
          Market Open (US) • KST: 정규장 진행중
        </Text>
        <Text style={[styles.timeInfo, { color: colors.textSecondary }]}>
          US: {times.us}{'\n'}
          KR: {times.kr}
        </Text>
      </View>

      {/* Summary Section */}
      <View style={[styles.card, { backgroundColor: colors.backgroundElement, marginTop: 16 }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Today's Summary</Text>
        <Text style={[styles.summaryText, { color: colors.textSecondary }]}>
          • Starship Flight 6 is scheduled for next week.
          {'\n'}• SPCX stock reached a new all-time high following the successful satellite deployment.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 48,
  },
  card: {
    padding: 20,
    borderRadius: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  ticker: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 12,
  },
  change: {
    fontSize: 16,
    fontWeight: '600',
  },
  marketStatus: {
    fontSize: 12,
    marginBottom: 8,
  },
  timeInfo: {
    fontSize: 11,
    marginTop: 8,
    opacity: 0.8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  summaryText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
