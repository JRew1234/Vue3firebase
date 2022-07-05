export default function useValidation() {
  const emailRegex = /.+@.+\..+/;
  const passwordRegex =
    // eslint-disable-next-line no-useless-escape
    /^((?=.{8,14}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*|(?=.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!\u0022#$%&'()*+,./:;<=>?@[\]\^_`{|}~-]).*)/;
  const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  const isEmailValid = (value: string): boolean => {
    return emailRegex.test(value);
  };
  const isPasswordValid = (value: string): boolean => {
    return passwordRegex.test(value);
  };

  const isNameValid = (value: string): boolean => {
    return nameRegex.test(value);
  };

  const isSelectValid = (value: string): boolean => {
    return value.length > 0;
  };

  return { isEmailValid, isPasswordValid, isNameValid, isSelectValid };
}
