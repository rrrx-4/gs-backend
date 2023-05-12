// import e from 'express'
import express from 'express'

import { getUsers, editUser } from '../controllers/usercontr.js';


export const router = express.Router()


router.get('/users', getUsers);

router.patch('/edit/:_id', editUser);


// export default router;