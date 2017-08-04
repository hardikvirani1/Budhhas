import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const LANG = {
    title: 'english',
    title: 'hindi' ,
    title: 'english',
    title: 'hindi',
    title: 'english'
};

class LoginView extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>In the</Text>
                    <Text style={styles.titleText}>Buddha's</Text>
                    <Text style={styles.titleText}>footsteps</Text>
                </View>

                <View style={styles.languageView}>
                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection:'column',
    },
    titleView:{
        justifyContent:'center',
        width,
        height: height/2.8,
        backgroundColor: 'gray',
    },
    languageView: {
        justifyContent:'center',
        alignItems:'center',
        width,
        height: height/1.5,
        backgroundColor:'lightgray',
        flexDirection:'column',

    },
    titleText: {
        alignSelf:'center',
        margin:2,
    },
    btnStyle: {
        borderBottomWidth:1,
        borderBottomColor:'#007AFF',
        padding:10,
        width: width/2,
    }
});

export default LoginView;