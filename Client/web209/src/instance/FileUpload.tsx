import instance from "./index";

const cloudinaryUpload  = (fileUpload:any)=>{
    return instance.post('/upload/cloudinary-upload',fileUpload)
}
export default cloudinaryUpload