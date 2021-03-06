"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CieloServices_1 = __importDefault(require("./Services/CieloServices"));
const CieloError_1 = __importDefault(require("./errors/CieloError"));
var CieloApi;
(function (CieloApi) {
    class Cielo extends CieloServices_1.default {
        constructor(cieloParams) {
            cieloParams.isSandBox = cieloParams.isSandBox || true;
            if (!cieloParams.merchantId || !cieloParams.merchantKey) {
                throw new CieloError_1.default({ message: 'MerchantId && merchantKey is Required' });
            }
            const initialConfig = {
                isSandBox: cieloParams.isSandBox,
                requestId: cieloParams.requestId || '',
                merchantId: cieloParams.merchantId,
                merchantKey: cieloParams.merchantKey,
                urlConsulta: (cieloParams.isSandBox) ? 'https://apiquerysandbox.cieloecommerce.cielo.com.br' : 'https://api.cieloecommerce.cielo.com.br',
                urlRequisicao: (cieloParams.isSandBox) ? 'https://apisandbox.cieloecommerce.cielo.com.br' : 'https://apiquery.cieloecommerce.cielo.com.br'
            };
            super(initialConfig);
            CieloApi.getInstance = this;
        }
    }
    CieloApi.Cielo = Cielo;
})(CieloApi = exports.CieloApi || (exports.CieloApi = {}));
