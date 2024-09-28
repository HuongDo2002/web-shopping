import classNames from "classnames/bind";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/action";


import styles from './Products.module.scss'
import Button from '../../Layout/Button';
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)



const Products = ()=>{
    const [product, setProduct] = useState([]);
    const [filter, setFilter] = useState(product);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    let componentMounted = true;
  
    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted) {
          setProduct(await response.clone().json());
          setFilter(await response.json());
        }
  
        return () => {
         // eslint-disable-next-line
          componentMounted = false;
        };
      };
      getProducts();;
    }, []);

    const filterData = (cate)=>{
        const filteredData = product.filter(item => item.category === cate);
        setFilter(filteredData)
    }

    const ShowProducts = ()=>{
        return (
            <>
            <h1 className={cx('title')}>Latest Products</h1>
            <div className={cx('nav-button')}>
                <Button btnFilter onClick={()=>setFilter(product)}>All</Button>
                <Button btnFilter onClick={()=>filterData("men's clothing")}>Men's Clothing</Button>
                <Button btnFilter onClick={()=>filterData("women's clothing")}>Women's Clothing</Button>
                <Button btnFilter onClick={()=>filterData("jewelery")}>Jewelery</Button>
                <Button btnFilter onClick={()=>filterData("electronics")}>Electronic</Button>
            </div>
            <div className={cx('wrapper')}>
                {filter.map((product)=>{
                return(
                    <Link key={product.id} className={cx('link')} to={`/products/${product.id}`}>
                    <div  className={cx('container')}>
                        <img className={cx('img')} src={product.image} alt=''/>
                        <div >{product.title.substring(0,16)}...</div>
                        <div className={cx('content')}>
                            <div>
                            <div className={cx('rate')}>
                                <div>
                                    {product.rating.rate}
                                    <FontAwesomeIcon className={cx('start')} icon={faStar} />
                                </div>
                                <div >({product.rating.count})</div>
                            </div>
                            <div >${product.price}</div>
                        </div>
                        <FontAwesomeIcon className={cx('add-product')} icon={faCirclePlus} onClick={(e)=>{e.preventDefault();addProduct(product)}} />  
                        </div>
                    </div>
                    </Link>
                )
            })}     
            </div>
            </>
        )
    }
    return (
        <div className="products">
            <ShowProducts/>
        </div>
    )
}

export default Products;