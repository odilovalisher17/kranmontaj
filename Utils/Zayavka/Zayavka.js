import React from 'react'
import styles from './Zayavka.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobile } from '@fortawesome/free-solid-svg-icons';

const Zayavka = () => {
  return (
    <div className={styles.zayavka}>
        <div style={{background:"rgba(0,0,0,0.6)"}}>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={8}>
                        <div className={styles.left}>
                            <div className={styles.leftheader}>   
                                <div className={styles.yellow} style={{marginBottom:'10px'}}>ПОЧЕМУ МЫ</div>
                                <div className={styles.white} style={{marginBottom:'25px'}}>ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ ИМЕННО К НАМ</div>
                            </div>

                            <Row>
                                <Col xs={12} sm={6} md={6} lg={12} style={{marginBottom:"20px"}}>
                                    <Row className={styles.leftoption}>
                                        <Col xs={12} sm={3} md={3} lg={1}>
                                            <div className={styles.round}>
                                                01
                                            </div>
                                        </Col>

                                        <Col xs={12} sm={9} md={9} lg={11}>
                                            <div className={styles.yellow}>КЛИЕНТСКИЙ СЕРВИС</div>
                                            <div className={styles.grey}>Профессиональные и опытные мастера</div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} sm={6} md={6} lg={12}>
                                    <Row className={styles.leftoption}>
                                        <Col xs={12} sm={3} md={3} lg={1}>
                                            <div className={styles.round}>
                                                02
                                            </div>
                                        </Col>

                                        <Col xs={12} sm={9} md={9} lg={11}>
                                            <div className={styles.yellow}>ДОСТАВКА</div>
                                            <div className={styles.grey}>Гарантируем соблюдение сроков, прописанных в договоре</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={12} lg={4}>
                        <div className={styles.form}>
                            <div className={styles.bwhite} style={{marginBottom:'5px'}}>ПОЯВИЛИСЬ ВОПРОСЫ?ОСТАВЬТЕ ЗАЯВКУ!</div>
                            <div className={styles.white} style={{marginBottom:'40px'}}>И мы свяжемся с Вами для уточнения деталей</div>

                            <div style={{marginBottom:'5px', position:'relative'}}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <input type='text' placeholder='* Ваше имя: ' />
                            </div>

                            <div style={{ marginBottom:"25px" ,position:'relative'}}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon={faMobile} />
                                </div>
                                <input type='text' placeholder='* Номер телефона: ' />
                            </div>

                            <div className={styles.btn}>
                                <button>ОТПРАВИТЬ</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Zayavka