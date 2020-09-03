import { useState, useEffect } from 'react';

function useLoading(trigger, weather, forecast) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (trigger) {
      setLoading(true);
    }
  }, [trigger]);

  useEffect(() => {
    if (loading && !weather.isEmpty && !forecast.isEmpty) {
      setLoading(false);
    }
  }, [weather, forecast]);

  return { isLoading: loading };
}

export default useLoading;
