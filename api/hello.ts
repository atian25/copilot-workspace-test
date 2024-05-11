import { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse): void {
  res.json({ message: 'Hello from Vercel Function!' });
}
