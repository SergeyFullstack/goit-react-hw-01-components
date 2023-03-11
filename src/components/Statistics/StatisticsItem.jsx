import { getRandomHexColor } from 'components/getRandom';
import PropTypes from 'prop-types';
import { StatisticsItemStyle } from 'components/Statistics/Statistics.styled';

export const StatisticsItem = ({ stats }) => {
  return stats.map(stat => {
    return (
      <StatisticsItemStyle key={stat.id} backgrounds={getRandomHexColor()}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
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
