import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('Name:');
  const [age, onChangeTextAge] = React.useState('Age:');
  const [address, onChangeTextAddress] = React.useState('Address:');
  const [school, onChangeTextSchool] = React.useState('School:');
  const [course, onChangeTextCourse] = React.useState('Course:');
  const [email, onChangeTextEmail] = React.useState('Email:');
  const [contact, onChangeTextContact] = React.useState('Contact no: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6115/6115933.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextName}
            value={name}
            placeholder="Name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5541/5541575.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/015/118/original/address-icon-free-vector.jpg' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextAddress}
            value={address}
            placeholder="Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/school-pack-2/512/1-1024.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextSchool}
            value={school}
            placeholder="School"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.bdwTjUrTaKxwJyc8KQ-aRQHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextCourse}
            value={course}
            placeholder="Course"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/R.67ddf4334044a56bb4b10aa92942a171?rik=ZCvr3w4fTeWADg&riu=http%3a%2f%2fwww.bluebuddhaboutique.com%2fblog%2fwp-content%2fuploads%2f2015%2f03%2fEmail_icon.jpg&ehk=JLyAfA6ghXJxHUx8jt2A4Ke%2fIJAZig42TOZxreP6v58%3d&risl=&pid=ImgRaw&r=0' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextEmail}
            value={email}
            placeholder="Email"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.UvqagJOkjSpzXYZcT5K-lQHaHF?rs=1&pid=ImgDetMain' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextContact}
            value={contact}
            placeholder="Contact"
          />
        </View>

        

        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
