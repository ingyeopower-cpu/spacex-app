import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { formatSpaceTime } from '@/utils/timezone';

const MOCK_SCHEDULE = [
  {
    id: 1,
    mission: 'Starlink Group 8-5',
    vehicle: 'Falcon 9',
    location: 'Cape Canaveral, FL',
    date: new Date(Date.now() + 86400000 * 2).toISOString(),
    status: 'Scheduled',
  },
  {
    id: 2,
    mission: 'Polaris Dawn',
    vehicle: 'Crew Dragon',
    location: 'Kennedy Space Center, FL',
    date: new Date(Date.now() + 86400000 * 15).toISOString(),
    status: 'Targeted',
  }
];

export default function ScheduleScreen() {
  const scheme = useColorScheme() ?? 'dark';
  const colors = Colors[scheme];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Launch Schedule</Text>

      {MOCK_SCHEDULE.map((item) => {
        const times = formatSpaceTime(item.date);
        return (
          <View key={item.id} style={[styles.card, { backgroundColor: colors.backgroundElement, borderLeftColor: colors.tint, borderLeftWidth: 4 }]}>
            <View style={styles.cardHeader}>
              <Text style={[styles.mission, { color: colors.text }]}>{item.mission}</Text>
              <View style={[styles.badge, { backgroundColor: colors.backgroundSelected }]}>
                <Text style={[styles.badgeText, { color: colors.tint }]}>{item.status}</Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Ionicons name="rocket-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>{item.vehicle}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={16} color={colors.textSecondary} />
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>{item.location}</Text>
            </View>

            <View style={[styles.timeBox, { backgroundColor: colors.backgroundSelected }]}>
              <Text style={[styles.timeText, { color: colors.text }]}>US: {times.us}</Text>
              <Text style={[styles.timeText, { color: colors.text }]}>KR: {times.kr}</Text>
            </View>
          </View>
        );
      })}
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
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  mission: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8,
  },
  timeBox: {
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: '500',
  },
});
