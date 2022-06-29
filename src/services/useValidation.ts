export default function useValidation() {
  const emailRegex = /.+@.+\..+/;
  const passwordRegex =
    // eslint-disable-next-line no-useless-escape
    /^((?=.{8,14}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*|(?=.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!\u0022#$%&'()*+,./:;<=>?@[\]\^_`{|}~-]).*)/;
  const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  const isEmailValid = (value: string): boolean | string => {
    return emailRegex.test(value);
  };
  const isPasswordValid = (value: string): boolean | string => {
    return passwordRegex.test(value);
  };

  const isNameValid = (value: string): boolean | string => {
    return nameRegex.test(value);
  };

  const isSelectValid = (value: string): boolean | string => {
    return value.length > 0;
  };

  return { isEmailValid, isPasswordValid, isNameValid, isSelectValid };
}
