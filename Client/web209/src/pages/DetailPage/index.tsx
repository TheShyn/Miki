import { useAppDispatch, useAppSelector } from '@/app/hooks'
import Breadcum from '@/components/Breadcum'
import Page from '@/components/Page'
import ProductItems from '@/components/ProductItems'
import { getAllProducts, getProduct, getProduct1, getProducts } from '@/instance/Products'
import MoreDetail from '@/sections/Product/MoreDetail'
import ProductDetail from '@/sections/Product/ProductDetail'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams();
  const data = useAppSelector((state:any) => state.products)
  const dispatch = useAppDispatch()  
  // const [product, setProduct] = useState({})
  const [relateProducts, setRelateProducts] = useState([])
  const location = useLocation()
  const { pathname } = location;


  useEffect(()=>{
    window.scrollTo({ top: 0 });
    dispatch(getProduct1(`${id}`))
    const data = getProduct(id)
    data.then((res)=>{
      const relateProduct = getProducts()
      relateProduct.then((data)=>{
        const relate= data.data.data
        setRelateProducts(relate.filter((item:any)=>item.slug !== id));
      })
    })

    

    
  },[pathname])
  return (
    <Page title='Tên sản phẩm' >

      <div className="app ">
        <div className="container m-0">
          <Breadcum params={[
            {
              href: '/',
              label: 'Trang chủ'
            },
            {
              href: '/product/allProduct',
              label: 'Tất cả sản phẩm '
            }
          ]} />
          <ProductDetail product={data.product} />
          <MoreDetail id={data.product._id}/>
          {/* <MoreDetail product={product} feedbacks={feedbacks} /> */}
          <div className=" text-[30px] text-2nd-text font-bold  mt-[60px]">
            Có thể bạn cũng thích
          </div>
          <ProductItems data={relateProducts} />
        </div>
      </div>
    </Page>
  )
}
