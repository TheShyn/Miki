import Breadcum from '@/components/Breadcum';
import banner from '@/assets/static/Brand/banner.png';
import Img1 from '@/assets/static/Brand/Rectangle 4169.jpg';
import Img2 from '@/assets/static/Brand/Rectangle 4170.png';
import Img3 from '@/assets/static/Brand/Rectangle 4171.jpg';
import Page from '@/components/Page';

export default function BrandAndHistory() {
    return (
        <Page title='Thương hiệu và lịch sử'>

            <div className="app z-10">
                <div className="container lg:ml-[50px] mt-0 relative z-50">
                    <Breadcum
                        params={[
                            {
                                href: '/',
                                label: 'Trang chủ',
                            },
                            {
                                href: '/aboutus/brandandhistory',
                                label: 'Thương hiệu và lịch sử',
                            },
                        ]}
                    />
                </div>
                <div className="relative" style={{ background: `url("${banner}") top center / cover no-repeat`, paddingTop: '50%' }}>
                    <h2 className="lg:text-5xl  text-[25px] md:top-[20%] md:text-[30px] leading-[58px] font-bold max-w-[500px] lg:max-w-[550px] leading-[24px] lg:max-w-[535px] absolute top-[10%] left-[10%] tracking-[-0.019em]">
                        “Miki Jewelry - Tales of Happiness”
                    </h2>
                    <p className="absolute hidden md:block md:top-[40%] top-[30%] max-w-[300px]  text-[16px] lg:text-[19px] left-[10%] lg:max-w-[535px]">
                        Lần đầu ra mắt thị trường vào năm 2015, Miki mong muốn mang tới những sản phẩm Nữ trang được đầu tư về thiết
                        kế, minh bạch về thông tin giao dịch hàng hoá và mang đến khách hàng dịch vụ hậu mãi trọn vẹn.
                    </p>
                </div>
                <div className="container mt-[50px] md:mt-[150px] lg:mx-[50px]">
                    <div className="grid grid-cols-none lg:grid-rows-none lg:grid-cols-2  gap-4 md:gap-11 mb-[120px]">
                        <div>
                            <h3 className="text-[20px] md:text-32 leading-10 font-bold mb-[32px]">Phong cách Hàn Quốc</h3>
                            <p className="max-w-[500px] text-[14px] md:text-[20px]">
                                Lấy tầm nhìn trở thành “Nhà bán lẻ trang sức dẫn đầu xu hướng", trang sức Miki mang phong cách trẻ
                                trung, hiện đại, liên tục cập nhật những xu hướng mới từ Hàn Quốc.
                            </p>
                        </div>
                        <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                            <img src={Img1} className="rounded-8 overflow-hidden" />
                        </div>
                    </div>
                    <div className="grid grid-cols-none lg:grid-rows-none lg:grid-cols-2  gap-4 md:gap-11 mb-[120px]">
                        <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                            <img src={Img2} className="rounded-8 overflow-hidden" />
                        </div>
                        <div>
                            <h3 className="text-[20px] md:text-32 leading-10 font-bold mb-[32px]">Những câu chuyện hạnh phúc</h3>
                            <p className="max-w-[500px]">
                                Mang trong mình sứ mệnh sẽ trở thành bạn đồng hành luôn thấu hiểu và trân trọng từng khoảnh khắc trong
                                cuộc sống của khách hàng, Miki Jewelry là “Tales of Happines” (Câu chuyện của hạnh phúc). Hạnh phúc,
                                tình yêu, kỉ niệm,… được hình hóa thành những món quà ở lại mãi với thời gian...
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-none lg:grid-rows-none lg:grid-cols-2 gap-4 md:gap-11">
                        <div>
                            <h3 className="text-[20px] md:text-32 md:leading-10 font-bold mb-[32px]">Sản xuất & chế tác</h3>
                            <p className="max-w-[500px]">
                                Sở hữu xưởng sản xuất rộng hơn 3000m2 tại Vĩnh Phúc dây chuyền sản xuất hiện đại cùng với kinh nghiệm
                                hơn 15 năm trong ngành sản xuất kim hoàn.
                            </p>
                        </div>
                        <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                            <img src={Img3} className="rounded-8 overflow-hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
