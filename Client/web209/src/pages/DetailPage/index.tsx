import { useGetProductBySlugQuery, useGetProductsQuery } from '@/api/products'
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
  const { data, isLoading } = useGetProductBySlugQuery(id)

  const { data: dataProduct, isLoading: loadingProduct } = useGetProductsQuery({});

  const [relateProducts, setRelateProducts] = useState([])
  const location = useLocation()
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // const relateProduct = getProducts()
    setRelateProducts(dataProduct?.data.filter((item: any) => item?.slug !== id && item?.category === data?.data?.categoryId));




  }, [pathname])
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
          <ProductDetail product={data?.data} />
          <MoreDetail id={data?.data._id} />
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
