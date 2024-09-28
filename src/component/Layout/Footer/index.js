import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import images from '../../assets/img';



const cx = classNames.bind(styles)

const Footer = ()=>{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                   <span className={cx('banner-text')}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
                <div className={cx('banner-btn')}>
                    <input className={cx('style-btn')} placeholder='Enter your email address'></input>
                    <button className={cx('style-btn')}>Subscribe to Newsletter</button> 
                </div>
            </div>
        <div className={cx('container')}>
            <div className={cx('content')}>
                <img className={cx('logo')} src={images.logo} alt=''/>
             
                <span className={cx('text-span')}>
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                </span>
                <div className={cx('btn')}>
                    <Link className={cx('btn-icon')}><img className={cx('icon')} src={images.iconTwitter} alt=''/></Link>
                    <Link className={cx('btn-icon')}><img className={cx('icon')} src={images.iconGithub} alt=''/></Link>
                    <Link className={cx('btn-icon')}><img className={cx('icon')} src={images.iconInstagram} alt=''/></Link>
                    <Link className={cx('btn-icon')}><img className={cx('icon')} src={images.iconFb} alt=''/></Link>
                </div>
         
            </div>
            <div className={cx('help-menu')}>
                <ul className={cx('list-item')}>
                    <li className={cx('item-text-title')}>Company</li>
                    <li className={cx('item-text')}>About</li>
                    <li className={cx('item-text')}>Features</li>
                    <li className={cx('item-text')}>Works</li>
                    <li className={cx('item-text')}>Career</li>
                </ul>
            </div>
            <div className={cx('help-menu')}>
                <ul  className={cx('list-item')}>
                    <li className={cx('item-text-title')}>Help</li>
                    <li className={cx('item-text')}>Customer Support</li>
                    <li className={cx('item-text')}>Delivery Details</li>
                    <li className={cx('item-text')}>Terms & Conditions</li>
                    <li className={cx('item-text')}>Privacy Policy</li>
                </ul>
            </div>
            <div className={cx('help-menu')}>
                <ul  className={cx('list-item')}>
                    <li className={cx('item-text-title')}>FAQ</li>
                    <li className={cx('item-text')}>Account</li>
                    <li className={cx('item-text')}>Manage Deliveries</li>
                    <li className={cx('item-text')}>Orders</li>
                    <li className={cx('item-text')}>Payments</li>
                </ul>
            </div>
            <div className={cx('help-menu')}>
                <ul  className={cx('list-item')}>
                    <li className={cx('item-text-title')}>Resources</li>
                    <li className={cx('item-text')}>Free eBooks</li>
                    <li className={cx('item-text')}>Development Tutorial</li>
                    <li className={cx('item-text')}>How to - Blog</li>
                    <li className={cx('item-text')}>Youtube Playlist</li>
                </ul>
            </div>
        </div>
        <span className={cx('line')}></span>
        <div className={cx('end')}>
            <span className={cx('text-end')}>Shop.co © 2000-2023, All Rights Reserved</span>
            <div>
                <Link ><img src={images.cart1} alt=''></img></Link>
                <Link ><img src={images.cart2} alt=''></img></Link>
                <Link ><img src={images.cart3} alt=''></img></Link>
                <Link ><img src={images.cart4} alt=''></img></Link>
                <Link ><img src={images.cart5} alt=''></img></Link>
            </div>
        </div>
        </div>

    )
}

export default Footer;