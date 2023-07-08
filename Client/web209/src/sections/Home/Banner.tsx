import Button from '@/components/Button'
import BadasdannerImg from '@/assets/static/BannerImg/BannerImg.jpg'
export default function Banner() {
  return (
    <div className='relative h-[629px] text-white ' style={{background:`url("${BadasdannerImg}") top center / cover no-repeat`,paddingTop:'50%'}}>
      <h2 className='font-plf absolute md:top-[18%] text-[30px] mb-[50px] md:text-[40px] top-[12%]  leading-[41px] left-1/2 transform -translate-x-1/2'>
        Thế Giới Nữ Trang
      </h2>
      <div className='absolute bg-white h-[2px] w-[50%] top-[30%] md:top-[35%] left-1/2 transform -translate-x-1/2 '></div>
      <p className='text-[14px] font-semibold top-[38%] absolute left-1/2 transform -translate-x-1/2'>
        Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Yêu thương
      </p>
      <div className='absolute bg-white h-[2px]  w-[50%] md:bottom-[55%] bottom-[45%] left-1/2 transform -translate-x-1/2'></div>
      <Button primary  content='Tìm hiểu thêm' style='absolute z-30 left-1/2 transform -translate-x-1/2 bottom-[24%]  md:bottom-[40%] ' />
    </div>
  )
}
