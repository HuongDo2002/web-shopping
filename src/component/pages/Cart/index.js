import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addCart, delCart } from '../../../redux/action';

import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import Button from '../../Layout/Button'

const cx = classNames.bind(styles)

const Cart = () =>{
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    return (
        <div className={cx('wrapper')}>
          {state.length === 0 && 
            <div className={cx('cart-item')}>Your Cart is Empty </div>
          }
          {state.map((item) => (
            <div key={item.id} className={cx('cart-item')}>
              <img className={cx('cart-item-img')} src={item.image} alt=''/>
              <div className={cx('cart-content')}>
                <h1 className={cx('cart-item-title')}>{item.title}</h1>
                <p>{item.qty} X ${item.price} = ${item.qty * item.price}</p>
                <Button cart onClick={() => {handleAdd(item)}}>+</Button>
                <Button cart onClick={() => {handleDel(item)}}>-</Button>
              </div>
            </div>
          ))}
        </div>
      )
}

export default Cart;
