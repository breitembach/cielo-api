import CieloConfig from './models/CieloConfig';
import CieloParams from './models/CieloParams';
import CieloServices from './Services/CieloServices';
import CieloError from './errors/CieloError';

export namespace CieloApi {
  export let getInstance: Cielo

  export class Cielo extends CieloServices {
  
    public constructor (cieloParams: CieloParams) {
      cieloParams.isSandBox = cieloParams.isSandBox || true
      if (!cieloParams.merchantId || !cieloParams.merchantKey) {
        throw new CieloError({message: 'MerchantId && merchantKey is Required'})
      }
      const initialConfig: CieloConfig = {
        isSandBox: cieloParams.isSandBox,
        requestId: cieloParams.requestId || '',
        merchantId: cieloParams.merchantId,
        merchantKey: cieloParams.merchantKey,
        urlConsulta: (cieloParams.isSandBox) ? 'https://apiquerysandbox.cieloecommerce.cielo.com.br' : 'https://api.cieloecommerce.cielo.com.br',
        urlRequisicao: (cieloParams.isSandBox) ? 'https://apisandbox.cieloecommerce.cielo.com.br' : 'https://apiquery.cieloecommerce.cielo.com.br'
      }
      super(initialConfig)
      getInstance = this
    }
  }
}

