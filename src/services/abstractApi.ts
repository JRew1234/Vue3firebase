import { CurrencyByCountries } from "@/Enums/curencyByCountries";
import { API_KEYS } from "../variables/env";

export const api_url = `https://exchange-rates.abstractapi.com/v1/live?api_key=${API_KEYS.EXCHANGE_RATE_API_KEY}&base=${CurrencyByCountries.POLISH}&target=${CurrencyByCountries.GREAT_BRITAIN},${CurrencyByCountries.UNITED_STATES},${CurrencyByCountries.EUROPE}`;
