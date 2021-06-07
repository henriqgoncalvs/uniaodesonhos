import { useEffect, useState } from 'react';

type UseDeviceTypeProps = 'desktop' | 'tablet' | 'mobile' | undefined;

function useDeviceType() {
  const [deviceType, setDeviceType] = useState<UseDeviceTypeProps>(undefined);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width > 1024) {
        return setDeviceType('desktop');
      }

      if (width > 464) {
        return setDeviceType('tablet');
      }

      return setDeviceType('mobile');
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    console.log(deviceType);
  }, [deviceType]);

  return deviceType;
}

export default useDeviceType;
