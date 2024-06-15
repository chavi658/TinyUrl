import express from 'express';
import UsersController from '../Controllers/UsersController.js';

const router = express.Router();

router.get('/', UsersController.getAllUsers);

router.get('/:id', UsersController.getUserById);

router.post('/', UsersController.addUser);

router.put('/:id', UsersController.updateUser);

router.delete('/:id', UsersController.deleteUser);

export default router;
