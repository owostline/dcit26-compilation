import { ScrollView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Student Profile</Text>

      <Text style={styles.h2}>Name:</Text>
      <Text style={styles.text}>Ostline Zyann R. Casao</Text>

      <Text style={styles.h2}>Age:</Text>
      <Text style={styles.text}>21</Text>

      <Text style={styles.h2}>Course/Year/Section:</Text>
      <Text style={styles.text}>BS Computer Science, BSCS 3-2</Text>

      <Text style={styles.h2}>About Me:</Text>
      <Text style={styles.text}>
        Hi! I’m Ostline, a Computer Science student at Cavite State University –
        Main Campus with a growing passion for cloud computing, data
        engineering, and building practical solutions with technology. I enjoy
        learning new technologies, solving technical problems, and working with
        others in tech communities.
      </Text>

      <Text style={styles.h2}>Achievements:</Text>
      <Text style={styles.text}>{'\u2022'} Well-Architected Capstone Award (2026)</Text>
      <Text style={styles.text}>{'\u2022'} Finalist – ByteForward Hackathon (2025)</Text>
      <Text style={styles.text}>{'\u2022'} Top 6 Finalist – iThink Hackathon (2025)</Text>

      <Text style={styles.h2}>Skills:</Text>
      <Text style={styles.text}>{'\u2022'} Java</Text>
      <Text style={styles.text}>{'\u2022'} JavaScript</Text>
      <Text style={styles.text}>{'\u2022'} React</Text>
      <Text style={styles.text}>{'\u2022'} React Native</Text>
      <Text style={styles.text}>{'\u2022'} AWS</Text>
      <Text style={styles.text}>{'\u2022'} Terraform</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
  },
  content: {
    padding: 8,
    paddingVertical: 50,
  },
  h1: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h2: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});