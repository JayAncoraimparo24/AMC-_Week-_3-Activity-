import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('Name:');
  const [age, onChangeTextAge] = React.useState('Age:');
  const [address, onChangeTextAddress] = React.useState('Address:');
  const [school, onChangeTextSchool] = React.useState('School:');
  const [course, onChangeTextCourse] = React.useState('Course:');
  const [email, onChangeTextEmail] = React.useState('Email:');
  const [contactno, onChangeTextContactno] = React.useState('Contactno:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextContactno}
          value={contactno}
        />
        <MultilineTextInputExample />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          multilineStyles.container,
          {
            backgroundColor: value,
          },
        ]}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={multilineStyles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const multilineStyles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
    margin: 0,
    borderWidth: 1
    
  },
});

export default TextInputExample;