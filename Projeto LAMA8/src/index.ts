import express from "express";
import {AddressInfo} from "net";


const app = express();

app.use(express.json());

app.use("/users", );

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});