import Breadcum from '@/components/Breadcum'
import Page from '@/components/Page'
import PaymentSection from '@/sections/Payment/PaymentSection'

export default function Payment() {
  return (
    <Page title="Payment">
      <div className="app">
        <div className='container mt-0'>
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
          className='text-[13px]'
        />
        </div>
        <div className="flex justify-center">
          <PaymentSection />
        </div>
      </div>
    </Page>
  )
}
