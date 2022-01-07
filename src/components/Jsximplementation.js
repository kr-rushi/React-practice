import React from 'react'
const Jsximplementation = () => {
  //WITH JSX
  
    // return(
    //     <div class='withJsx' id='withJsx'>
    //         <h1>Hello Rushi</h1>
    //     </div>
    // )

    return(

//WITHOUT JSX

        //React.createElement('div',null,'Hello Rushi')
    //React.createElement('div',null,React.createElement('h1',null,'Hello Rushiii'))
    React.createElement('div',{ id : 'withoutJsx', className : 'withoutJsx'},React.createElement('h1',null,'Hello Rushiii'))  
    )
}
export default Jsximplementation