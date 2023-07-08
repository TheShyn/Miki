import Button from '@/components/Button'
import AlbumImg from '@/assets/static/Album/home-latest-collection.png'
export default function AlbumLastest() {
    return (
        <div className="h-[629px] w-full relative mt-[150px] mobile:mt-[72px] text-white " style={{ background: `url("${AlbumImg}") top center / cover no-repeat`, paddingTop: '50px' }}>
            <div className='absolute left-[10%] top-[20%]'>
                <h1 className='text-[30px] md:text-[40px] mb-[30px]'>Bộ sưu tập mới nhất</h1>
                <div className='mb-[30px]'>
                    <h3 className='text-[30px] md:text-[40px] font-plf mb-[15px]'>Ánh trăng người tình</h3>
                    <p className="max-w-[300px] leading-[25px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>

                </div>
                <Button primary content='Tìm hiểu thêm' secondary style="" />
            </div>
        </div>
    )
}
