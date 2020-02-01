import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import allActions from '../actions';

const IndexScreen = ({ navigation }) => {
    const state = useSelector(state => state.blogReducer);
    const dispatch = useDispatch();

    useEffect (() => {
        allActions.blogActions.getBlogPosts(dispatch);

        const listener = navigation.addListener('didFocus', () => {
            allActions.blogActions.getBlogPosts(dispatch);
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id:item.id })}>
                            <View style={style.row}>
                                <Text style={style.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => allActions.blogActions.deleteBlogPost(dispatch, item.id)}>
                                    <Feather style={style.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Create') } >
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            );
        }
    };
};

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
