import express from 'express';
import linkController from '../Controllers/LinksController.js';
const router = express.Router();


router.get('/', linkController.getAllLinks);

router.post('/', linkController.addLink);

router.put('/:id', linkController.updateLink);

router.delete('/:id', linkController.deleteLink);

router.get('/user-links/:userId', linkController.getUserLinks);

router.get('/:id', linkController.redirect);
router.get('/:id/click-stats', linkController.getClickStats); 

export default router;
