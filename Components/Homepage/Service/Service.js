import React from 'react'
import styles from './Service.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Service = () => {
  return (
    <div className={styles.service}>
        <Container>
            <div>
                <div className={styles.header}>ООО "KRAN MONTAJ SERVIS"</div>
                <div className={styles.headertext}>ООО "KRAN MONTAJ SERVIS" как юридическое лицо существует с 2012 года, но, однако опыт наших специалистов насчитывает около 16 лет. Наша компания имеет большой опыт работы в сфере монтажа, демонтажа, ремонта грузоподъемного оборудования. Собираетесь установить мостовой или козловой кран, электротельфер, для того чтобы упростить, ускорить, облегчить технологический производственный процесс? Не теряйте время, звоните нам!</div>

                <div>
                    <Row>
                        <Col sm={12} md={12} lg={4}>
                            <div className={styles.serviceimg}>
                                <img src='/images/service.jpg'  alt='None'/>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={8}>
                            <div>
                                <div className={styles.textred}>Мы предлагаем следующие услуги:</div>
                                <div className={styles.list}>
                                    <ul>
                                        <li>Монтаж и демонтаж мостовых (однобалочных, двухбалочных, опорных, подвесных), козловых кранов</li>
                                        <li>Ремонт и демонтаж мостовых, козловых кранов</li>
                                        <li>Техническое и сервисное обслуживание мостовых, козловых кранов</li>
                                        <li>Поставка электротельферов, ручных талей, троллейных и кабельных соединений и различных запасных частей к крановому оборудованию</li>
                                        <li>Монтаж и демонтаж мостовых (однобалочных, двухбалочных, опорных, подвесных), козловых кранов</li>
                                        <li>Ремонт и демонтаж мостовых, козловых кранов</li>
                                        <li>Техническое и сервисное обслуживание мостовых, козловых кранов</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Service