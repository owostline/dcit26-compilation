import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme';

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log('Error fetching user:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      {loading || !user ? (
        <ActivityIndicator size="large" color={colors.purple} />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user })}
          >
            <Image source={{ uri: user.picture.large }} style={styles.image} />
          </TouchableOpacity>

          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>
          <Text style={styles.hint}>Tap the photo to view profile</Text>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={fetchUser}>
        <Text style={styles.buttonText}>RANDOM USER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: colors.purple,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.foreground,
    marginTop: 16,
  },
  hint: {
    fontSize: 13,
    color: colors.comment,
    marginTop: 4,
  },
  button: {
    backgroundColor: colors.pink,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});