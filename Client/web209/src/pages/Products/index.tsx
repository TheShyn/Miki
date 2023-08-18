import { useGetProductsQuery } from '@/api/products'
import BannerProducts from '@/assets/static/BannerProducts/banner.jpg'
import Breadcum from '@/components/Breadcum'
import Page from '@/components/Page'
import Pagination from '@/components/Panigation'
import ProductItems from '@/components/ProductItems'
import SortProduct from '@/sections/Products/Sort'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}
export default function Products({ }: Props) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(1)
  const [category, setCategory] = useState("")
  const { data, isLoading, isError, error } = useGetProductsQuery({
      page: page,
      limit:  2
    }
  );
  console.log(error);  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  useEffect(() => {
    let tempPage:any
    let category: string | undefined;
    if (searchParams.has('page')) tempPage = searchParams.get('page');
    if (searchParams.has('category')){ 
      category = searchParams.get('category') || ""
      setLimit(0)
    };
    // setCategory(`${category}`)
    setCategory(`${category}`)
    setPage(tempPage)
    
  }, [location.search]);
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
          <ProductItems data={data?.data} />
          <Pagination pageCount={data?.totalPages || 0} scroll={600}/>
        </div>
      </div>
    </Page>
  )
}