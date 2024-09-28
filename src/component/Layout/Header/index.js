import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleUser,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";


import logo from '../../assets/img/logo.svg';

const cx = classNames.bind(styles)

const Header = ()=>{
    const state = useSelector((state)=> state.handleCart)

    const totalQty = state.reduce((qty,currentItem)=>{
        return qty + currentItem.qty
    },0)

    return (
         <div className={cx('wrapper')}>
            <div className={cx('header-title')}>
                <span>
                    Sign up and get 20% off to your first order. 
                    <Link className={cx('header-title-more')} to='/'>Sign Up Now</Link>
                    <FontAwesomeIcon className={cx('close-btn-title')} icon={faXmark} />
                </span>
            </div>
            <div className={cx('header-nav')}>
                <div className={cx('content')}>
                    <Link to='/'><img className={cx('logo')} src={logo} alt=''/></Link>
                    <div className={cx('wrapper-nav')}>
                        <ul className={cx('nav-list')}>
                            <Link to='/' className={cx('nav-item')}><li>Shop</li></Link>
                            <Link to='/products' className={cx('nav-item')}><li>Products</li></Link>
                            <Link to='/about' className={cx('nav-item')}><li>About</li></Link>
                            <Link to='/contact' className={cx('nav-item')}><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div className={cx('action')}>
                        <Link to='/cart'>
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faShoppingCart} />
                        </Link>
                        <span className={cx('qty-cart')} >({totalQty})</span>
                        <Link to='/'>
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faCircleUser} />
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
       

}

export default Header;