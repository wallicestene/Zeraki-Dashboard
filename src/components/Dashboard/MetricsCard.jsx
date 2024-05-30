/* eslint-disable react/prop-types */
import CountUp from 'react-countup';

const MetricsCard = ({ title, value }) => {
  return (
    <div className="  bg-jade-950 text-jade-50 p-5 rounded-md shadow-lg space-y-2">
      <p className=" text-sm font-semibold">{title}</p>
      <p className=" text-2xl p-2  bg-jade-900 text-jade-200 inline-block rounded-full bg-opacity-50"><CountUp end={value} delay={1} duration={4} /></p>
    </div>
  );
};

export default MetricsCard;
