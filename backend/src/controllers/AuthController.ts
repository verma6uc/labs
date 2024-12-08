import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { getUserAgent } from '../utils/request';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const deviceInfo = getUserAgent(req);
      const ipAddress = req.ip;

      const result = await this.authService.login(email, password, deviceInfo, ipAddress);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async forgotPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const result = await this.authService.forgotPassword(email);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async resetPassword(req: Request, res: Response) {
    try {
      const { token, newPassword } = req.body;
      const result = await this.authService.resetPassword(token, newPassword);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const { sessionId } = req.body;
      const result = await this.authService.logout(sessionId);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getSessionHistory(req: Request, res: Response) {
    try {
      const userId = req.user.id; // Assuming user is attached by auth middleware
      const sessions = await this.authService.getSessionHistory(userId);
      res.json(sessions);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
