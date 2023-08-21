import { useAddCategoryMutation } from "@/api/categories";
import Button from "@/components/Button";
import FormProviderBox from "@/components/hook-form/FormProviderBox";
import InputField from "@/components/hook-form/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from 'yup';
type Props = {}

export default function AddCate({ }: Props) {
    const [addCate, {isLoading}] = useAddCategoryMutation()
    const navigate = useNavigate()
    const schema = yup.object().shape({
        name: yup.string().required('Nhập tên loại sản phẩm'),
 
    });
    const methods = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
        defaultValues: {

        },
    });
    const { handleSubmit, reset, control } = methods;
    //
    //submit
    const onSubmit = (data: any) => {
        console.log(data);
        if(data){
            addCate(data).unwrap().then(()=>{
                toast.success("Thêm thành công")
                setTimeout(() => {
                    navigate("/admin/categories")
                    
                }, 2000);
            })
            .catch((error)=>{
                console.log(error);
                toast.error(error?.data?.message || "some thing error");

            })
        }
       
    }
    return (
        <div className='mt-[50px]'>
           
            <div className='flex justify-between items-center flex-wrap'>
                <h1 className='mb-5 text-2xl'>Thêm sản phẩm</h1>
                <div className='bg-white flex items-center px-2 rounded-8 py-1 border border-1 boder-#ccc'>
                    <input placeholder='Search...' className='text-black outline-none border-none' type="text" />
                    <AiOutlineSearch className='text-black' />
                </div>
            </div>
            <FormProviderBox className="" methods={methods} onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    name="name"
                    styleInput="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    // styleMessage="text-msgEr text-sm"
                    placeholder="Nhập tên sản phẩm"
                />

                <Button primary type='submit' content={isLoading ? <AiOutlineLoading3Quarters className='animate-spin' /> : "Thêm sản phẩm"} />
            </FormProviderBox>
        </div>

    )
}