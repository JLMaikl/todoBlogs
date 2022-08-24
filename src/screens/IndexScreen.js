import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
        <FlatList 
          data={state}
          keyExtractor={(blogPost) => blogPost.title} 
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
            <   View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name='trash' style={styles.icon}/>
                </TouchableOpacity >
                </View>
              </TouchableOpacity >
            )
          }}
        />
      </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return { 
    headerRight: () => ( 
      <TouchableOpacity 
          onPress={() => navigation.navigate('Create')}
          style={styles.plus}
      > 
        <Feather name="plus" size={30} /> 
      </TouchableOpacity> 
    ), 
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20, 
    paddingHorizontal: 10,     
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 24
  },
  icon: {
    fontSize: 24,
    paddingHorizontal: 20, 
  },
  plus: {
    paddingHorizontal: 20,
  }
});

export default IndexScreen;