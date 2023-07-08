
export default function SortProduct() {

    return (
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-[20px] md:gap-0">
            <h1 className="font-bold text-[23px] md:text-32 leading-10">Danh mục sản phẩm</h1>
            <div className="flex items-center">
                <select className="p-2 border-none min-w-[200px] rounded-[10px] border border-bgr" style={{outline:'none',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px'}}>
                    <option disabled>Lọc</option>
                    <option value="asc">Giảm dần</option>
                    <option value=" ">Tăng dần</option>
                </select>

            </div>
        </div>
    )
}
