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

function Button({type,children}) {
    const className = "btn btn-"+type;
    return <button className={className}>{children}</button>
}
function PrimaryButton({children}){
    return <Button type="primary">{children}</Button>
}
function DangerButton({children}){
    return <Button type="danger">{children}</Button>
}
function Column2({left,right}){
    return <div className="row">
        <div className="col-lg-6">{left}</div>
        <div className="col-lg-6">{right}</div>
    </div>
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale:'c',//echelle par défaut (celcius)
            temperature:20
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCeilciusChange = this.handleCeilciusChange.bind(this);
        this.handleFarenHeightChange = this.handleFarenHeightChange.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }
    handleCeilciusChange(temperature){
        this.setState({
            scale:"c",
            temperature
        })
    }
    handleFarenHeightChange(temperature){
        this.setState({
            scale:"f",
            temperature
        })
    }
    tryConvert(temperature, conversionFunc){
        const value = parseFloat(temperature);
        if(Number.isNaN(value)){
            return "";
        }
        const output = Math.round((conversionFunc(value) * 100)/100).toString();
        return output;
    }
    
    render(){
        const { temperature,scale } = this.state;
        const celcius = scale==="c" ? temperature:this.tryConvert(temperature,ToCelcius);
        const farenheight = scale==="f" ? temperature:this.tryConvert(temperature,ToFarenheight);
        return <div>
            
            
            <BoilingVerdict celcius={celcius}/>
            <DangerButton>AJOUTER</DangerButton>
            <Column2 left={<TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleCeilciusChange}> right={<TemperatureInput scale="f" temperature={farenheight} onTemperatureChange={this.handleFarenHeightChange}/>}/>
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