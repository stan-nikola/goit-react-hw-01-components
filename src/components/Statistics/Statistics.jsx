import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  StatisticTitle,
  StatisticItem,
  StatisticPercent,
} from './Statistics.styled';

export const Statistics = ({ stats, title = '' }) => {
  return (
    <Box
      width={300}
      borderRadius={'normal'}
      bg="cardBg"
      overflow="hidden"
      mt={4}
      boxShadow="mainCard"
      as="div"
    >
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <Box display="flex" flexWrap="wrap" as="ul" justifyContent="center">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} fileName={label}>
            <span>{label}</span>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticItem>
        ))}
      </Box>
    </Box>
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
