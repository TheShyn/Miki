import express from 'express';
import getAllUser from '../api/member/all';
import getDetailUser from '../api/member/detail';
import updateUser from '../api/member/update/update';
import deleteUser from '../api/member/delete';
import { checkPermission } from '../middleware/checkPermission';
import cartHandle from '../api/member/cart';

const router = express.Router();

router.get('/',getAllUser)
router.get('/detail/:id',getDetailUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

router.post('/cart/:id',cartHandle)
router.patch('/cart/:id',cartHandle)
router.delete('/cart/:id',cartHandle)
// router.post('/cart',cartHandle)
export default router