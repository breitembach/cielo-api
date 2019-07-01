"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
        try {
            if (!card) {
                throw new Error('credit card is required');
            }
            if (card.CardNumber.length !== 16) {
                throw new Error('Número do cartão de credito deve ter 16 digitos');
            }
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
        try {
            if (!cardToken) {
                throw new Error('token Card is required');
            }
            const res = await axios_1.default.get(`${this.params.urlConsulta}/1/card/${cardToken}`);
            return res.data;
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error(error.response.data);
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
            throw new Error(error.response.data);
        }
    }
    /**
     * @param cardBin
     * @example GET /1/cardBin/${cardBin}
     * @description 6 first number of card
     */
    async getCardbin(cardBin) {
        try {
            if (!cardBin) {
                throw new Error('cardBin is required');
            }
            const res = await axios_1.default.get(`${this.params.urlConsulta}/1/cardBin/${cardBin}`);
            return res.data;
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error(error.response.data);
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
        try {
            if (!recurrentPaymentId) {
                throw new Error('recurrentPaymentId is required');
            }
            return await axios_1.default.get(`${this.params.urlConsulta}/1/RecurrentPayment/${recurrentPaymentId}`);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = CieloServices;
