import http from "node:http";
import fs from "node:fs";
import path from "node:path";

export default (root: string, port: number) => {
  http.createServer(async (req: Record<string, any>, res: Record<string, any>) => {
    const url = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(root, url);
    console.log(filePath)
    try {
      const data = await fs.promises.readFile(filePath);
      res.end(data);
    } catch (err) {
      res.statusCode = 404;
      res.end('"File is not found"');
    }
  }).listen(port);

  console.log(`Static on port ${port}`);
};