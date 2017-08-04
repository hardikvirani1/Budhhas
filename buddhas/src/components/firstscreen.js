import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Strings from '../helper/language';

class FirstScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>In the</Text>
                    <Text style={styles.titleText}>Buddha's</Text>
                    <Text style={styles.titleText}>footsteps</Text>
                </View>

                <View style={styles.languageView}>
                    <TouchableHighlight onPress={() =>{ this.props.navigation.navigate('secondscreen')} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>Espanol</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>Francais</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } style={styles.btnStyle}>
                        <Text style={styles.titleText}>Pyccknn</Text>
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
        height: height/2.5,
    },
    languageView: {
        justifyContent:'center',
        alignItems:'center',
        width,
        flexDirection:'column',

    },
    titleText: {
        alignSelf:'center',
        margin:2,
    },
    btnStyle: {
        borderBottomWidth:0.5,
        borderBottomColor:'#007AFF',
        padding:7,
        width: width/2,
    }
});

export default FirstScreen;