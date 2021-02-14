import React, {useContext} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {Context} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
	const {state} = useContext(Context)
	const id = navigation.getParam('id')
	const blogPost = state.find((blogPost) => blogPost.id === id)
	return (<View>
		<Text>{blogPost.title}</Text>
	</View>)
}

ShowScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: () => {
			return (<TouchableOpacity onPress={() => {
				navigation.navigate('Edit', {id: navigation.getParam('id')})
			}}>
				<Feather name="edit-2" size={20}/>
			</TouchableOpacity>)
		}
	}
}
const styles = StyleSheet.create({})

export default ShowScreen