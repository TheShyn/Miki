import Breadcum from '@/components/Breadcum'
import IsLogin from '@/components/IsLogin'
import Page from '@/components/Page'
import CartUser from '@/sections/Cart/CartUser'

export default function Cart() {
  return (


      <Page title="Cart">
        <div className="app mt-[24px] ">
          <div className="container mt-0">
            <Breadcum
              params={[
                {
                  href: '/',
                  label: 'Trang chủ',
                },
                {
                  href: '/product/allProduct',
                  label: 'Tất cả sản phẩm ',
                },
                {
                  href: '/cart',
                  label: 'Giỏ hàng',
                },
              ]}
              className='text-[14px]'
            />
            {/* {!dataItems.length ? (
          <CartEmpty />
        ) : ( */}
            <div className="mt-[48px]">
              <CartUser />
            </div>
            {/* )} */}
          </div>
        </div>
      </Page>

  )
}
