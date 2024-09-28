import classNames from "classnames/bind";
import styles from './Product.module.scss';
import { useState,useEffect } from "react";
import { useParams } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import {addCart}  from '../../../redux/action';
import Button from "../../Layout/Button";

const cx = classNames.bind(styles)

const Product = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
      const getProduct = async () => {
        if(id){
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
        }
      }
      getProduct();
  }, [id]);

  console.log(product)
    const ShowProduct = () => {
      return(
          <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('col1')}>
                    <img src={product.image} alt='' height="400px" width="400px" ></img>
                </div>
                <div className={cx('col2')}>
                    <span className={cx('category')}>{product.category}</span>
                    <h2 className={cx('title')}>{product.title}</h2>
                    <span className={cx('rating')}>
                        Rating {product.rating?.rate}
                        <FontAwesomeIcon className={cx('icon-star')} 
                        icon={faStar}/>({product.rating?.count})
                    </span>
                    <p className={cx('price')}>${product.price}</p>
                    <p className={cx('description')}>{product.description}</p>
                    <Button cart onClick={()=>addProduct(product)}>Add to cart</Button>
                    <Link to='/cart'>
                      <Button cart>Go to cart</Button>
                    </Link>
                </div>
            </div>
          </div>
      )
  }

    return(
        <div className={cx('wrapper')}>
            <ShowProduct />
        </div>
    )
}

export default Product;