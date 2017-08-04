import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import LoginView from './components/LoginView';

export default class main extends Component {
    render(){



        return(
            <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <LoginView/>
                </View>
            </Provider>
        );
    }
}

