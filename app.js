

function Field({name,value,onChange,children}){
    return <div className="form-group">
        <label htmlFor={name} style={{textTransform:"capitalize"}}>{children}</label>
        <input type="text" name={name} id={name} value={value} onChange={onChange} className="form-control" />
    </div>
}
function Checkbox({name,value,onChange,children}){
    return <div className="form-check">
        <input type="checkbox" name={name} id={name} checked={value} onChange={onChange} className="form-check-input" />
        <label className="form-check-label" htmlFor={name} style={{textTransform:"capitalize"}}>{children}</label>
    </div>
}
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nom:"",
            prenom:"",
            email:"",
            pays:"",
            newsletter:false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const target = e.target;
        const value = target.type ==='checkbox' ? target.checked:target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        
        const data = JSON.stringify(this.state);

        console.log(data);
    }
    render(){
        {
            console.log(this.state.email);
        }
        return<form onSubmit={this.handleSubmit} className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénoms</Field>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>Abonnez-vous à la Newsletter ?</Checkbox>
                </div>
                
            </div>
            <div style={{marginTop:"15px",marginBottom:"15px"}}>
                <button className="btn btn-primary">ENVOYER</button>
            </div>
            {
                JSON.stringify(this.state)
            }
        </form>
    }
}
ReactDOM.render(<Home/>,document.querySelector("#app"))