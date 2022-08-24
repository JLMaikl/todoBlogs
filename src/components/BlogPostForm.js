import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {  
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Заголовок блога:</Text>
      <TextInput 
        value={title} 
        onChangeText={(text) => setTitle(text)} 
        style={styles.input}/>
      <Text style={styles.label}>Содержание:</Text>
      <TextInput 
        value={content} 
        onChangeText={(text) => setContent(text)} 
        style={styles.input}/>
      <Button 
        title='Save Blog Post'
        onPress={() =>onSubmit(title, content)} 
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {       
        paddingHorizontal: 10
    },
    input: {
        fontSize: 24,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5
    },
    label: {
         fontSize: 24,
         marginVertical: 10
    }
});

export default BlogPostForm;