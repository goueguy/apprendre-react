const scaleNames = {
    c:"Celcius",
    f:"Farenheight"
}

/* 
    (50°F - 32) x .5556 = 10°C
*/
function ToCelcius(farenheight){
    return  (farenheight-32) * 5/9
}
/*
    (30°C x 1.8) + 32 = 86°F
*/
function ToFarenheight(celcius){
    return (celcius*1.8)+32
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const {temperature} = this.props;

        return (
            <div className="form-group">
                <label htmlFor="temperature">Temperature (en {this.props.scale==="c" ? scaleNames.c:scaleNames.f}):</label>
                <input name="temperature" className="form-control" id="temperature" value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale:'c',//echelle par défaut (celcius)
            temperature:20
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }
    handleTemperatureChange(temperature){
        this.setState({
            temperature
        })
    }
    render(){
        const { temperature,scale } = this.state;
        const celcius = scale==="c" ? temperature:ToCelcius(temperature);
        const farenheight = scale==="f" ? temperature:ToFarenheight(celcius);
        return <div>
            <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleTemperatureChange}/>
            <TemperatureInput scale="f" temperature={farenheight}/>
            <BoilingVerdict celcius={parseFloat(temperature)}/>
        </div>
    }
}

function BoilingVerdict({celcius}){
    let message =  celcius < 100  ? "L'EAU NE BOUT PAS":"L\'EAU BOUE FORTEMENT"
    return(
        <div className="text-center">
            <h1 style={{textAlign:"center"}}>CONVERTISSEUR EN CELCIUS</h1>
            <div className={celcius < 100 ? "alert alert-danger":"alert alert-success"}>{message}</div>
        </div>
    )
}

ReactDOM.render(<Calculator/>,document.querySelector("#app"));