import { Router } from 'express';

import ReferMe from '../controllers/ReferMe';

const router = new Router();

router.use('/referMe', ReferMe);

export default router;
