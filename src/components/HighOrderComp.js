import React from "react";

const HighOrderComp = (OriginalComponent,counterNumber) =>{
    class HighOrder extends React.Component{
        
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        incrementCount=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+counterNumber}
            })
        }
    
        
        
        render(){
            return(
            <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
            )}
    }
    return HighOrder
}
export default HighOrderComp