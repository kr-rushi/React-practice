import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
        console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }


    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    update = () =>{
        this.setState({name:'Rushi'})
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
            <LifeCycleB/> 
        <div>LifeCycle A</div>
        <button onClick={this.update}>Check</button>
         </div>
        )
    }
}

export default LifeCycleA
