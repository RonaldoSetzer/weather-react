import { useState, useEffect } from 'react';

import { getImageOfDay } from '../services/bingAPI';

function useBingBackground() {
  const [payload, setPayload] = useState();

  useEffect(() => {
    getImageOfDay().then(setPayload);
  }, []);

  return { url: payload?.url };
}
export default useBingBackground;
