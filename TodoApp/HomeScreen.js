import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from './data.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    items.push(
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>By: {item.user} - Comments: {item.commentCount}</Text>
      <Text>{formattedDate} {formattedTime}</Text>
    </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (FlatList)</Text>
      <FlatList 
       data={data}
       renderItem={renderItem}
       keyExtractor={(item)=>item.id}/>
    </View>
  );
};

export default HomeScreen;