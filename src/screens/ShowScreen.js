import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';


const ShowScreen = ({ navigation }) => {
    const state = useSelector(state => state.blogReducer);
    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')}) } >
                    <Feather name="edit" size={30} />
                </TouchableOpacity>
            );
        }
    };
};

const style = StyleSheet.create({
});

export default ShowScreen;
