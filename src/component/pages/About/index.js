import styles from './About.module.scss';
import classNames from 'classnames/bind';
import image from '../../assets/img/bgAbout.png'
import image2 from '../../assets/img/pagebg2.png'
import avatar from '../../assets/img/image.png'



const cx = classNames.bind(styles)

const About = ()=>{
    return (
        <div>
            <div className={cx('container')}>
                <h1 className={cx('title')}>About Us</h1>
                <img className={cx('img-bg')} src={image} alt=''></img>
                <div className={cx('about-us')}>
                    <div className={cx('about-us-col')}>
                        <h2 className={cx('sub-title')}>Who we Are ?</h2>
                        <p>
                        We are a dynamic team dedicated to delivering high-quality fashion
                        products and serving as a trusted companion for customers on their style journey
                        </p>
                    </div>
                    <div className={cx('about-us-col')}>
                        <h2 className={cx('sub-title')}>Who We Do ?</h2>
                        <p>
                        On our e-commerce website, we offer both fashion and electronic products. 
                        Our goal is to create a convenient and diverse shopping experience for our customers.
                        </p>
                    </div>
                    <div className={cx('about-us-col')}>
                        <h2 className={cx('sub-title')}>Why Choose Us ?</h2>
                        <p>
                        We always listen and respond to the needs of our customers 
                        and are ready to accompany them on their journey to find their own style.
                        </p>
                    </div>
                </div>
                <div className={cx('more')}>
                    <div className={cx('more-col')}>
                        <h3>“Going out after work? Take your butane curling iron with you to the office, 
                            heat it up, style your hair before you leave the office and you won’t have 
                            to make a trip back home.”
                        </h3>
                        <h3 className={cx('name')}>
                            <img src={avatar} className={cx('avatar')} alt=''/>
                            CAO HAI HA - Fashion Designer KKrist
                        </h3>
                    </div>
                    <img className={cx('bg-more')} src={image2} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default About;