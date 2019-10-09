import React from "react"
import { View, Text, Button } from "react-native"

const testParams =  {testData: "some test data"}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          title="Test"
          onPress={() => navigation.navigate('Test', testParams)}
        />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Test"
        onPress={() => this.props.navigation.navigate('Test',testParams)}
      />
      </View>
    )
  }
}

export default HomeScreen

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Go to Test"
      onPress={() => this.props.navigation.navigate('Test',testParams)}
    />
    </View>
  )
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <Button
        title="Test"
        onPress={() => navigation.navigate('Test', testParams)}
      />
    )
  }
}