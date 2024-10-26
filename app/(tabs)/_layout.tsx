import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='Courses' options={{title:'Courses'}}/>
        <Tabs.Screen name='Check Out' options={{title: 'Checkout'}}/>

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})