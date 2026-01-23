import React from 'react'
// import './normalcssfile.css'
import styles from './Button.module.css'
function Button() {
//   const style={
//     background: "lightgray",
//     padding:"20px"
//   }
  return (
    <div>
      {/* <button className='btn'>click me</button> */}
      {/* <button style={style}>inline css</button> */}
      <button className={styles.box}>module type css</button>
    </div>
  )
}

export default Button
