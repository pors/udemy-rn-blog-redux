import jsonServer from '../api/jsonServer';


const getBlogPosts = async (dispatch) => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data });
};

const addBlogPost = async (dispatch, title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});
    if(callback) callback();
};

const deleteBlogPost = async (dispatch, id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
};

const editBlogPost = async (dispatch, id, title, content, callback) => {
    await jsonServer.put(`blogposts/${id}`, {title, content});
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    if(callback) callback();
};


export default { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost };
