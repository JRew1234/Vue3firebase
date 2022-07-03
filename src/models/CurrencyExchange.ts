export class CurrencyExchangeDto {
  public currencyExchangeTitle: string | null = null;
  public currencyDefaultExchangeRate: number | null = null;
}

export class CurrencyExchange extends CurrencyExchangeDto {
  constructor(dto?: CurrencyExchangeDto) {
    super();
    if (dto) {
      Object.assign(this, dto);
    }
  }
  get currencyExchangeRate() {
    return 1 / this.currencyDefaultExchangeRate!;
  }
}

//TODO to niżej

// const responseObject = Object.values(response);
// console.log(response);
// const dataObject = responseObject[0].exchange_rates;
// for (const currency in dataObject) {
//   const currencyObject = <any>{};
//   const keyOfCurrencyObject = `${currency}/${CurrencyByCountries.POLISH}`;
//   const decimalCurrency = new Decimal(1 / dataObject[currency]);
//   currencyObject["currencyExchangeTitle"] = keyOfCurrencyObject;
//   currencyObject["currencyExchangeRate"] =
//       decimalCurrency.toDecimalPlaces(4);
//   array.push(new CurrencyExchange(currencyObject));
