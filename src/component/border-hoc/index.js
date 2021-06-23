import React from 'react'

const BorderHoc = (color='red' ) => (Comp) => (props) => {
    console.log(`borderRunning`)
    const style = {
        border: `1px solid ${color}`,
        padding: 10,
    }
    return (
        <div style={style}>
            <Comp
               {...props} 
            />
        </div>
    )
}

export default BorderHoc;