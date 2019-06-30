import CieloParams from './models/CieloParams';
import CieloServices from './Services/CieloServices';
export declare namespace CieloApi {
    let getInstance: Cielo;
    class Cielo extends CieloServices {
        constructor(cieloParams: CieloParams);
    }
}
