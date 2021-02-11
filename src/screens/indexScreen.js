import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons';

const indexScreen = () => {
	const {state, addBlogPost, deleteBlogPost} = useContext(Context)
	return (<>
		<Button onPress={addBlogPost} title={'Add Blog Post'}/>
		<FlatList data={state}
		          keyExtractor={blogPost => blogPost.id.toString()}
		          renderItem={({item}) => {
			          return (<View style={styles.rowStyle}>
				          <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
				          <TouchableOpacity onPress={() => {
					          deleteBlogPost(item.id)
				          }}>
					          <Feather name="trash" style={styles.deleteIcon}/>
				          </TouchableOpacity>
			          </View>)
		          }}/>
	</>)
}

const styles = StyleSheet.create({
	rowStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray'
	},
	titleStyle: {
		fontSize: 18
	},
	deleteIcon: {
		fontSize: 24
	}
})

export default indexScreen