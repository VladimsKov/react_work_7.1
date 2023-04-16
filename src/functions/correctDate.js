function correctDate(dateValue) {
  const actualValue = Date.now();
  const formDateValue = Date.parse(dateValue.slice(0, 10) + "T" + dateValue.slice(-8));
  const diff = (actualValue - formDateValue) / (1000 * 3600);
  if (diff < 1) return "12 минут назад";
  if (diff >= 1 && diff < 24) return "5 часов назад";
  return `${Math.ceil(diff / 24)} дней назад`
}

export default correctDate;
