import RatingPreview from '@/components/RatingPreview';
import React, { useState } from 'react'
import FeedbackContainer from '../FeedbackContainer';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
type Props = {}

export default function MoreDetail({ }: Props) {
    const Tabs = ['Mô tả', 'Bảo hành và Hoàn trả', 'Vận chuyển', `Đánh giá`];
    const Rates = ['Tất cả', `5 Sao`, `4 Sao`, `3 Sao`, `2 Sao`, `1 Sao`];
    const [tabIndex, setTabIndex] = useState(3);
    const [tabRateIndex, setTabRateIndex] = useState(0);
    const [star, setStar] = useState(0)
    const handleRatingChange = (event: any) => {
        setStar(parseInt(event.target.value));
    };
    return (
        <div>
            <div className="mt-[70px] mx-[50px] flex flex-wrap justify-between gap-4">
                {Tabs.map((tab, index) => (
                    <span
                        onClick={() => {
                            setTabIndex(index);
                        }}
                        key={tab}
                        className={
                            tabIndex == index
                                ? 'text-xl font-bold text-primary/1 underline underline-offset-8 mr-[120px] cursor-not-allowed'
                                : 'text-xl font-bold text-Neutral/3 mr-[120px] cursor-pointer'
                        }
                    >
                        {tab}
                    </span>
                ))}
            </div>
            <div className="mt-[44px] ml-[80px] relative mx-[50px]">
                <div className={tabIndex == 0 ? 'block' : 'hidden'}>
                    <h3 className="text-xl font-bold mb-2">Sản phẩm:</h3>
                    <p className="text-justify text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className={tabIndex == 1 ? 'block' : 'hidden'}>
                    <div className="flex justify-between flex-wrap gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Chính sách bảo hành:</h3>
                            <p>(Áp dụng cho vàng 18k) </p>
                        </div>
                        <table className="table-fixed border-collapse border-primary-text border">
                            <thead>
                                <tr className="border-collapse border-primary-text border">
                                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                                        Nội dung
                                    </th>
                                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                                        Thời gian
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-collapse border-primary-text border p-3">Làm sạch sản phẩm</td>
                                    <td className="border-collapse border-primary-text border p-3">Trọn đời</td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-primary-text border p-3">Đánh bóng và xi mới</td>
                                    <td className="border-collapse border-primary-text border p-3">05 lần</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between mt-[32px] flex-wrap">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Phí bảo hành:</h3>
                        </div>
                        <table className="table-fixed border-collapse border-primary-text border">
                            <thead>
                                <tr>
                                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                                        Nội dung bảo hành
                                    </th>
                                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                                        Chi phí bảo hành (/lần)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-collapse border-primary-text border p-3">Sửa độ rung với sản phẩm Ladanse</td>
                                    <td className="border-collapse border-primary-text border p-3">Làm mới sản phẩm</td>
                                </tr>
                                <tr>
                                    <td className="border-collapse border-primary-text border p-3">200.000 đ</td>
                                    <td className="border-collapse border-primary-text border p-3">50.000 đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Lưu ý: </h3>
                        <p className="text-red-500 text-lg">
                            Sản pẩm không còn nguyên vẹn hoặc mất hóa đơn, Miki sẽ thâu mua lại với 80% giá trị sản phẩm.
                        </p>
                        <p className="mt-3 text-red-500 text-lg">
                            Các sản phẩm trang sức bạc, mạ vàng, vòng đá, dây da các loại, chuỗi ngọc trai: Miki không mua lại!
                        </p>
                    </div>
                </div>
                <div className={tabIndex == 2 ? 'block' : 'hidden'}>
                    <h3 className="text-xl font-bold mb-2">Chính sách vận chuyển</h3>
                    <p>Với đối tác giao hàng uy tín, có mua bảo hiểm hàng hóa, thời gian giao hàng nhanh và đúng hẹn:</p>
                    <table className="table-fixed border-collapse border-primary-text border ml-[90px] mt-6">
                        <thead>
                            <tr>
                                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                                    Khu vực
                                </th>
                                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[300px] p-3">
                                    Nội thành Hà Nội/TP Hồ Chí Minh
                                </th>
                                <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                                    Các tỉnh khác
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-collapse border-primary-text border p-3">Thời gian giao hàng</td>
                                <td className="border-collapse border-primary-text border p-3">2 ngày</td>
                                <td className="border-collapse border-primary-text border p-3">3-5 ngày</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-xl text-[#D2311B] font-bold mb-2 mt-[30px]">***Lưu ý: </h3>
                    <p>Với sản phẩm giảm giá khuyến mãi từ 20% trở lên khách hàng sẽ chịu hoàn toàn phí giao hàng.</p>
                </div>
                <div className={tabIndex == 3 ? '' : 'hidden'}>
                    <div className="flex gap-5 md:gap-[100px] flex-col lg:flex-row">
                        <div className="w-1/3">
                            <h3 className="text-xl font-bold mb-2">Đánh giá sản phẩm</h3>
                            <div className="flex">
                                {/* {!product.rating.rate ? ( */}
                                {/* <span>Chưa có đánh giá</span> */}
                                <div>
                                    <RatingPreview />
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex flex-wrap">
                                {Rates.map((rate, index) => (
                                    <span
                                        onClick={() => {
                                            setTabRateIndex(index);
                                        }}
                                        key={rate}
                                        className={
                                            tabRateIndex == index
                                                ? 'px-6 py-2 bg-white border rounded-8 border-primary/1 text-primary/1 mr-6 mb-6 cursor-not-allowed'
                                                : 'px-6 py-2 bg-white border rounded-8 text-Neutral/3 border-Neutral/3 mr-6 mb-6 cursor-pointer'
                                        }
                                    >
                                        {rate}
                                    </span>
                                ))}
                            </div>
                            <div className='my-5'>
                                <div className="rating flex gap-5 mb-4">
                                    <div>
                                        <label htmlFor="value1"><AiFillStar className={`star-icon  text-[30px] ${star >= 1 ? 'text-yellow-500' : 'text-slate-400'}`} /></label>
                                        <input hidden type="radio" id='value1' value='1' name="rating-1"
                                            checked={star === 1}
                                            onClick={handleRatingChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="value2"><AiFillStar className={`star-icon text-[30px]  ${star >= 2 ? 'text-yellow-500' : 'text-slate-400'}`} /></label>
                                        <input hidden type="radio" id='value2' value='2' name="rating-1"
                                            checked={star === 1}
                                            onClick={handleRatingChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="value3"><AiFillStar className={`star-icon text-[30px]  ${star >= 3 ? 'text-yellow-500' : 'text-slate-400'}`} /></label>
                                        <input hidden type="radio" id='value3' value='3' name="rating-1"
                                            checked={star === 1}
                                            onClick={handleRatingChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="value4"><AiFillStar className={`star-icon text-[30px]  ${star >= 4 ? 'text-yellow-500' : 'text-slate-400'}`} /></label>
                                        <input hidden type="radio" id='value4' value='4' name="rating-1"
                                            checked={star === 1}
                                            onClick={handleRatingChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="value5"><AiFillStar className={`star-icon text-[30px]  ${star == 5 ? 'text-yellow-500' : 'text-slate-400'}`} /></label>
                                        <input hidden type="radio" id='value5' value='5' name="rating-1"
                                            checked={star === 1}
                                            onClick={handleRatingChange} />
                                    </div>

                                </div>
                                <form>
                                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                                        <div className="flex items-center justify-between px-3 py-2 border-b ">
                                            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                                                <div className="flex items-center space-x-1 sm:pr-4">

                                                    <label htmlFor='fileUpload' className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                                        </svg>
                                                        <span className="sr-only">Upload image</span>
                                                    </label>
                                                    <input type="file" hidden name="" id="fileUpload" />

                                                </div>

                                            </div>
                                            <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 ">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                                </svg>
                                                <span className="sr-only">Full screen</span>
                                            </button>
                                            <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                                Show full screen
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 bg-white rounded-b-lg ">
                                            <label htmlFor="editor" className="sr-only">Publish post</label>
                                            <textarea id="editor" rows={8} style={{ outline: 'none' }} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Write an article..." required></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="flex justify-start items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                                        Send feedback
                                    </button>
                                </form>
                            </div>
                            <FeedbackContainer />
                        </div>

                    </div>
                    {/* tab rating star */}
                    {/* <FeedbackContainer feedbacks={feedbacks} tabRateIndex={tabRateIndex}  />
          <RatingProduct product={product} /> */}
                </div>
            </div>
        </div >
    )
}