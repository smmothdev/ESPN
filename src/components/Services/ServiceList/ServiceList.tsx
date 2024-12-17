import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IService } from '../../../types/types';
import ServiceLine from './ServiceLine/ServiceLine';

const ServiceList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [serviceList, setServiceList] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (i18n.isInitialized) {
      // Only update when translations are loaded
      setServiceList(
        t('services.items', { returnObjects: true }) as IService[]
      );
      setLoading(false); // Mark loading as complete once data is available
    }
  }, [i18n, t]); // Re-run this effect if i18n or t changes

  if (loading) {
    return <p>Loading services...</p>; // Show loading message until translations are ready
  }

  if (serviceList.length === 0) {
    return <p>There are no services available.</p>;
  }
  return (
    <div className="flex flex-col gap-14 mt-16 px-4">
      {serviceList.map((service, index) => (
        <ServiceLine
          key={service.name}
          {...service}
          number={(index + 1).toString().padStart(2, '0')}
        />
      ))}
    </div>
  );
};

export default ServiceList;
