import React from 'react'
import { ethereumLogo } from '../assets'
import styles from '../styles'




function Loader( { title } ) {
  return (
    <div className={styles.loader}>

        <img src={ethereumLogo} alt="ethereum logo"
        className={styles.loaderImg}
        />

<p className={styles.loaderText}>
    {title}
</p>
    </div>
  )
}

export default Loader