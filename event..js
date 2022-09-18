function WelcomeFunc({name,children}){
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component{
    render(){
        const {name,children}= this.props;
        //console.log(this.props);
        return <div>
            <h1>Bonjour {name}</h1>
            <p>{children}</p>
        </div>;
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        this.timer = null;
    }
    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this),1000);
    }
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }
    tick(){
        this.setState({date: new Date()})
    }
    render(){
        return <p>
            {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </p>
    }
}

class Increment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            start:props.start, timer:null
        }
        this.toggle =  this.toggle.bind(this);
        this.reset =  this.reset.bind(this);
    }
    componentDidMount(){
        this.play();
    }
    componentWillUnmount(){
        window.clearInterval(this.state.timer);
    }
    plusUn(){
        this.setState((state,props)=>{
            return {start:state.start+props.steps}
        })
    }
    pause(){
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null
        })
    }
    play(){
        window.clearInterval(this.state.timer);
        this.setState({
            timer: window.setInterval(this.plusUn.bind(this),1000)
        })
    }
    reset(){
        this.pause();
        this.play();
        this.setState((state,props)=>{
            return {start:props.start}
        })
    }
    label(){
        return this.state.timer ? "PAUSE":"PLAY"
    }
    toggle(){
        return this.state.timer ? this.pause() : this.play();
    }
    render(){
        return <div>
            <p>TOTAL:{this.state.start}</p>
            {
                console.log(this.state.timer)
            }
            <button onClick={this.toggle}>{this.label()}</button>
            <button onClick={this.reset}>Réinitialiser</button>
        </div>
    }
}
class ManuelIncrementer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            n:0
        }
    }
    increment(e){
        this.setState((state,props)=>({n:state.n + 1}))
    }
    stopIncrement(){
        console.log("STOP...");
    }
    render(){
        return <React.Fragment>
            <p>DATA STEP:{this.state.n}</p> <button type="button" onClick={this.increment.bind(this)}>INCRÉMENTER</button>
        </React.Fragment>
    }
} 

ManuelIncrementer.defaultProps = {
    step:0,
    start:0
}

function Home(){
    return <div>
        <Welcome name="GOUEGUY"/>
        <Welcome name="NGUESSAN"/>
        <Clock/>
        <Increment start={0} steps={5}/>
        <Increment start={50} steps={10}/>
        <ManuelIncrementer/>
    </div>
}

ReactDOM.render(<Home/>,document.querySelector("#app"))