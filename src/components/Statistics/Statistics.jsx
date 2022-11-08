import PropTypes from 'prop-types';
import {
  StatisticCard,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticPercent,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticCard>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} type={label}>
            <span>{label}</span>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
