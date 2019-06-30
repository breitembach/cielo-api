import axios from 'axios';
import { Card, CardBinResponse, cardTokerized } from '../models/Card';
import CieloConfig from '../models/CieloConfig';
import { RecurrentPaymentResponse } from '../models/RecurrentPayment';
import { SaleRequest, SaleResponse } from '../models/Sales';

export default abstract class CieloServices {
  private params: CieloConfig;
  public constructor (initialConfig: CieloConfig) {
    this.params = initialConfig
    axios.defaults.headers['requestId'] = initialConfig.requestId
    // axios.defaults.headers['debug'] = '' // @TODO
    axios.defaults.headers['Content-Type'] = 'application/json'
    axios.defaults.headers['MerchantId'] = initialConfig.merchantId
    axios.defaults.headers['MerchantKey'] = initialConfig.merchantKey
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
  public async createTokenizedCard (card: Card): Promise<cardTokerized> {
    try {
      if (!card) {
        throw new Error('credit card is required')
      }
      const res = await axios.post(`${this.params.urlRequisicao}/1/card`, card)
      
      return res.data
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error(error.response.data)
    }
  }

  /**
   *
   * @param SaleRequest
   * @example POST /1/sales
   * @returns SaleResponse
   * @description POST /1/sales
   */
  public async postSales (data: SaleRequest): Promise<SaleResponse> {
    try {
      const res = await axios.post(`${this.params.urlRequisicao}/1/sales`, data)
      return res.data

    } catch (error) {
      throw new Error(error.response.data)
    }
  }

  /**
   * @param cardBin
   * @example GET /1/cardBin/${cardBin}
   * @description 6 first number of card
   */
  public async getCardbin (cardBin: number): Promise<CardBinResponse> {
    try {
      if (!cardBin) {
        throw new Error('cardBin is required')
      }
      const res = await axios.get(`${this.params.urlConsulta}/1/cardBin/${cardBin}`)

      return res.data
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error(error.response.data)
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

  public async recurrenceConsulting (recurrentPaymentId: string): Promise<RecurrentPaymentResponse> { // @TODO
    try {
      if (!recurrentPaymentId) {
        throw new Error('recurrentPaymentId is required')
      }
      return await axios.get(`${this.params.urlConsulta}/1/RecurrentPayment/${recurrentPaymentId}`)
    } catch (error) {
      throw error
    }
  }
}
