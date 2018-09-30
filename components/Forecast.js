import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
   render(){
       return(
            <View>
                <Text style={pao_styles.text_style}>{"\n"}{this.props.main}{"\n"}</Text>
                <Text style={pao_styles.text_style}>{this.props.description}{"\n"}</Text>
                <Text style={pao_styles.text_style}>{this.props.temp} °C{"\n"}</Text>
            </View>
       );
   }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25},
    backdrop: {width: '100%', height: '100%'},
  });

const pao_styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    viewStyleOne: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66ffff',
        opacity: 0.3,
    },
    backdrop: {width: '100%', height: '100%'},
    text_style:{
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});