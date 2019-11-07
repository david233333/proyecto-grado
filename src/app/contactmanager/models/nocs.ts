import { Indicators } from "./Indicators";

export class nocs{
    id:string;
    diagnosticId:string;
    nocCode:string;
    nocName:string;
    nocDefinition:string
    indicatorsList: Array<Indicators>
}