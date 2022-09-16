import React from 'react'
import styles from './InputControl.module.css'

const InputControl = (prop) => {
  return (
    <div className={styles.container}>
    {prop.label && <label >{prop.label}</label>}
    <input type="text" {...prop}/>
        

    </div>
  )
}

export default InputControl;