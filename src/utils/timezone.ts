import { format, formatInTimeZone } from 'date-fns-tz';

export function formatSpaceTime(date: Date | string | number) {
  const dateObj = new Date(date);
  
  // Format in US Eastern Time
  const usTime = formatInTimeZone(dateObj, 'America/New_York', 'MMM d, yyyy h:mm a zzz');
  
  // Format in Korean Standard Time
  const krTime = formatInTimeZone(dateObj, 'Asia/Seoul', 'yyyy년 M월 d일 a h:mm zzz');
  
  return {
    us: usTime,
    kr: krTime
  };
}
