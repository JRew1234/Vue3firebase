import { CurrencyByCountries } from "../Enums/curencyByCountries";

export class LoginUser {
  email: string | null = null;
  password: string | null = null;
}
export class RegisterUser extends LoginUser {
  firstName: string | null = null;
  lastName: string | null = null;
  currency: CurrencyByCountries = CurrencyByCountries.POLISH;
}
