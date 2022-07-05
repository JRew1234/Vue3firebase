import dayjs from "dayjs";
import UTC from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(UTC);
dayjs.extend(localizedFormat);
export default function useDate() {
  const getLocalizedDate = (): string => {
    return dayjs().format("DD dddd HH:mm:ss");
  };
  return { getLocalizedDate };
}
