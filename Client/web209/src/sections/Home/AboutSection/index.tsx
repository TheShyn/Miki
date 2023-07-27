import Button from '@/components/Button'
import AboutImg from '@/assets/static/AboutImg/AboutImg.jpg'
export default function AboutSection() {
  return (
    <div className="grid grid-cols-none grid-rows-2 md:grid-cols-2 md:grid-rows-none md:px-[50px] gap-[50px] mt-[100px] md:mt-[150px] ">
      <div className="font-bold">
        <h1 className="text-32 leading-10 ">Về chúng tôi</h1>
        <h2 className="font-plf text-5xl leading-[58px] mt-[56px]">“Ngày mai phải tốt hơn ngày hôm nay”</h2>
        <p className="font-medium text-16 leading-5 text-Neutral/2 mt-[32px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button  primary style="md:mt-[54px] mt-[90px] hover-btn-primary relative z-10" content='Tìm hiểu thêm'/>
      </div>
      <div className="">
        <img src={AboutImg} className="rounded-16 h-full relative z-10 object-cover w-full md:max-w-[598px] max-h-[598px]"   alt="" />
      </div>
    </div>
  )
}
