// pages/api/getResumeData.ts
import pool from "@/helpers/utils/pg-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const query = 'SELECT * FROM "RelevantJob" WHERE "userId" = $1';
      const values = [1]; // Assuming user id is 1

      const result = await pool.query(query, values);
      console.log(result.rows[0].resumeJson);
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0].resumeJson);
      } else {
        res.status(404).json({ error: "No resume data found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
