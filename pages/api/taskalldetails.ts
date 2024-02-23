// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ITask, IVideo } from "@/interface/apiresponse.interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  detailsall: IVideo[];
};

// https://api.meetgpt.ai/api/agent/c9b68873-878a-4e97-b2dd-06dc9133c22c/task/2abd98db-9cad-4e64-8b0d-a5af00b283bf

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const taskArr = req.body?.tasks;
  const promises = taskArr.map((task: ITask) => {
    return fetch(
      `https://api.meetgpt.ai/api/agent/c9b68873-878a-4e97-b2dd-06dc9133c22c/task/${task.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((res) => res.json());
  });

  Promise.all(promises).then((results) => {
    const videos: IVideo[] = results.map((result) => result);
    res.status(200).json({ detailsall: videos });
  });
}
