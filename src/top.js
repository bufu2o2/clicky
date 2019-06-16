import React from 'react';


function Top ({cScore, tScore, answer}) {


    return (
        <div className = 'topBar'>
            <div className = 'left'>
                <a href = '/'><h3>Home</h3></a>
            </div>
            <div className = 'middle'>
                <h3>
                {cScore} : Your Score | Top Score : {tScore}
                </h3>
            </div>
            <div className = 'right'>
                <h5 className = {(answer === 'You Lose') ? 'redAnswer' : 'regAnswer'}>
                    {answer}
                </h5>
            </div>


        </div>
    
    )

}

export default Top;