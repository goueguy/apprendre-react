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
            start:props.start
        }
        this.timer = null;
    }
    componentDidMount(){
        this.timer = window.setInterval(this.plusUn.bind(this),1000);
    }
    componentWillUnmount(){
        window.clearInterval(this.timer);
    }
    plusUn(){
        this.setState((state,props)=>{
            return {start:state.start+props.steps}
        })
    }
    render(){
        return <div>
            <p>COUNT:{this.state.start}</p>
           
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
    Increment(){
        this.setState((state,props)=>{
            return {n:state.n + 1}
        })
    }
    render(){
        return <React.Fragment>
             <p>DATA STEP:{this.state.n}</p> <button type="button" onClick={Increment}>INCRÉMENTER</button>
        </React.Fragment>
    }
} 
Increment.defaultProps = {
    step:0,
    start:0
}
function Home(){
    return <div>
        <Welcome name="GOUEGUY"/>
        <Welcome name="LOBA YVAN"/>
        <Clock/>
        <Increment start={10} steps={5}/>
        <Increment start={50} steps={10}/>
        <ManuelIncrementer/>
    </div>
}

ReactDOM.render(<Home/>,document.querySelector("#app"))