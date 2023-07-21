import express, { Application, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Request, Response } from 'express';

class Server {

    public app: Application;

    //Constructor.
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Configuración inicial de la aplicación.
    config(): void {
        this.app.set('port', 3001);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(morgan('dev'));
    }

    //Rutas principales de acceso.
    routes(): void {
        this.app.get('/epay', (req: Request, res: Response) => {
            res.json({ "ok": true, "DataEpay": "Test" }).status(200);
            console.log(req.body);
        });
    }

    //Inicialización de la API.
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });

    }
}


const server = new Server();
server.start();