import Button from '@/components/Button'
import ItemProduct from '@/components/Item'

export default function BestSeller() {
    return (
        <div className={` mt-[100px] md:mt-[150px]`}>
            <div className="flex justify-between flex-wrap" >
                <h1 className="text-32 font-bold mx-auto md:mx-0 flex flex-col md:flex-row md:justify-center mb-[15px] md:mb-[0] z-10">Sản phẩm nổi bật</h1>
                <Button primary style="py-2 px-[46px] hover-btn-primary w-full md:max-w-[200px] z-10 " content=' Xem Tất cả' />
            </div>
            <div className="grid mx-auto md:grid-cols-2 mt-[50px] lg:grid-cols-4 lg:gap-[30px]  gap-[30px]">
                <ItemProduct name='Lira Earrings' price='355.000' img='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                <ItemProduct discount={5}  name='Lira Earrings' price='355.000' img='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                <ItemProduct name='Lira Earrings' price='355.000' img='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
                <ItemProduct discount={10} name='Lira Earrings' price='355.000' img='https://miki-jewelry.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoa5p4v4z%2Fimage%2Fupload%2Fv1664474358%2Fhrnt7z87vvzhqho1hxbd.jpg&w=384&q=75' />
               
                



                {/* <div className="w-[22%]  text-center font-bold  z-10 flex flex-col-reverse">
                    <Button primary style="w-full mt-6 hover-btn-primary peer mobile:px-[17.5px]  " content='Thêm vào giỏ hàng' />
                    <p className="text-price-text mt-[6px]">355.000đ</p>
                    <p className="text-[20px] mt-6  ">Lira Earrings</p>
                    <div className='hover:shadow-product hover:scale-[1.01] rounded-[5px] peer-hover:shadow-product'>
                         <img src="" alt="" className='rounded-[5px] h-[254px] w-[100%]' />
                    </div>
                </div> */}
            </div>
            <Button primary style="py-2 ml-[210px] mt-[48px] text-[12px] leadding-[20px] px-[46px] hover-btn-primary  z-10 hidden" content='Xem tất cả' />
        </div>
    )
}
