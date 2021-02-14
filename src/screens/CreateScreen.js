import React, {useContext,} from 'react'
import {StyleSheet,} from 'react-native'
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
	const {addBlogPost} = useContext(Context)
	return <BlogPostForm onSubmit={(title, content) => {
		addBlogPost(title, content, () => {
			navigation.navigate('Index')
		})
	}}/>
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

export default CreateScreen