import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from 'components/Statistics/Statistics.styled';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>{<StatisticsItem stats={stats} />}</StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
