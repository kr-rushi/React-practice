import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>Kuch to gadbaad hai daya</h1>
        }
        return this.props.children
    }
}

