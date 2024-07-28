import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <div className='container'>
                    <div className='text-white' style={{marginBottom:'25px'}}><h2>ПРОИЗВОДСТВО, МОНТАЖ, НАЛАДКА ПРОФЕССИОНАЛЬНОГО ПОДЪЕМНО-ТРАНСПОРТНОГО И ГРУЗОПОДЪЕМНОГО ОБОРУДОВАНИЯ И ЕГО ЗАПАСНЫЙ ЧАСТЕЙ</h2></div>
                    <div className='text-white'><h2>ПОСТАВКА, МОНТАЖ, ДЕМОНТАЖ, РЕМОНТ ГРУЗОПОДЪЕМНЫХ МЕХАНИЗМОВ</h2></div>
                </div>
            </div>
        </div>
    )
}


export default Header