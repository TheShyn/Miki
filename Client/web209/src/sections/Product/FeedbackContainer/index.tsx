import Pagination from '@/components/Panigation'
import { getFeedBacksProduct } from '@/instance/Feedbacks'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
type Props = {
    id: string
}


export default function FeedbackContainer({ id = 'asdasda' }: Props) {
    const [feedbacks, setFeedbacks] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    useEffect(() => {
        let tempPage
        if (searchParams.has('page')) tempPage = searchParams.get('page');
        if(id){
            const data = getFeedBacksProduct(id, 1, tempPage || NaN)
            data.then((data) => {
                const { feedbacks, totalPages } = data.data
                setFeedbacks(feedbacks)  
                setTotalPage(totalPages)
                // setLoading(true)
            })

        }

        
        
    }, [location, id])
    return (
        <div>
            {/* {loading ? */}
                <div>

                    <div className="antialiased mx-auto">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

                        <div className="space-y-4">

                            {/* <div className="flex">
                            <div className="flex-shrink-0 mr-3">
                                <img className="mt-2 rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                            </div>
                            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </p>
                                <div className="mt-4 flex items-center">
                                    <div className="flex -space-x-2 mr-2">
                                        <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="" />
                                            <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="" />
                                            </div>
                                            <div className="text-sm text-gray-500 font-semibold">
                                                5 Replies
                                            </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="flex">
                            <div className="flex-shrink-0 mr-3">
                                <img className="mt-2 rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                            </div>
                            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua.
                                </p>
    
                                <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>
    
                                <div className="space-y-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-3">
                                            <img className="mt-3 rounded-full w-6 h-6 " src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                                        </div>
                                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                            <p className="text-xs sm:text-sm">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam voluptua.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-3">
                                            <img className="mt-3 rounded-full w-6 h-6 " src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                                        </div>
                                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                            <p className="text-xs sm:text-sm">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                magna aliquyam erat, sed diam voluptua.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            {feedbacks.length > 0 ?
                                feedbacks.map((item: any,index) => (
                                    <div key={index} className="flex min-w-[850px]">
                                        <div className="flex-shrink-0 mr-3">
                                            <img className="mt-2 rounded-full w-10 h-10" src={item.user.avatar} alt="" />
                                        </div>
                                        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <div className="flex items-center gap-2">
                                                <strong> {item.user.name}</strong>
                                                <div className="flex items-center gap-1">
                                                    {Array.from(Array(item.rate), (index) => (
                                                        <AiFillStar key={index} className='text-[15px] text-[#e2b53e]' />
                                                    ))}

                                                </div>

                                            </div>
                                            <p className="text-sm">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))

                                :
                                <div className='flex min-w-[850px]'>
                                    <span className='text-2xl text-red-400 italic'>Hiện tại, chưa có đánh giá nào. Đánh giá ngay !</span>
                                </div>
                            }
                        </div>
                    </div>
                    <Pagination pageCount={totalPage} />
                </div>
                {/* : 'loading...'} */}
        </div>
    )
}