import { prisma } from '../../../server/db/client'

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    // case 'GET':
    //     res.status(200).json({ message: 'Hello World!' });
    //     break;
    case 'POST':
        const {title, description} = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                description
            },
        });
        res.status(201).json(post);
        break;
    default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
  }
}