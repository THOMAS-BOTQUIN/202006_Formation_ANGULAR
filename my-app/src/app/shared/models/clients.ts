import { StateClient } from "../enums/state-client.enum";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  state: StateClient;
  tva: number;
  id: number;
  name: string;
  ca: number;
  comment: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

