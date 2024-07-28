import Footer from '@/Utils/Footer/Footer'
import Header from '@/Utils/Header/Header'
import Map from '@/Utils/Map/Map'
import Navbar from '@/Utils/Navbar/Navbar'
import PageContainer from '@/Utils/PageContainer/PageContainer'
import Zayavka from '@/Utils/Zayavka/Zayavka'
import React from 'react'
import styles from './o-nas.module.css'

const index = () => {
  return (
    <div>
        <Navbar />
        <Header />

        <PageContainer>
            <div className={styles.onas}>
                <div><h2>О нас</h2></div>

                <div>
                    <div style={{display:'flex'}}>
                        <div className={styles.img}><img src='/images/onas.jpg' alt='none' /></div>

                        <div className={styles.imgtext}>
                            <div>Компания имеет большой опыт работы в сфере изготовления, поставки, дальнейшего монтажа грузоподъемного оборудования.</div>
                            <div>Для ускорения, облегчения, повышения продуктивности технологического производственного процесса на современном производстве необходимо установить мостовой или козловой кран.</div>
                            <div>Мы поможем вам подобрать кран с учетом технических особенностей вашего объекта по выгодной цене, с использованием комплектующих собственного производства, Болгарии и Китая. Обеспечим оперативную доставку крана на объект и обеспечим его дальнейшую бесперебойную эксплуатацию.</div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>

        <Zayavka />
        <Map />
        <Footer />
    </div>
  )
}

export default index