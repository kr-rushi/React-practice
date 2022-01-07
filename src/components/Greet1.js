import react,{ Component } from 'react'

export class Greetq extends Component{
    render(){
        return (
            <div>
        <h1>Hello Rushi {this.props.name} {this.props.check}</h1>
        {this.props.children}
        </div>
        )
    }
}
//export default Greetq