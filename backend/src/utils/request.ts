import { Request } from 'express';

export const getUserAgent = (req: Request): string => {
  const userAgent = req.headers['user-agent'] || 'Unknown';
  const platform = req.headers['sec-ch-ua-platform'] || 'Unknown Platform';
  return `${userAgent} (${platform})`;
};
