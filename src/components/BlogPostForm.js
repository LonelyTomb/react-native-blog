import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const BlogPostForm = ({initialValues, onSubmit}) => {
	const [title, setTitle] = useState(initialValues.title)
	const [content, setContent] = useState(initialValues.content)

	return (<View style={styles.container}>
		<Text style={styles.label}>Create Title: </Text>
		<TextInput style={styles.inputStyle} value={title} onChangeText={text => setTitle(text)}/>
		<Text style={styles.label}>Create Content: </Text>
		<TextInput style={styles.inputStyle} value={content} onChangeText={text => setContent(text)}/>
		<Button style={styles.button} title={"Save Blog Post"} onPress={() => {
			onSubmit(title, content)
		}}/>
	</View>)
}

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
}
const styles = StyleSheet.create({
	container: {
		paddingTop: 5
	},
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5
	},
	button: {
		marginVertical: 10,
		marginHorizontal: 5
	}
})

export default BlogPostForm