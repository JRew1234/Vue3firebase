export class CurrencyExchangeDto {
  public currencyExchangeTitle: string | null = null;
  public currencyExchangeRate: number | null = null;
}

export class CurrencyExchange extends CurrencyExchangeDto {
  // public get test (){
  //     return this.currencyExchangeRate! *2;
  // }

  constructor(dto?: CurrencyExchangeDto) {
    super();
    if (dto) {
      Object.assign(this, dto);
    }
  }
}
