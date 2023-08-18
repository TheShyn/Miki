import Button from '@/components/Button';
import FormatPrice from '@/utils/FormatPrice';

export default function TotalCart({cart}:any) {
    const totalPrice = cart.reduce((accumulator:any, currentValue:any) => {
        const a = (accumulator + (currentValue?.quantity * currentValue?.price));
        return accumulator + (currentValue?.quantity * currentValue?.price);
    }, 0);    
  return (
    <div>
    <h1 className="text-[24px] mb-[48px] font-bold">Tạm tính</h1>
    <div className='flex justify-start gap-[25px] pb-[48px] border-b-[1px]
     border-b-solid border-b-[#D8D8D8] items-center flex-wrap'>
        <h3 className="text-[24px]  font-bold">Ưu đãi</h3>
        <input type="text" placeholder="Nhập ưu đãi" className='h-[45px] border-[1px] border-primary-text px-[10px] rounded-8 max-w-[391px] w-full' />
    </div>
    <div className=' pb-[48px] mt-[48px] border-b-[1px]
     border-b-solid border-b-[#D8D8D8] '>
        <div className='flex mb-[28px] justify-between'>
            <p>Giá sản phẩm </p>
            <p className='text-[20px] font-bold text-[#000]'><FormatPrice price={totalPrice} /></p>
        </div>
        <div className='flex mb-[28px] justify-between'>
            <p>Phí giao hàng  </p>
            <p className='text-[20px] font-bold text-[#000]'>
                <FormatPrice price={123} />
            </p>
        </div>
        <div className='flex justify-between'>
            <p>Giảm giá  </p>
            <p className='text-[20px] font-bold text-[#000]'>
                {/* <FormatPrice price={total * (discount / 100)} /> */}
                <FormatPrice price={123} />

                </p>
        </div>
    </div>
    <div className='mt-[48px]'>
        <div className='mb-[40px] flex justify-between items-center'>
            <h3 className='font-bold text-[20px]'>Tổng</h3>
            <p className='text-[24px] font-bold text-[#92715A]'>
                {/* <FormatPrice price={total - (total * (discount / 100)) + ship} /> */}
                <FormatPrice price = {totalPrice}/>
            </p>
        </div>
        <div className='flex justify-end'>
            <Button primary className="hover-btn-primary shadow-md " content='Thanh toán' />
        </div>
    </div>
</div>
  )
}
