import Breadcum from '@/components/Breadcum'
import Page from '@/components/Page'
import ProductItems from '@/components/ProductItems'
import MoreDetail from '@/sections/Product/MoreDetail'
import ProductDetail from '@/sections/Product/ProductDetail'
import React from 'react'

export default function DetailPage() {
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
  ]
  const product = {
    name: 'Banner Products',
    price: '123.000',
    img: 'https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75',
    discount: 10
  }
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
          <ProductDetail product={product} />
          <MoreDetail />
          {/* <MoreDetail product={product} feedbacks={feedbacks} /> */}
          <div className=" text-[30px] text-2nd-text font-bold  mt-[60px]">
            Có thể bạn cũng thích
          </div>
          <ProductItems data={products} />
        </div>
      </div>
    </Page>
  )
}
