import React from 'react'
import ctaStyles from './cta.module.scss'

const Cta = (props) => {
    return (
        <div className={ctaStyles.cta}>
            <div className={ctaStyles.container}>
            {props.children}
            </div>
            
        </div>
    )
}

export default Cta