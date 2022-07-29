import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

// type ButtonProps = TouchableOpacityProps

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.8}
      {...rest}
    >
      <Text style={styles.buttonText}>{ title }</Text>
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
