import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGretting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGretting('Good morning')
    }
    if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good night')
    }
  }, [mySkills])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Gustavo H. Michels</Text>

      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard key={item} skill={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 70,
        backgroundColor: '#121015'
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: "#fff",
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 5
    },
    greeting: {
      color: '#fff'
    }
})
