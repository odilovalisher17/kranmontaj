import React from 'react'
import styles from './Footer.module.css'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.footerone}>
                <div className={styles.copyright}>
                    Copyright © 2024 <br />
                    ООО «KRAN MONTAJ SERVIS»
                </div>

                <div className={styles.links}>
                    <div><Link href={'/'}>Главная</Link></div>
                    <div><Link href={'/o-nas'}>О нас</Link></div>
                    <div><Link href={'/uslugi'}>Услуги</Link></div>
                    <div><Link href={'/otzvy-o-nas'}>Наши работы и отзывы о нас</Link></div>
                    <div><Link href={'/kontakty'}>Контакты</Link></div>
                </div>
            </div>
        </Container>

        <div className={styles.footertwo}>
            <Container>
                <div>
                    Powered by <br />
                    <a href='https://t.me/li2690'><i>Odilov Dev</i></a>
                </div>

                <div className={styles.brands}>
                    <div><a href='https://www.facebook.com/' style={{color:"rgb(135, 135, 255)"}}><FontAwesomeIcon icon={faFacebookF} /></a></div>
                    <div><a href='https://x.com/' style={{color:"#686868"}}><FontAwesomeIcon icon={faXTwitter} /></a></div>
                    <div><a href='https://t.me/' style={{color:""}}><FontAwesomeIcon icon={faTelegram} /></a></div>
                    <div><a href='https://www.instagram.com/' style={{color:"rgb(255, 131, 187) "}}><FontAwesomeIcon icon={faInstagram} /></a></div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Footer