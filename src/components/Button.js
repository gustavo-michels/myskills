import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity style={styles.button}
      activeOpacity={.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#a370f7',
      padding: 20,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20
  },
  buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold'
  }
})
