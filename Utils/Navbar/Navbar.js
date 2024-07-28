import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {Row, Col, Container} from 'react-bootstrap'
import Link from 'next/link'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
    <div 
        className={styles.toggle}
        style={{
            visibility: toggle ? 'visible' : 'hidden',
            
        }}>
        <div className={styles.togglebody}
            style={{
                transform: toggle ? 'translateX(0px)' : 'translateX(-500px)'
            }}>
            <div className={styles.toggleoptions} >
                <div className={styles.toggleoption}>
                    <Link href={'/'}>Главная</Link>
                    <Link href={'/0-nas'}>О нас</Link>
                    <Link href={'/uslugi'}>Услуги</Link>
                    <Link href={'/otzvy-o-nas'}>Наши работы и отзывы о нас</Link>
                    <Link href={'/kontakty'}>Контакты</Link>
                </div>

                <div className={styles.toggleemail}>
                    <div className={`text-bold`}>Email:</div>
                    <div><a href='mailto:'>kranmontajservis@mail.ru</a></div>
                    <div><a href='mailto:'>kranmontajservis@mail.ru</a></div>
                    <div><a href='mailto:'>kranmontajservis@mail.ru</a></div>
                </div>

                <div className={styles.togglegrafik}>
                    <div className={`text-bold`}>График работы:</div>
                    <div style={{color:'#130814'}}>С 9:00 до 18:00 (Пн-Сб)</div>
                </div>

                <div className={styles.toggleadres}>
                    <div className={`text-bold`}>Адрес:</div>
                    <div style={{color:'#130814', paddingRight:'20px'}}>г. Ташкент, Сергелийский район, улица Янги Сергели, 72 дом</div>
                </div>
            </div>

            <div onClick={()=>setToggle(false)}>
                <div className={styles.togglex}>
                    <img src='/images/x.png' alt='not found' />
                </div>
            </div>
        </div>

        <div className={styles.togglecontainer} onClick={()=>setToggle(false)}></div>
    </div>


    <div className={styles.toptoggle}>
        <div 
            className={styles.togglebtn}
            onClick={()=>setToggle(true)}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className={styles.btn}>
            <a>сделать заказ</a>
        </div>
    </div>

    <div className={`${styles.navbar}`}>
        <div className='container'>
            <div className={`${styles.header}`}>
                <Row>
                    <Col 
                        sm={12} md={12} lg={3} xl={3} 
                        style={{display:'grid', alignItems:"center"}}>
                        <div className={`${styles.logo}`}>
                            <img
                            src={'/images/logo.png'}
                            alt='Not Found!'
                            />
                        </div>
                    </Col>
                    
                    <Col sm={12} md={12} lg={9} xl={9}>
                        <div className={`${styles.headerleft}`}>
                            <div className={`${styles.firstcol}`}>
                                <div className={`${styles.emailcontainer}`}>
                                    <div style={{marginRight:'10px'}} className='text-white text-bold'>Email:</div>
                                    <div style={{lineHeight:'1.3'}}>
                                        <div>
                                            <a className='text-white font-16' href='mailto:recipient@example.com'>
                                                kranmontajservis@mail.ru
                                            </a>
                                        </div>
                                        <div>
                                            <a className='text-white font-16' href='mailto:recipient@example.com'>
                                                kranmontajservis@mail.ru
                                            </a>
                                        </div>
                                        <div>
                                            <a className='text-white font-16' href='mailto:recipient@example.com'>
                                                kranmontajservis@mail.ru
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.phonecontainer}`}>
                                    <div className={styles.phonecard}>
                                        <div style={{marginRight:'10px'}} className='text-white text-bold'>Тел. сот.:</div>
                                        <div>
                                            <div>
                                                <a className='text-white font-16' href="tel:+998909601500" style={{marginRight:'5px'}}>
                                                    +998909601500,
                                                </a>
                                                <a className='text-white font-16' href="tel:+998909601500">
                                                    +998909601500
                                                </a>
                                            </div>

                                            <div>
                                                <a className='text-white font-16' href="tel:+998909601500" style={{marginRight:'5px'}}>
                                                    +998909601500,
                                                </a>
                                                <a className='text-white font-16' href="tel:+998909601500">
                                                    +998909601500
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.phonecard}>
                                        <div style={{marginRight:'10px'}} className='text-white text-bold'>Тел. раб.:</div>
                                        <div>
                                            <a className='text-white font-16' href="tel:+998909601500" style={{marginRight:'5px'}}>
                                                +998909601500
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.secondcol}`}>
                                <div className={`${styles.address}`}>
                                    <div className='text-bold' style={{marginRight:'10px', minHeight:'60px'}}>Адрес:</div>
                                    <div>г. Ташкент, Сергелийский район, улица Янги Сергели, 72 дом</div>
                                </div>

                                <div className={`${styles.grafik}`}>
                                    <div className='text-bold' style={{marginRight:'10px'}}>График работы:</div>
                                    <div>С 9:00 до 18:00 (Пн-Сб)</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>

    <div className={styles.options}>
        <Container>
            <div className={styles.optionscard}>
                <div>
                    <div>
                        <Link href={'/'} className={styles.option}>Главная</Link>
                        <Link href={'/o-nas'} className={styles.option}>О нас</Link>
                        <Link href={'/uslugi'} className={styles.option}>Услуги</Link>
                        <Link href={'/otzvy-o-nas'} className={styles.option}>Наши работы и отзывы о нас</Link>
                        <Link href={'/kontakty'} className={styles.option}>Контакты</Link>
                    </div>
                </div>
                
                <div className={styles.btn}>
                    <a>сделать заказ</a>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Navbar