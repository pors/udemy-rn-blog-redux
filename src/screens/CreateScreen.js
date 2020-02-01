import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import BlogPostForm from '../components/BlogPostForm';
import allActions from '../actions';

const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <BlogPostForm
            onSubmit={(title, content) => { allActions.blogActions.addBlogPost(dispatch, title, content, () => navigation.navigate('Index')); }}
        />
    );
};

const style = StyleSheet.create({});

export default CreateScreen;
