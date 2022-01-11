import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
        this.check=this.check.bind(this)
        this.change=this.change.bind(this)
    }
    check(){
       // console.log(this.state.isLogged)
        // this.state.isLogged ?
        //     alert(`hii ${this.state.isLogged}`) :
        //     alert(`hi ${this.state.isLogged}`)
        if(this.state.isLogged){
            alert(`hii ${this.state.isLogged}`) 
        }
        else{
            alert(`hiiiii ${this.state.isLogged}`) 
        }
    }
    change(){
        
        if(this.state.isLogged){
        this.setState({isLogged:false})
    }
        else{
            this.setState({isLogged:true})
        }  
        // console.log(this.state.isLogged)      
}
    render() {
        return(
            <div>
        <button onClick={this.check}>check</button>   
        <button onClick={this.change}>change</button>
        </div>)
        
        // return this.state.isLogged && <div>if</div>




        // return(
        //     this.state.isLogged ?
        //     <div>if</div> :
        //     <div>else</div>
        // )



        // let Message
        // if(this.state.isLogged){
        //         Message=<div>if</div>
        // }
        // else{
        //     Message=<div>else</div>
        // }
        // return Message




        // if(this.state.isLogged){
        // return (
        //     <div>
        //         if
        //     </div>
        // )}
        // else{
        //     return(
        //         <div>
        //             else
        //         </div>
        //     )
        // }

 
    }

}

export default Conditional
