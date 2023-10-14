import DateSelector from './DateSelector/DateSelector';

const StatisticsDashboard = ({
  changeYear,
  changeMonth,
  selectedYear,
  selectedMonth,
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentYear = new Date().getFullYear();

  const monthOptions = months.map(month => ({
    value: month,
    label: month,
  }));
  const yearOptions = Array.from({ length: 5 }, (_, idx) => ({
    value: currentYear - idx,
    label: String(currentYear - idx),
  }));
  return (
    <>
      <DateSelector
        options={monthOptions}
        value={selectedMonth}
        onChange={changeMonth}
        ariaLabel={'Select month'}
      />
      <DateSelector
        options={yearOptions}
        value={selectedYear}
        onChange={changeYear}
        ariaLabel={'Select year'}
      />
    </>
  );
};

export default StatisticsDashboard;
