import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export interface SkillProps {
  id: string;
  name: string;
}


export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillProps[]>([])
  const [greeting, setGretting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState => oldState.filter(
      skill => skill.id !== id
    )))
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

      <Button onPress={handleAddNewSkill} title="Adicionar" />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
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
