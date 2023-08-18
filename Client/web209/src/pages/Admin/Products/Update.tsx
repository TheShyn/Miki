import { useGetCategoriesQuery } from "@/api/categories";
import { useGetProductBySlugQuery, useUpdateProductMutation } from "@/api/products";
import Button from "@/components/Button";
import FormProviderBox from "@/components/hook-form/FormProviderBox";
import InputField from "@/components/hook-form/InputField";
import { SelectOption } from "@/components/hook-form/SelectOption";
import { TextArea } from "@/components/hook-form/TextArea";
import cloudinaryUpload from "@/instance/FileUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlineCloudUpload, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import * as yup from 'yup';
type Props = {}

export default function UpdateProduct({ }: Props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [previewImages, setPreviewImages] = useState<any>([]);
    const { data, isLoading, error } = useGetProductBySlugQuery(id)
    const { data: dataCate, isLoading: loadingCate } = useGetCategoriesQuery({})
    const [uploadFiles, setUploadFiles] = useState(new FormData())
    
    const [categories, setCategories] = useState([])
    const [errAdd, setErrAdd] = useState('');
    const [updateProduct, {isLoading:loadingAdd}] = useUpdateProductMutation()
    const schema = yup.object().shape({
        nameProduct: yup.string().required('Nhập tên sản phẩm'),
        // i'mg: yup
        //     .mixed()
        //     .test('is-img-object', 'Vui lòng chọn ảnh chính', value => {
        //         return value && typeof value === 'object' && Object.keys(value).length > 0;
        //     })
        //     .required('Vui lòng chọn ảnh chính'),'
        desc: yup.string().required('Vui lòng nhập mô tả sản phẩm'),
        dynamicForm: yup.array().of(
            yup.object().shape({
                size: yup.string().required('Vui lòng nhập cỡ'),
                quantity: yup.string().required('Vui lòng số lượng'),
                price: yup.string().required('Vui lòng giá'),
            })
        )
    });
    const methods = useForm<any>({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
        defaultValues: {
            nameProduct: data?.data?.name,
            desc: data?.data?.description,
            category: data?.data?.categoryId?._id,
            dynamicForm: data?.data?.storage?.map((item: any) => {
                return {
                    size: item.size,
                    quantity: item.quantity,
                    price: item.price,
                }

            })
        },
    });
    const { handleSubmit, reset, control, setValue } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dynamicForm',
    });

    const handleChange = (e: any) => {
        const uploadData = new FormData();
        const files = e.target.files
        for (let i = 0; i < files.length; i++) {
            uploadData.append('files', files[i], "files");
        }
        if (files && files.length > 0) {
            const imageUrls = Array.from(files).map((file: any) => URL.createObjectURL(file));
            setPreviewImages(imageUrls);
        }
        setUploadFiles(uploadData)
    }
    const onSubmit = async (values: any) => {
        if (values.dynamicForm.length == 0) {
            return setErrAdd('Vui lòng thêm size');
        } else {
            setErrAdd('');
        }
        if (values) {
            console.log(values);

            const imgs = await cloudinaryUpload(uploadFiles)
            console.log(imgs);
            
            const dataUp = {
                name: values?.nameProduct,
                description: values?.desc,
                categoryId: values.category,
                images: imgs?.data?.secure_urls?.length ? imgs?.data?.secure_urls : previewImages,
                storage: values?.dynamicForm
            }
            const dataUpdate = {
                id: data?.data?._id,
                data: dataUp
            }

            await updateProduct(dataUpdate).unwrap().then(()=>{
                navigate("/admin/products")

            })
            .catch((error)=>{
                console.log(error);
                
            })

        }
    }

    useEffect(() => {

        // setImgs(product.images)
        setCategories(dataCate?.data?.map((item: any) => {
            return {
                value: item._id,
                name: item.name
            }
        }))

        reset({
            nameProduct:  data?.data?.name,
            desc:  data?.data?.description,
            category: data?.data?.categoryId?._id,
            dynamicForm:  data?.data?.storage?.map((item: any) => {
                return {
                    size: item.size,
                    quantity: item.quantity,
                    price: item.price,
                }

            })
        })
        setPreviewImages(data?.data?.images)
    }, [isLoading, loadingCate])
    return (
        <div className='mt-[50px]'>
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Sửa sản phẩm</h1>
                <div className='bg-white flex items-center px-2 rounded-8 py-1 border border-1 boder-#ccc'>
                    <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
                    <AiOutlineSearch className='text-black' />
                </div>
            </div>
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
                    rows={1}
                />
                <SelectOption
                    className="mb-5"
                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    name="category"
                    valueOption={categories}
                    label="Category"
                    control={control}
                    styleLabel='text-[14px] italic'
                />
                <div className="flex flex-col mb-4">

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
                    <div className="flex flex-wrap gap-4">
                        {previewImages?.map((imageUrl: any, index: any) => (
                            <img
                                key={index}
                                src={imageUrl}
                                alt={`Preview ${index}`}
                                style={{ maxWidth: '150px', maxHeight: '150px', margin: '5px' }}
                                className="object-cover"
                            />
                        ))}

                    </div>
                </div>
                <Button primary type='submit' content={loadingAdd ? <AiOutlineLoading3Quarters  />: "Lưu sản phẩm"} />
            </FormProviderBox>
        </div>

    )
}