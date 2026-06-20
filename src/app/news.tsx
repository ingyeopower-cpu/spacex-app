import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';
import { formatSpaceTime } from '@/utils/timezone';

const MOCK_NEWS = [
  {
    id: 1,
    title: 'SpaceX successfully launches 20 Starlink satellites',
    summary: 'The Falcon 9 rocket delivered the latest batch of satellites, including 13 with Direct to Cell capabilities.',
    date: new Date().toISOString(),
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Starship Flight 6 targets early next month',
    summary: 'Preparations are underway at Starbase for the next major test flight of the Starship system.',
    date: new Date(Date.now() - 86400000).toISOString(),
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
  }
];

export default function NewsScreen() {
  const scheme = useColorScheme() ?? 'dark';
  const colors = Colors[scheme];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>News Feed</Text>

      {MOCK_NEWS.map((item) => {
        const times = formatSpaceTime(item.date);
        return (
          <View key={item.id} style={[styles.card, { backgroundColor: colors.backgroundElement }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.summary, { color: colors.textSecondary }]} numberOfLines={2}>
                {item.summary}
              </Text>
              <Text style={[styles.date, { color: colors.tint }]}>
                US: {times.us} | KR: {times.kr}
              </Text>
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
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  date: {
    fontSize: 11,
    fontWeight: '600',
  },
});
