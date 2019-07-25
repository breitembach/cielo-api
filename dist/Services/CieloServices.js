"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const CieloError_1 = __importDefault(require("../errors/CieloError"));
class CieloServices {
    constructor(initialConfig) {
        this.params = initialConfig;
        axios_1.default.defaults.headers['requestId'] = initialConfig.requestId;
        // axios.defaults.headers['debug'] = '' // @TODO
        axios_1.default.defaults.headers['Content-Type'] = 'application/json';
        axios_1.default.defaults.headers['MerchantId'] = initialConfig.merchantId;
        axios_1.default.defaults.headers['MerchantKey'] = initialConfig.merchantKey;
    }
    /**
     *
     * @param SaleRequest
     * @description PUT /1/sales/${sale.paymentId}/capture?amount=${sale.amount}
     */
    // public async putCaptureSale (sale: SaleRequest): Promise<SaleResponse> {
    //   // if (sale.serviceTaxAmount) {
    //   //   o.path += `/serviceTaxAmount=${data.serviceTaxAmount}`
    //   // }
    //   try {
    //     return await axios.put(`${this.params.urlRequisicao}/1/sales/${sale.paymentId}/capture?amount=${sale.amount}`, sale)
    //   } catch (error) {
    //     throw error;
    //   }
    // }
    /**
     * Cancela a venda - Dá preferencia para cancelar pelo paymentId, se não existir, utiliza o OrderId
     * @param {object} data
     * @param {callback} callback
     */
    // public cancelSale = (data) => {
    //   var o = {
    //     hostname: URL_REQUISICAO,
    //     method: 'PUT'
    //   }
    //   if (data.paymentId) {
    //     o.path = `/1/sales/${data.paymentId}/void`
    //   } else {
    //     o.path = `/1/sales/OrderId/${data.merchantOrderId}/void`
    //   }
    //   // Se o valor do cancelamento for informado, concatena na url
    //   if (data.amount > 0){
    //     o.path += `?amount=${data.amount}`
    //   }
    //   return get(Object.assign(requestOptions, o), data)
    // }
    /**
    * @param Card
    * @example POST /1/card
    * @description return Token Card
    */
    async createTokenizedCard(card) {
        if (!card) {
            throw new CieloError_1.default({ message: 'credit card is required' });
        }
        if (card.CardNumber.length !== 16) {
            throw new CieloError_1.default({ message: 'Número do cartão de credito deve ter 16 digitos' });
        }
        try {
            const res = await axios_1.default.post(`${this.params.urlRequisicao}/1/card`, card);
            return res.data;
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error(error.response.data);
        }
    }
    async getTokenizedCard(cardToken) {
        if (!cardToken) {
            throw new CieloError_1.default({ message: 'token Card is required' });
        }
        try {
            const res = await axios_1.default.get(`${this.params.urlConsulta}/1/card/${cardToken}`);
            return res.data;
        }
        catch (error) {
            throw new CieloError_1.default({
                errors: error.response.data,
                message: error.response.statusText,
                statusCode: error.response.status
            });
        }
    }
    /**
     *
     * @param SaleRequest
     * @example POST /1/sales
     * @returns SaleResponse
     * @description POST /1/sales
     */
    async createSaleCardTokenized(data) {
        try {
            const res = await axios_1.default.post(`${this.params.urlRequisicao}/1/sales`, data);
            return res.data;
        }
        catch (error) {
            throw new CieloError_1.default({
                errors: error.response.data,
                message: error.response.statusText,
                statusCode: error.response.status
            });
        }
    }
    /**
     * @param cardBin
     * @example GET /1/cardBin/${cardBin}
     * @description 6 first number of card
     */
    async getCardbin(cardBin) {
        if (!cardBin) {
            throw new CieloError_1.default({ message: 'cardBin is required' });
        }
        try {
            const res = await axios_1.default.get(`${this.params.urlConsulta}/1/cardBin/${cardBin}`);
            return res.data;
        }
        catch (error) {
            throw new CieloError_1.default({
                errors: error.response.data,
                message: error.response.statusText,
                statusCode: error.response.status
            });
        }
    }
    // public modifyingRecurrenceHandler = {
    //   get(target, name) {
    //     return function (data) {
    //       var o = {
    //         hostname: URL_REQUISICAO,
    //         method: 'PUT',
    //         path: `/1/RecurrentPayment/${data.recurrentPaymentId}/${name}`
    //       }
    //       return get(Object.assign(requestOptions, o), data[name] || {})
    //     }
    //   }
    // }
    async recurrenceConsulting(recurrentPaymentId) {
        if (!recurrentPaymentId) {
            throw new CieloError_1.default({ message: 'recurrentPaymentId is required' });
        }
        try {
            return await axios_1.default.get(`${this.params.urlConsulta}/1/RecurrentPayment/${recurrentPaymentId}`);
        }
        catch (error) {
            throw new CieloError_1.default({
                errors: error.response.data,
                message: error.response.statusText,
                statusCode: error.response.status
            });
        }
    }
}
exports.default = CieloServices;
