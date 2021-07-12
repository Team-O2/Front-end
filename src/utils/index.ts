import dayjs from 'dayjs';

export const changeDateFormat = (date: Date): string => {
  return dayjs(date).format('YYYY. MM. DD');
};
