import { differenceInCalendarDays, format, formatDistance } from 'date-fns';
import { DATE_FORMAT } from 'src/constants/constants';

export const formatDate = (
  value: string | null | undefined | Date,
  formatString: string = DATE_FORMAT,
) => {
  if (!value) return '';

  const date = new Date(value);

  return format(date, formatString);
};

export const formatDateDistance = (date?: string) => {
  if (!date) return '';

  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

export const daysBetween = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const diffInDays = differenceInCalendarDays(today, date);
  return diffInDays;
};
