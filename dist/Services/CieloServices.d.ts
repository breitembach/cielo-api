import { Card, CardBinResponse, cardTokerized } from '../models/Card';
import CieloConfig from '../models/CieloConfig';
import { RecurrentPaymentResponse } from '../models/RecurrentPayment';
import { SaleRequest, SaleResponse } from '../models/Sales';
export default abstract class CieloServices {
    private params;
    constructor(initialConfig: CieloConfig);
    /**
     *
     * @param SaleRequest
     * @description PUT /1/sales/${sale.paymentId}/capture?amount=${sale.amount}
     */
    /**
     * Cancela a venda - Dá preferencia para cancelar pelo paymentId, se não existir, utiliza o OrderId
     * @param {object} data
     * @param {callback} callback
     */
    /**
    * @param Card
    * @example POST /1/card
    * @description return Token Card
    */
    createTokenizedCard(card: Card): Promise<cardTokerized>;
    /**
     *
     * @param SaleRequest
     * @example POST /1/sales
     * @returns SaleResponse
     * @description POST /1/sales
     */
    postSales(data: SaleRequest): Promise<SaleResponse>;
    /**
     * @param cardBin
     * @example GET /1/cardBin/${cardBin}
     * @description 6 first number of card
     */
    getCardbin(cardBin: number): Promise<CardBinResponse>;
    recurrenceConsulting(recurrentPaymentId: string): Promise<RecurrentPaymentResponse>;
}
