import dayjs from 'dayjs';

export const changeDateFormat = (date: Date | string): string => {
  return dayjs(date).format('YYYY. MM. DD');
};

export const changeArrToString = (arr: string[]): string => {
  return '[' + arr.map((item) => '"' + item + '"').toString() + ']';
};

export const getTimeForToday = (value: string) => {
  const today = new Date();
  const timeValue = new Date(value);

  const uploadTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (uploadTime < 1) {
    return '방금전';
  } else if (uploadTime < 60) {
    return `${uploadTime}분전`;
  }

  const uploadTimeHour = Math.floor(uploadTime / 60);
  if (uploadTimeHour < 24) {
    return `${uploadTimeHour}시간전`;
  }

  const uploadTimeDay = Math.floor(uploadTimeHour / 60 / 24);
  if (uploadTimeDay < 365) {
    return dayjs(value).format('YYYY.MM.DD');
  }
};
