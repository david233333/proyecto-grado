import { nic } from '../../nics/entity/nic';
import { diagnostico } from '../../diagnosticos/entity/diagnosticos';
import { nocs } from '../../nocs/entity/nocs';

export class dfx{
    documentNumber:string;
    domainName:string;
    diagnostic:diagnostico;
    noc:nocs;
    nic:nic
}