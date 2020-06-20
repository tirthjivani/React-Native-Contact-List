import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  buttonadd: {
    marginTop: 20,
  },
});

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handlePhoneChange = (phone) => {
    this.setState({ phone });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button
          style={styles.buttonadd}
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
