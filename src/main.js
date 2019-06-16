import React from 'react';



function Main({cAction, item}) {


    return (
        <React.Fragment>
            <button onClick = {cAction} className = 'clickyBtn' value = {item}> <img className = 'clickyImg' src = {item} alt = {item} /> </button>
        </React.Fragment>
       
    )

}

export default Main;