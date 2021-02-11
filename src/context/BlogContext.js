import createDataContext from "./createDataContext";

const reducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [...state, {title: `Blog Post #${state.length + 1}`}];
		case 'edit_blog_post':
			return [...state];
		case 'delete_blog_post':
			return [...state];
		default:
			return state
	}
}
const addBlogPost = (dispatch) => {
	return () => {
		dispatch({type: 'add_blog_post'})
	}
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost}, [])