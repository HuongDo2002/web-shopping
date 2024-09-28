import classNames from "classnames/bind";
import styles from './Layout.module.scss'

import Footer from "./Footer";
import Header from "./Header";

const cx = classNames.bind(styles)

const Layout = ({children})=>{
    return (
     <div className={cx('')}>
        <Header />
        <div className={cx('content')}>
            {children}
        </div>
        <Footer/>
     </div>
    )
}

export default Layout;