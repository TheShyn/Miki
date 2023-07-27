import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Button from "@/components/Button";
import FormProviderBox from "@/components/hook-form/FormProviderBox";
import InputField from "@/components/hook-form/InputField";
import { SelectOption } from "@/components/hook-form/SelectOption";
import { TextArea } from "@/components/hook-form/TextArea";
import { getAllCategories } from "@/instance/Categories";
import cloudinaryUpload from "@/instance/FileUpload";
import { addProduct } from "@/instance/Products";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlineSearch, AiOutlineCloudUpload } from "react-icons/ai";
import * as yup from 'yup';
type Props = {}

export default function AddProduct({ }: Props) {
    const [errAdd, setErrAdd] = useState('');
    const [categories, setCategories] = useState([])
    const [imgs, setImgs] = useState([])
    const dispatch = useAppDispatch()
    const data = useAppSelector((state: any) => state.products)
    const cate = useAppSelector((state: any) => state.categories)
    const schema = yup.object().shape({
        nameProduct: yup.string().required('Nhập tên sản phẩm'),
        // img: yup
        //     .mixed()
        //     .test('is-img-object', 'Vui lòng chọn ảnh chính', value => {
        //         return value && typeof value === 'object' && Object.keys(value).length > 0;
        //     })
        //     .required('Vui lòng chọn ảnh chính'),
        desc: yup.string().required('Vui lòng nhập mô tả sản phẩm'),
        dynamicForm: yup.array().of(
            yup.object().shape({
                size: yup.string().required('Vui lòng nhập cỡ'),
                quantity: yup.string().required('Vui lòng số lượng'),
                price: yup.string().required('Vui lòng giá'),
            })
        ),
    });
    const methods = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
        defaultValues: {
            dynamicForm: [],
        },
    });
    const { handleSubmit, reset, control } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dynamicForm',
    });


    //
    const handleChange = (e: any) => {
        const uploadData = new FormData();
        const files = e.target.files
        for (let i = 0; i < files.length; i++) {
            uploadData.append('files', files[i], "files");
        }
        cloudinaryUpload(uploadData)
        .then((data:any)=>{
            setImgs(data.data.secure_urls);
            console.log(data);
            
        })
    }
    //submit
    const onSubmit = (data: any) => {
        if (data.dynamicForm.length == 0) {
            return setErrAdd('Vui lòng thêm size');
        } else {
            setErrAdd('');
        }

        console.log(data);
        
        if (data) {
            const dataUp = {
                name: data.nameProduct,
                description: data.desc,
                categoryId: "64822a45fe4657527476ecd9",
                images: imgs,
                storage: data.dynamicForm
            }
            console.log(dataUp);
            

            dispatch(addProduct(dataUp))

        }
    }
    useEffect(() => {
        dispatch(getAllCategories())
        setCategories(cate?.categories.map((item: any) => {
            return {
                value: item._id,
                name: item.name
            }
        }))
    }, [])
    return (
        <div className='mt-[50px]'>
           
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Thêm sản phẩm</h1>
                <div className='bg-white flex items-center px-2 rounded-8 py-1 border border-1 boder-#ccc'>
                    <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
                    <AiOutlineSearch className='text-black' />
                </div>
            </div>
            {data.error ?
                <span className='my-3 align-middle flex justify-center bg-red-200  py-2 text-red-600'>{data.error}</span>
                :
                undefined
            }
            <FormProviderBox className="" methods={methods} onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    name="nameProduct"
                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập tên sản phẩm"
                />


                <div className="mb-5">
                    {fields.map((item, index) => {
                        return (
                            <div key={item.id} className="grid md:grid-cols-[1fr,1fr,1fr,0.5fr] md:gap-[20px]">
                                <InputField
                                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    // name="size"
                                    placeholder="Size..."
                                    type="text"
                                    name={`dynamicForm.${index}.size`}
                                    isArray
                                />
                                <InputField
                                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    className="flex flex-col "
                                    placeholder="Quantity..."
                                    type="number"
                                    name={`dynamicForm.${index}.quantity`}
                                    isArray
                                />
                                <InputField
                                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    className="flex flex-col "
                                    placeholder="Price..."
                                    type="number"
                                    name={`dynamicForm.${index}.price`}
                                    isArray
                                />
                                <button
                                    onClick={() => remove(index)}
                                    className=""
                                >Xóa</button>
                            </div>

                        );
                    })}
                    <button
                        onClick={() => {
                            append({
                                size: "",
                                quantity: "",
                                price: "",
                            });
                        }}
                    >Thêm mới size</button>
                    {errAdd && <div className='text-[14px] italic text-red-600'>{errAdd}</div>}
                </div>
                <TextArea
                    className="mb-4 flex flex-col"
                    name="desc"
                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Thông tin của sản phẩm ... "
                />
                <SelectOption
                    className="mb-5"
                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    name="category"
                    valueOption={categories}
                    label="Category"
                    styleLabel='text-[14px] italic'
                />
                <div className="flex flex-wrap">

                    <InputField
                        name="images"
                        // styleMessage="text-msgEr text-sm"
                        styleInput="hidden"
                        placeholder="Thông tin sản phẩm"
                        type='file'
                        label={<div className="flex justify-center  flex-col items-center text-2xl"><AiOutlineCloudUpload /> <div className="text-[14px]">Ảnh sản phẩm</div></div>}
                        styleLabel="border min-w-[150px] border-dashed max-w-[150px] border-2 text-center py-[40px]"
                        onChange={(e: any) => { handleChange(e) }}
                        mutiple
                    />
                    {/* <InputField
                        name="imgSub"
                        // styleMessage="text-msgEr text-sm"
                        styleInput="hidden"
                        placeholder="Thông tin sản phẩm"
                        type='file'
                        label={<div className="flex justify-center  flex-col items-center text-2xl"><AiOutlineCloudUpload /> <div className="text-[14px]">Ảnh phụ</div></div>}
                        styleLabel="border min-w-[150px] border-dashed max-w-[150px] border-2 text-center py-[40px]"
                    /> */}
                </div>
                <Button primary type='submit' content="Thêm sản phẩm" />
            </FormProviderBox>
        </div>

    )
}