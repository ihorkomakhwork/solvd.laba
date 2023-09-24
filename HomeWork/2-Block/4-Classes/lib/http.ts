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

// it's our HTTP server realization base on RPC princeple instead of REST
export default class HTTP{
  
  // We get the routing object and it's can be any key-value object
  //So structure of this object is not important for us
  //It's also show polymorphism
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
      // We can use destructuring to get the url all information
      // about the request
      const [place, name, method] = url.substring(1).split('/');

      if (place !== 'api') return res.end('"Not found place"');
      if (!name || !this.routing[name]) return res.end('Not found route');
      if (!method || !this.routing[name][method]) return res.end('Not found method');
      
      const args = await receiveArgs(req);
      console.log(`${req.method} ${method} ${url}`);
      
      // In this case we now that API have enteries and methods
      // So we can use this fact and call method by name
      const result = await this.routing[name][method](...args);
      res.end(JSON.stringify(result.rows));
  }
};