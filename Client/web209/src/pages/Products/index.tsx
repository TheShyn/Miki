import React from 'react'
import BannerProducts from '@/assets/static/BannerProducts/banner.jpg'
import Breadcum from '@/components/Breadcum'
import SortProduct from '@/sections/Products/Sort'
import ProductItems from '@/components/ProductItems'
import Pagination from '@/components/Panigation'
import Page from '@/components/Page'

type Props = {}

export default function Products({ }: Props) {
  const products = [
    {
      name: 'Banner Products',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
    {
      name: 'Banner Products2',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
    {
      name: 'Banner Products3',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
    {
      name: 'Banner Products4',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
    {
      name: 'Banner Products45',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
    {
      name: 'Banner Products4ds',
      price: '123.000',
      img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
      discount: 10
    },
  ]
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
          <ProductItems data={products} />
          <Pagination pageCount={4} />
        </div>
      </div>
    </Page>
  )
}