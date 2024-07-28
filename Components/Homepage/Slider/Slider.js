import React from 'react'
import styles from './Slider.module.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import OneCard from './OneCard'

const Slider = () => {
  return (
    <div className={styles.slider}>
        <div className={styles.slidercontainer}>
            <div className={styles.deskslider}>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider1.png'}
                            header={"Прайс"} />
                    </Col>

                    <Col sm={12} md={6} lg={4}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider2.png'} 
                            header={"УСЛУГИ"} />
                    </Col>

                    <Col sm={12} md={6} lg={4}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider3.jpg'} 
                            header={"О нас"} />
                    </Col>
                </Row>
            </div>

            <div className={styles.mobslider}>
                <Carousel controls={false}>
                    <Carousel.Item interval={2000}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider3.jpg'} 
                            header={"О нас"} />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider3.jpg'} 
                            header={"О нас"} />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <OneCard
                            href={'/prays'}
                            img={'/images/slider3.jpg'} 
                            header={"О нас"} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Slider