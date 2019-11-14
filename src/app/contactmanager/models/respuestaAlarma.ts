import { preguntaList } from "./preguntaList";

export class RespuestaFinal {
    id: string;
    documentNumber: string;
    alarmDate: string;
    preguntaList: Array<preguntaList> = [];
}