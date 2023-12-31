import ItemProduct from '../Item'

type IData = {
  name: string,
  img:string,
  discount?:number,
  storage: {
    price: number
  }[],
  slug?:string
}

type Props = {
    data : IData[]
}

export default function ProductItems({data}: Props) {
  
  return (
    <div className="grid mx-auto md:grid-cols-2 mt-[50px] lg:grid-cols-4 lg:gap-[30px]  gap-[30px]">
        {data && data?.map((item:any,i)=>{
            return (
              <div key={i}>
                  <ItemProduct slug={item.slug} discount={item.discount} name={item.name} price={item.storage?.[0].price} img={item?.images?.[0]} />

              </div>
            )
        })}
    </div>
  )
}