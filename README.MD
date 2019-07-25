## cielo

API 3.0 da Cielo em NodeJs com suporte Typescript

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Índice

#### [Início](#instalacao)
+ [Instalação](#instalacao)
+ [Como Utilizar](#howuse)
+ [Paramêtros de criação](#params)
+ [Handle Erros](#handleErros)

#### [Cartão de Crédito](#creditCard)
+ [Criando uma transação simples](#creditSimpleTransaction) @TODO
+ [Criando uma transação completa](#creditCompleteTransaction) @TODO
+ [Criando uma venda com Autenticação](#creditAuthenticationTransaction) @TODO
+ [Criando uma venda com Análise de Fraude](#creditFraudTransaction) @TODO
+ [Criando uma venda com Card Token](#creditCardTokenTransaction)@TODO
+ [Capturando uma venda](#creditSaleCapture)@TODO
+ [Cancelando uma venda](#creditCancelSale)@TODO

#### [Cartão de Débito](#debitCard)
+ [Criando uma venda simplificada](#debitSimpleTransaction)@TODO

#### [Transferência Eletrônica](#bankSlip)
+ [Criando uma venda simplificada](#bankSlipSimpleTransaction)@TODO

#### [Boleto](#boleto)
+ [Criando uma venda de Boleto](#boletoSale)@TODO

### [Recorrência](#recorrencia)
+ [Criando Recorrências](#creating)@TODO
+ [Modificando Recorrências](#modifyRecurrence)@TODO
  * [Modificando dados do comprador](#modifyRecurrenceCustomer)@TODO
  * [Modificando data final da Recorrência](#modifyRecurrenceEndDate)@TODO
  * [Modificando intevalo da Recorrência](#modifyRecurrenceInterval)@TODO
  * [Modificando dia da Recorrência](#modifyRecurrenceRecurrencyDay)@TODO
  * [Modificando o valor da Recorrência](#modifyRecurrenceAmount)@TODO
  * [Modificando data do próximo Pagamento](#modifyRecurrenceNextPaymentDate)@TODO
  * [Modificando dados do Pagamento da Recorrência](#modifyRecurrencePayment)@TODO
  * [Desabilitando um Pedido Recorrente](#modifyRecurrenceDeactivate)@TODO
  * [Reabilitando um Pedido Recorrente](#modifyRecurrenceReactivate)@TODO

#### [Cartões](#cartoes)
+ [Gerando o token de um cartão](#cartoesToken)

#### [Consultas](#consulta)
+ [Consultando as transações usando PaymentID](#consultaPaymentId)@TODO
+ [Consultando as transações usando MerchandOrderID](#consultaMerchandOrderID)@TODO
+ [Consulta de Cardbin](#consultaCardbin)
+ [Consulta de Recorrência](#recurrenceConsulting)@TODO


#### [API Reference](#apiReference)
#### [Testes](#testes)
#### [License](#license)

## <a name="instalacao"></a> Installation
```js
npm install --save cielo-api
```

## <a name="howuse"></a> Como utilizar?

### Iniciando

```js
const ApiCielo = require('cielo-api').CieloApi

# Ou importando com Typescript
import { CieloApi } from 'cielo-api'

const cielo = new CieloApi.Cielo({
    MerchantId: 'xxxxxxxxxxxxxxxxxxxxxxx',
    MerchantKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    RequestId: 'xxxxxxx', // Opcional - Identificação do Servidor na Cielo
    isSandbox: true // Opcional - Ambiente de Testes
}
  cielo.<method>

ou então você poderá chamar assim:

  CieloApi.getInstance.<method>

```
## <a name="handleErros"></a> Lidando com Erros
### Receber erros 
```js
try {
  throw CieloError({message: 'todas as propriedades aqui é opcional :)'})
} catch (error) {
  if(error instanceof CieloError) {
    error.message
    error.statusCode
    error.erros[0].Code
    error.erros[0].Message
    
  }
}
```


### <a name="params"></a> Paramêtros de criação

| Campo | Descrição | Obrigatório? | Default |
| ------------- |:-------------:| -----:| -----:|
| MerchantId | Identificador da loja na Cielo. | Sim | null |
| MerchantKey | Chave Publica para Autenticação Dupla na Cielo. | Sim | null |
| RequestId | Identificador do Request, utilizado quando o lojista usa diferentes servidores para cada GET/POST/PUT. | Não | null |
| isSandBox | Ambiente de testes da Cielo | Não | false |

## <a name="creditCard"></a> Cartão de Crédito

### <a name="creditSimpleTransaction"></a>  Criando uma transação com cartão Tokerizado


```js

try {
  const res = await CieloApi.getInstance.createSaleCardTokenized({
    Customer: {
      Name: "Nome do Cliente"
    },
    MerchantOrderId: "123124124123",
    Payment: {
      Amount: 100,
      CreditCard: {
        Brand: "Master",
        CardToken: "123023-32322-44224-22223-444-444"
      },
      Installments: 1,
      Type: 'CreditCard'
    }
  })

}catch (e) {
  console.log(e.message)
}

```

## <a name="cartoesToken"></a> Cartões

### <a name="creditSimpleTransaction"></a>  Gerando o token de um cartão


```js

try {
  const res = await CieloApi.getInstance.createTokenizedCard({
    Brand: "Visa",
    CardNumber: "4184669814440303",
    CustomerName: "Jesus Burns",
    ExpirationDate: "04/2021",
    Holder: "955"
  })

}catch (e) {
  console.log(e.message)
}

```

## <a name="consulta"></a> Consultas

### <a name="consultaCardbin"></a>  Consulta de card Bin

```js

try {
  const res = await CieloApi.getInstance.getCardbin(123456)

}catch (e) {
  console.log(e.message)
}

```


## <a name="apiReference"></a> API Reference

Consulte os campos necessários na documentação da Cielo

[PT-Br](https://developercielo.github.io/manual/cielo-ecommerce)

[En](https://developercielo.github.io/en/manual/cielo-ecommerce)

## <a name="testes"></a> Testes

Para rodar os testes automatizados, apenas execute o seguinte comando

```
npm test
```

## <a name="autor"></a> Autor

Lucas Breitembach

## <a name="license"></a> License

MIT License

Copyright (c) 2019 Lucas Breitembach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
