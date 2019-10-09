import React from "react"
import { View, Text } from "react-native"

class TestScreen extends React.Component {
    render() {
      const data = this.props.navigation.getParam("testData")
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Test Screen</Text>
          <Text style={{fontSize: 10}}>{testData}</Text>
        </View>
      );
    }
  }

export default TestScreen
