import { StyleSheet, Text, TouchableOpacity } from "react-native"

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.skill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    skill: {
    color: "#fff",

    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  }
})
