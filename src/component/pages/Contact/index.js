import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.scss'
import classNames from 'classnames/bind';
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import Button from '../../Layout/Button';
    

const cx = classNames.bind(styles)


const Contact = ()=>{
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('contact')}>
                    <h2>Contact Us</h2>
                    <span className={cx('intro')}>
                        Any question or remarks? Just write us a message!
                    </span>
                </div>
                <div className={cx('contact-frame')}>
                    <div className={cx('contact-frame1')}>                    
                        <h3 className={cx('title')}>Contact Information</h3>
                        <p className={cx('title-text')}>Say something to start a live chat!</p>
                        <p className={cx('text-frame1')}>
                            <FontAwesomeIcon className={cx('style-icon')} icon={faPhone}/>
                            +84 336 798 914
                        </p>
                        <p className={cx('text-frame1')}>
                            <FontAwesomeIcon className={cx('style-icon')} icon={faEnvelope}/>
                            20521380@gm.uit.edu.vn
                        </p>
                        <p className={cx('text-frame1')}>
                            <FontAwesomeIcon className={cx('style-icon')} icon={faLocationDot}/>
                            123, Vinh Cuu, Dong Nai, Viet Nam
                        </p>
                    </div>
                    <div className={cx('contact-frame2')}>
                        <div className={cx('contact-infor')}>
                            <div className={cx('contact-infor-col1')}>
                                <p className={cx('info')}>First Name</p>
                                <input className={cx('input-infor')}></input>
                                <p className={cx('info')}>Email</p>
                                <input className={cx('input-infor')}></input>
                                <p className={cx('info')}>Message</p>
                            </div>
                            <div className={cx('contact-infor-col2')}>
                                <p className={cx('info')}>Last Name</p>
                                <input className={cx('input-infor')}></input>
                                <p className={cx('info')}>Phone Number</p>
                                <input className={cx('input-infor')}></input>
                            </div>
                        </div>
                        <input className={cx('input-message')} placeholder='Write your message'></input>
                        <Button large>Send Message</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;