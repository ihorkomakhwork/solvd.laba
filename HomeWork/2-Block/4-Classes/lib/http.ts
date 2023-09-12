import http from 'node:http';

const HEADERS = {
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=UTF-8',
};

const receiveArgs = async (req: any ) => {
  const buffers: any = [];
  for await (const chunk of req) buffers.push(chunk);
  const data = Buffer.concat(buffers).toString();
  return data ? JSON.parse(data) : null;
};

export default class HTTP{
  
  constructor(public routing: Record<string, any>, 
              public readonly port: number) {}
  
    async start() { 
      http.createServer(this.handler.bind(this)).listen(this.port);
      console.log(`HTTP API on port ${this.port}`);
    }
    
    private async handler (req: Record<string, any>, res: Record<string, any>) {
      res.writeHead(200, HEADERS);
      if (req.method !== 'POST') return res.end('"Only POST allowed"');
      const { url, socket } = req;
      const [place, name, method] = url.substring(1).split('/');

      if (place !== 'api') return res.end('"Not found place"');
      if (!name || !this.routing[name]) return res.end('Not found route');
      if (!method || !this.routing[name][method]) return res.end('Not found method');
      
      const args = await receiveArgs(req);
      
      console.log(`${req.method} ${method} ${url}`);
      
      
      const result = await this.routing[name][method](...args);
      res.end(JSON.stringify(result.rows));
  }
};