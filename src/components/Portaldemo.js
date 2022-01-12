import React from 'react'
import  ReactDOM  from 'react-dom'
function Portaldemo() {
    return ReactDOM.createPortal(
        <div>
            Portal Demo
        </div>,
        document.getElementById('portal-element')
    )
}

export default Portaldemo
