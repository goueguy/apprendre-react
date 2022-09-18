
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nom:"GOUEGUY",
            commentaire:"Commentaire ici...",
            pays:["CI","GABON"],
            agree:true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCommentaire = this.handleChangeCommentaire.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.handleChangeAccord = this.handleChangeAccord.bind(this);
    }
    handleChangeAccord(){
        this.setState({
            agree:!this.state.agree
        })
    }
    handleChange(e){
        this.setState({
            nom:e.target.value,
        })
    }
    handleChangeCommentaire(e){
        this.setState({
            commentaire:e.target.value,
        })
    }
    selectCountry(e){
        this.setState({
            pays:[...e.target.selectedOptions].map(item=>item.value)
        })
    }
    render(){
        
        return<div>
            {
                console.log(this.state.agree)
            }
                <label htmlFor="nom">Mon nom</label>
                <input type="text" name="nom" id="nom" value={this.state.nom} onChange={this.handleChange}/>
                <textarea name="commentaire" value={this.state.commentaire} onChange={this.handleChangeCommentaire} id="commentaire" cols="30" rows="10"></textarea>
                <select name="pays" id="pays" value={this.state.pays} onChange={this.selectCountry} multiple>
                    <option value="">---CHOISISSEZ VOTRE PAYS---</option>
                    <option value="CI">COTE D'IVOIRE</option>
                    <option value="GABON">GABON</option>
                    <option value="TOGO">TOGO</option>
                    <option value="BENIN">BENIN</option>
                </select>
                <input type="checkbox" name="accord" id="accord" checked={this.state.agree} onChange={this.handleChangeAccord}/> D'ACCORD
                {
                    this.state.agree ? (
                        <div>
                            JESUS EST SEIGNEUR ET VAINQUEUR
                        </div>
                    ):(
                        <div></div>
                    )
                }
            </div>
    }
}
ReactDOM.render(<Home/>,document.querySelector("#app"))