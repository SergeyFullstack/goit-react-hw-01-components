import { getRandomHexColor } from 'getRandom';
import PropTypes from 'prop-types';
import { StatisticsItemStyle } from 'components/Statistics/Statistics.styled';

export const StatisticsItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <StatisticsItemStyle key={id} backgrounds={getRandomHexColor()}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </StatisticsItemStyle>
    );
  });
};

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
