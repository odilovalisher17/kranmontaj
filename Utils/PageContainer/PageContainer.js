import React from 'react'
import styles from './PageContainer.module.css'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const PageContainer = ({children}) => {
  return (
    <div className={styles.pagecontainer}>
        <Container>
            <div className={styles.pagebody}>
                <div className={styles.pagelinks}>
                    <ul>
                        <li><Link href={'/'}>Прайс-лист</Link></li>
                        <li><Link href={'/'}>Фотогалерея</Link></li>
                        <li><Link href={'/'}>НАШИ ПАРТНЕРЫ</Link></li>
                        <li><Link href={'/'}>Статьи</Link></li>
                    </ul>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default PageContainer