import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IWhyUsPoint } from '../../../types/types';
import WhyUsPoint from './WhyUsPoint/WhyUsPoint';

const Points: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [whyUsPoints, whyUsPetPoints] = useState<IWhyUsPoint[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (i18n.isInitialized) {
      // Only update when translations are loaded
      whyUsPetPoints(
        t('whyChoose.points', { returnObjects: true }) as IWhyUsPoint[]
      );
      setLoading(false); // Mark loading as complete once data is available
    }
  }, [i18n, t]); // Re-run this effect if i18n or t changes

  if (loading) {
    return <p>Loading why us points...</p>; // Show loading message until translations are ready
  }

  if (whyUsPoints.length === 0) {
    return <p>There are no why us points available.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-20 mb-10">
      {whyUsPoints.map((point) => (
        <WhyUsPoint key={point.title} {...point} />
      ))}
    </div>
  );
};

export default Points;
