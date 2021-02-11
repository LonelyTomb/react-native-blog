import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import {Context} from '../context/BlogContext'

const indexScreen = () => {
	const {state, addBlogPost} = useContext(Context)
	return (<View>
		<Button onPress={addBlogPost} title={'Add Blog Post'}/>
		<FlatList data={state}
		          keyExtractor={blogPost => blogPost.title}
		          renderItem={({item}) => {
			          return <Text>{item.title}</Text>
		          }}/>
	</View>)
}

const styles = StyleSheet.create({})

export default indexScreen