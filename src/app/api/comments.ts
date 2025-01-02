import { NextApiRequest, NextApiResponse } from "next";

let comments: { id: number; name: string; message: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { name, message } = req.body;
    const newComment = { id: comments.length + 1, name, message };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}