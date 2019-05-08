import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    
    handleChangeText = (text) => {
        this.setState(text);
    }

    handleSubmitEditing = () => {
        
    }
    
    render() {
        const {placeholder} = this.props;
        const {text} = this.state;

        return (
        <View style = {styles.container}>
            <TextInput
                autocorrect={false}
                value={text}
                placeholder={this.props.placeholder}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                clearButtonMode = "always"
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleSubmitEditing}
            ></TextInput>   
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    TextInput:{
        flex: 1,
        color:'white',
    }
});