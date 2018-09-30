export default class componentDidMount extends React.Component {
fetchData =  () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&untils=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e')
    .then((response) => response.json())
    .then((json) => {
        this.setState(
            {
                forecast:{
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                }
            });
    })
    .catch((error) => {
        console.warn(error);
    });
}
    componentDidMount = () => this.fetchData()
}