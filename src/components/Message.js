import react,{ Component } from "react";
class Message extends Component{

    constructor(){
        super()
            this.state={
                message:'Hello states'
        }
    }
change(){
    this.setState({message:'wow changed'})
}
    render(){
        return(
        <div>
            <h1>Hello state {this.state.message}</h1>
            <button onClick={()=> this.change()}>Change</button>
        </div>
        )
    }
}
export default Message