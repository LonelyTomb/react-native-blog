import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {BlogProvider} from "./src/context/BlogContext";
import indexScreen from "./src/screens/indexScreen";

const navigator = createStackNavigator({
	Index: indexScreen
}, {
	initialRouteName: 'Index',
	defaultNavigationOptions: {
		title: 'Blogs'
	}
})

const App = createAppContainer(navigator)

export default () => {
	return <BlogProvider>
		<App/>
	</BlogProvider>
}