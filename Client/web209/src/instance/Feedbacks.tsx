import instance from "./index"


export const getFeedBacksProduct = (targetId:string | number, limit:string | number, page: string | number, rating?: number | string)=>{
    return instance.get(`/feedbacks?targetId=${targetId}&limit=${limit}&page=${page}&rating=${rating || ''}`)
}

