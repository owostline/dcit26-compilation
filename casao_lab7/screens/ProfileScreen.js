import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

function Section({ icon, title, color, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <FontAwesome name={icon} size={18} color={color} />
        <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen({ route }) {
  const { user } = route.params;
  const { name, location, login } = user;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={{ uri: user.picture.large }} style={styles.image} />
        <Text style={styles.name}>
          {name.title} {name.first} {name.last}
        </Text>
        <Text style={styles.username}>@{login.username}</Text>
      </View>

      <Section icon="user" title="About" color={colors.purple}>
        <Row label="Age" value={user.dob.age} />
        <Row label="Birthday" value={formatDate(user.dob.date)} />
        <Row label="Gender" value={user.gender} />
        <Row label="Nationality" value={user.nat} />
      </Section>

      <Section icon="map-marker" title="Address" color={colors.orange}>
        <Row
          label="Street"
          value={`${location.street.number} ${location.street.name}`}
        />
        <Row label="City" value={location.city} />
        <Row label="State" value={location.state} />
        <Row label="Country" value={location.country} />
        <Row label="Postcode" value={location.postcode} />
      </Section>

      <Section icon="envelope" title="Contact" color={colors.cyan}>
        <Row label="Email" value={user.email} />
        <Row label="Phone" value={user.phone} />
        <Row label="Cell" value={user.cell} />
      </Section>

      <Section icon="ellipsis-h" title="Other" color={colors.green}>
        <Row label="Registered" value={formatDate(user.registered.date)} />
        <Row label="Member for" value={`${user.registered.age} years`} />
        <Row label="Timezone" value={location.timezone.description} />
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: colors.pink,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.foreground,
    marginTop: 12,
  },
  username: {
    fontSize: 14,
    color: colors.comment,
    marginTop: 2,
  },
  section: {
    backgroundColor: colors.currentLine,
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.comment,
    paddingBottom: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  label: {
    width: 100,
    color: colors.comment,
    fontWeight: '600',
  },
  value: {
    flex: 1,
    color: colors.foreground,
    textTransform: 'none',
  },
});