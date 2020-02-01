import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BlogPostForm from '../components/BlogPostForm';
import allActions from '../actions';

const EditScreen = ({ navigation }) => {
    const state = useSelector(state => state.blogReducer);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);
    const dispatch = useDispatch();

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                allActions.blogActions.editBlogPost(dispatch, id, title, content, () => {
                    navigation.pop();
                });
            }}
        />
    );
};

const style = StyleSheet.create({});

export default EditScreen;
