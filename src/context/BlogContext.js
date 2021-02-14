import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
	switch (action.type) {
		case 'get_blog_post':
			return [...action.payload]
		case 'edit_blog_post':
			return [...state.map(blogPost => {
				return blogPost.id === action.payload.id ? action.payload : blogPost
			})];
		case 'delete_blog_post':
			return state.filter(blogPost => blogPost.id !== action.payload);
		default:
			return state
	}
}
const addBlogPost = () => {
	return async (title, content, callback) => {
		try {
			await jsonServer.post('/blogPosts', {title, content})
			if (callback) callback()
		} catch (e) {
			console.log(e)
		}
	}
}
const getBlogPost = dispatch => {
	return async () => {
		try {
			const response = await jsonServer.get('/blogPosts')
			dispatch({type: 'get_blog_post', payload: response.data})
		} catch (e) {
			console.log(e)
		}
	}
}
const deleteBlogPost = dispatch => {
	return async (id) => {
		try {
			await jsonServer.delete(`/blogPosts/${id}`)
			dispatch({type: 'delete_blog_post', payload: id})
		} catch (e) {
			console.log(e)
		}
	}
}

const editBlogPost = dispatch => {
	return async (id, title, content, callback) => {
		try {
			await jsonServer.put(`/blogPosts/${id}`, {title, content})
			dispatch({type: 'edit_blog_post', payload: {id, title, content}})

			if (callback) callback()
		} catch (e) {
			console.log(e)
		}
	}
}


export const {Context, Provider} = createDataContext(reducer, {
	addBlogPost,
	deleteBlogPost,
	editBlogPost,
	getBlogPost
}, [])