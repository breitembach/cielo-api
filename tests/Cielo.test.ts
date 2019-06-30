import { CieloApi } from '../src/Cielo';

new CieloApi.Cielo({
  merchantId: '',//@TODO
  merchantKey: '',//@TODO
  isSandBox: true
})

describe('CardBin', () => {
  beforeAll(function() {
    
  })
  
  test('Should Be Return CardBin data > GET', async () => {
    try {
     
      expect.assertions(1)
      const res = await CieloApi.getInstance.getCardbin(418466)
      
      expect(res).toEqual({ Status: '00',
      Provider: 'VISA',
      CardType: 'Multiplo',
      ForeignCard: true,
      CorporateCard: false,
      Issuer: 'Bradesco',
      IssuerCode: '237' })
    } catch (error) {
      console.log(error);
      
    }
  })
})

describe('Card Tokerized', () => {
  
  test('Should Be Return TokenizedCard > POST', async () => {
    try {
      expect.assertions(1)
      const res = await CieloApi.getInstance.createTokenizedCard({
        Brand: "Visa",
        CardNumber: "4184669814440303",
        CustomerName: "Jesus Burns",
        ExpirationDate: "04/2021",
        Holder: "955"
      })
      
      expect(res).toHaveProperty('CardToken')
    } catch (error) {
      console.log(error);
      
    }
  })
  test('Should Be Return created SALES With CardTokerized > POST', async () => {
    try {
      expect.assertions(1)
      const res = await CieloApi.getInstance.postSales({
        Customer: {
          Name: "lucas"
        },
        MerchantOrderId: "asdasdd",
        Payment: {
          Amount: 100,
          CreditCard: {
            Brand: "Master",
            CardToken: "123023-323-444"
          },
          Installments: 1,
          Type: 'CreditCard'
        }
      })
      expect(res).toMatchObject({
        "Customer": {
          "Name": "lucas",
        },
        "MerchantOrderId": "asdasdd",
        "Payment": {
          "Amount": 100,
          "Authenticate": false,
          "Capture": false,
          "Country": "BRA",
          "CreditCard": {
            "Brand": "Master",
            "CardToken": "123023-323-444",
            "SaveCard": false,
          },
          "Currency": "BRL",
          "Installments": 1,
          "Interest": 0,
          "IsQrCode": false,
          "IsSplitted": false,
          "Provider": "Simulado",
          "Recurrent": false,
          "ReturnCode": "4",
          "ReturnMessage": "Operation Successful",
          "ServiceTaxAmount": 0,
          "Status": 1,
          "Type": "CreditCard",
        }
      })
    } catch (error) {
      console.log(error);
      
    }
  })
  
})





