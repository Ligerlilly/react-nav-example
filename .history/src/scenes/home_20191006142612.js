import React from "react"
import { View, Text, Button } from "react-native"

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    }
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Test"
          onPress={() => this.props.navigation.navigate('Test')}
        />
        </View>
      );
    }
  }

export default HomeScreen
