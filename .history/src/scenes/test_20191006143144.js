import React from "react"
import { View, Text } from "react-native"

class TestScreen extends React.Component {
    render() {
      const data = this.props.navigation.getParams("")
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Test Screen</Text>
        </View>
      );
    }
  }

export default TestScreen
