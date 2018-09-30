import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    fetchData =  () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
                {
                    forecast:{
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
        })
        .catch((error) => {
            console.warn(error);
        });
    }
    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
            if (prevProps.zipCode !== this.props.zipCode) {
                this.fetchData()
            }
        }
    render(){
        return (
            
           
           <View style = {pao_styles.container}>
                <ImageBackground source={require('../images/bg.jpg')} style={pao_styles.backdrop}>
                <View style = {pao_styles.viewStyleOne}>
                        <Text style={pao_styles.text_style}>Zip code is {this.props.zipCode} .</Text>
                        <Forecast {...this.state.forecast} />
                </View>
                </ImageBackground>
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