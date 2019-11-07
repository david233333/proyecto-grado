import { nic } from './nic';
import { diagnostico } from './diagnosticos';
import { nocs } from './nocs';

export class dfx{
    documentNumber:string;
    domainName:string;
    diagnostic:diagnostico;
    noc:nocs;
    nic:nic
}