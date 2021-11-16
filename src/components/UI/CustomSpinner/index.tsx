import React from 'react'
import styles from './spinner.module.scss'

export const CustomSpinner = () => {
  return (
    <div className={styles.spinnerWrap}>
      <div className={styles.spinner}>
        {Array.from({length: 4}).map((i, index) => (
          <div key={`${i}/${index}`} />
        ))}
      </div>
    </div>
  )
}
