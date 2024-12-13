import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { authMiddleware, roleMiddleware } from '../middleware/auth';
import { UserRole } from '../entities/User';

const router = Router();
const authController = new AuthController();

// Public routes
router.post('/login', authController.login.bind(authController));
router.post('/forgot-password', authController.forgotPassword.bind(authController));
router.post('/reset-password', authController.resetPassword.bind(authController));

// Protected routes
router.use(authMiddleware);
router.post('/logout', authController.logout.bind(authController));
router.get('/sessions', authController.getSessionHistory.bind(authController));

// Super admin only routes
router.get('/users', roleMiddleware([UserRole.SUPERADMIN]), async (_req, res) => {
  try {
    const users = await authController.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

export default router;
