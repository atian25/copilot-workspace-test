import { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse): void {
  const visitTime = new Date().toISOString();
  res.json({ message: 'Hello from Vercel Function!', visitTime });
}
