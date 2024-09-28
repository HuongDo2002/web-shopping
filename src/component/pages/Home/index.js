import styles from './Home.module.scss'
import classNames from 'classnames/bind';

import images from '../../assets/img';
import Products from '../Products';


const cx = classNames.bind(styles)

const Home = () => {
    return (
        <div >
            <div className={cx('banner')}>
                <div className={cx('banner-content')}>
                    <h1 className={cx('banner-title')}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <span className={cx('banner-text')}>Browse through our diverse range of meticulously crafted garments, 
                    designed to bring out your individuality and cater to your sense of style.
                    </span>
                    <button className={cx('banner-btn')}>Shop Now</button>
                </div>
            
            </div>
            <div className={cx('nav-brand')}>
                <img className={cx('img-brand')} src={images.versace} alt=''/>
                <img className={cx('img-brand')} src={images.zara} alt=''/>
                <img className={cx('img-brand')} src={images.gucci} alt=''/>
                <img className={cx('img-brand')} src={images.prada} alt=''/>
                <img className={cx('img-brand')} src={images.calvin} alt=''/>
            </div>
            <Products />
        </div>
    )  
}

export default Home;