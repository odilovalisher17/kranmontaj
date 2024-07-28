import React from 'react'
import styles from './Slider.module.css'
import Link from 'next/link'

const OneCard = ({href, img, header, text}) => {
  return (
    <Link href={href}>
        <div className={styles.onecard}>
            <div className={styles.onecardimg}>
                <img src={img} alt='none' />
            </div>

            <div className={styles.onecardbody}>
                <div className='text-white text-bold'>{header}</div>
                <div className='text-white'>----------------------------------</div>
                <div className='text-white'>{text}</div>
            </div>
        </div>
    </Link>
  )
}

export default OneCard