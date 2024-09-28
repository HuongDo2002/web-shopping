import Home from '../component/pages/Home'
import Contact from '../component/pages/Contact'
import About from '../component/pages/About'
import Products from '../component/pages/Products'
import Product from '../component/pages/Product'
import Cart from '../component/pages/Cart'

export const routes = [
    {path:'/', compronent:Home},
    {path:'/contact', compronent:Contact},
    {path:'/about', compronent:About},
    {path:'/products', compronent:Products},
    {path:'/products/:id', compronent:Product},
    {path:'/cart', compronent:Cart},

]