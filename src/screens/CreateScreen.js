import React, {useContext} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {Context} from "../context/BlogContext";

const CreateScreen = () => {
	const {state} = useContext(Context)

	return (<View>
		<Text>Create Blog post</Text>
	</View>)
}
const styles = StyleSheet.create({})

export default CreateScreen