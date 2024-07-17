import { useFormatter } from "next-intl";

/** Utils for components */

export const formatDate = (dateString: string): string => {
  const format = useFormatter();

  return format.dateTime(new Date(dateString), {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Singapore",
  });
};
