import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
     { place: 'Langsuan', code: '86110' },
]
const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
    <View style={styles.container}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
        </View>
        <View style={styles.zipItem}>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
     </View>
     </TouchableHighlight>
)
const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
    return {
        headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
 render() {
    const { navigate } = this.props.navigation;
        return (
            <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
            />
            </View>
        );
 }
}
const styles = StyleSheet.create({
    container: { 
        paddingTop: 25,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    zipItem:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    zipPlace:{
        color: 'black',
        fontSize: 20,
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    zipCode:{
        color: 'black',
        fontSize: 20,
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        textAlign: 'right',
    },
  });