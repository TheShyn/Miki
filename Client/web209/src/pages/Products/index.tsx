import { useAppDispatch, useAppSelector } from '@/app/hooks'
import BannerProducts from '@/assets/static/BannerProducts/banner.jpg'
import Breadcum from '@/components/Breadcum'
import Page from '@/components/Page'
import Pagination from '@/components/Panigation'
import ProductItems from '@/components/ProductItems'
import { getAllProducts } from '@/instance/Products'
import SortProduct from '@/sections/Products/Sort'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}
export default function Products({ }: Props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const products = useAppSelector(state => state.products)
  console.log(products);
  
  const dispatch = useAppDispatch()
  useEffect(() => {
    searchParams.set('page', String(null));
    let tempPage:any
    let category: string | undefined;
    if (searchParams.has('page')) tempPage = searchParams.get('page');
    if (searchParams.has('category')) category = searchParams.get('category') || "";
    dispatch(getAllProducts({page:tempPage || null, limit:1, category})) 
  }, [location]);
  return (
    <Page title='Tất cả sản phẩm'>
      <div className="app">
        <img src={BannerProducts} alt="imgbanner" className="" />
        <div className="container mt-0 pb-1 pt-[32px]">
          <Breadcum params={[
            {
              href: '/',
              label: 'Trang chủ'
            },
            {
              href: '/product/allProduct',
              label: 'Tất cả sản phẩm '
            }
          ]}
          />
          <SortProduct />
          <ProductItems data={products.products} />
          <Pagination pageCount={products.totalPages || 0} scroll={600}/>
        </div>
      </div>
    </Page>
  )
}