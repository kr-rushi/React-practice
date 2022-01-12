import React from 'react'

function ErrorHero({heroName}) {
    if(heroName == 'joker'){
        throw new Error('ara bhai joker che')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}


export default ErrorHero
