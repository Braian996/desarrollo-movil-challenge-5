import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EjemploFlex from './src/EjemploFlex'
import FilaIndia from './src/Ejercicio1'
import HaciendoLaVertical from './src/Ejercicio2'

export default class App extends React.Component {
  render() {
    return <HaciendoLaVertical />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
