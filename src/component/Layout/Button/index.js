import classNames from "classnames/bind"
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({children,onClick,large, cart, btnFilter}){
    let Comp = 'button'

    const props = {
        onClick,
    }
    const classes = cx('wrapper',{
        large,
        cart,
        btnFilter

    })

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button;