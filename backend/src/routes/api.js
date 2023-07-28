import express from 'express';
import AddProduct from '../api/products/add.js';
import GetAll from '../api/products/all.js';
import DeleteProduct from '../api/products/delete.js';
import getDetail from '../api/products/product.js';
import UpdateProduct from '../api/products/update.js';
import { checkPermission } from '../middleware/checkPermission.js';
import uploadCloud from '../middleware/upload.js';

const routerApi = express.Router();

routerApi.get("/", GetAll)
routerApi.get("/:slug",getDetail)
routerApi.patch("/:id",checkPermission, UpdateProduct)
routerApi.delete("/:id",checkPermission,DeleteProduct)
routerApi.post("/",checkPermission, AddProduct)


export default routerApi;