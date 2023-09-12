import config from "./config";
import API from "./app/api";
import Transport from './lib/http';
import path from "path";

(async () => {
    const api = new API();
    const server = new Transport(api , config.api.port);
    server.start();
})();