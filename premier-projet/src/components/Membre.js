import React, { Fragment } from 'react'

const Membre = ({ nom, age, children, cacherNom, handleChange, handleChangeAge }) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'yellow' : 'purple',
                color: age < 10 ? 'black' : 'white'
            }}>
                {nom.toUpperCase()} : {age}
            </h2>

            <input value={nom} onChange=
                {handleChange} type='text' />
            <input value={age} onChange=
                {handleChangeAge} type='text' />

            <button onClick={cacherNom}>X</button>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}


export default Membre