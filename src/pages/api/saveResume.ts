// pages/api/saveResume.js
import pool from "@/helpers/utils/pg-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { updatedResumeJson } = req.body;

    try {
      const query = 'UPDATE "RelevantJob" SET "resumeJson" = $1 WHERE "userId" = $2 RETURNING *';
      const values = [updatedResumeJson, 1]; // Assuming user id is 1

      const result = await pool.query(query, values);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
