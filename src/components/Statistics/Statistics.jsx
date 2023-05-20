import PropTypes from 'prop-types';
import { getRandomHexColor } from 'getRandom';
import {
  
  StatisticsSection,
  StatisticsTitle,
} from 'components/Statistics/Statistics.styled';
// import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import { StatisticsItemStyle } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>   
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItemStyle key={id} backgrounds={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsItemStyle>
        ))}
    </StatisticsSection>
  );
};




Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

