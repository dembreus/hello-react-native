const React = require("react");
const ReactNative = require("react-native");
const {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Slider
} = ReactNative;

class LoopExample extends React.Component<{}, $FlowFixMeState> {
  state = {
    value: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.value, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      })
    ).start();
  }

  render() {
    return (
      <View style={styles.row}>
        <Animated.View
          style={[
            styles.block,
            {
              opacity: this.state.value.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0]
              })
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 0,
    zIndex: -1
  },
  block: {
    width: 400,
    height: 10,
    backgroundColor: "blue"
  },
  line: {
    position: "absolute",
    left: 35,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: "red"
  }
});

export default LoopExample;
