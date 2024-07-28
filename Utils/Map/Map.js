import React from 'react'
import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.map}>
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.8757492324635!2d69.28245452190879!3d41.336016750359136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad1c948c5c9%3A0xd26f57914bcadadd!2sO%CA%BBzbekiston%20milliy%20banki!5e0!3m2!1suz!2s!4v1722177292514!5m2!1suz!2s" 
                // width={600}
                // height={450} 
                style={{border:'none'}} 
                allowFullScreen={""}
                
                // loading="lazy" 
                referrerPolicy='no-referrer-when-downgrade'
                // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
  )
}

export default Map