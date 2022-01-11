import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

export class ComponentParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rushi'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'Rushi'})
    },2000)
    }
    
    render() {
        console.log('parent component render')
        return (
            <div>
               <MemoComp name={this.state.name}/>
                parent component
                {/* <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ComponentParent
