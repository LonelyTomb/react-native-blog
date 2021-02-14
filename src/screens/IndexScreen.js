import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons';

const indexScreen = ({navigation}) => {
	const {state, deleteBlogPost, getBlogPost} = useContext(Context)
	useEffect(() => {
		getBlogPost()
		const listener = navigation.addListener('didFocus', () => {
			getBlogPost()
		})
		return () => {
			listener.remove()
		}
	}, [])
	return (<>
		<FlatList data={state}
		          keyExtractor={blogPost => blogPost.id.toString()}
		          renderItem={({item}) => {
			          return (
				          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
					          <View style={styles.rowStyle}>
						          <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
						          <TouchableOpacity onPress={() => {
							          deleteBlogPost(item.id)
						          }}>
							          <Feather name="trash" style={styles.deleteIcon}/>
						          </TouchableOpacity>
					          </View>
				          </TouchableOpacity>
			          )
		          }}/>
	</>)
}
indexScreen.navigationOptions = ({navigation}) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name="plus" size={30}/>
			</TouchableOpacity>
		),
	};
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