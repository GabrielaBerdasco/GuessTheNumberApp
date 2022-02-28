import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import GameScreen from './screen/GameScreen';
import StartGameScreen from './screen/StartGameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {

  const [loaded] = useFonts({
    Shizuru: require('./assets/fonts/Shizuru-Regular.ttf')
  })
  const [userNumber, setUserNumber] = useState()
  const [userRounds, setUserRounds] = useState()

  if (!loaded) return <AppLoading />

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const handleGameOver = rounds => {
    setUserRounds(rounds)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
  }

  if (userRounds) {
    content = <GameOverScreen userRounds={userRounds} userNumber={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
