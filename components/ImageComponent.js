import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageComponent = ({ name, email, photo_url }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: photo_url }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    backgroundColor: '#F98C50',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'start',
    alignItems: 'start',
    justifyContent: 'start',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  email: {
    fontSize: 30,
    color: '#666',
    marginLeft: 15,
    marginTop: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
});

export default ImageComponent;