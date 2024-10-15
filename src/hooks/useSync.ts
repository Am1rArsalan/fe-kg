import { useEffect, useState } from "react";
import { Option } from "../App";

const useSync = (
  syncFunc: (latitude: string, longitude: string) => Promise<void>,
) => {
  const [pollingInterval, setPollingInterval] = useState<number | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const startLongPolling = (selectedCity: Option) => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
    }

    const interval = setInterval(async () => {
      setIsSyncing(true);
      await syncFunc(selectedCity.value.latitude, selectedCity.value.longitude);
      setIsSyncing(false);
    }, 30000);

    setPollingInterval(interval as unknown as number);
  };

  useEffect(() => {
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [pollingInterval]);

  return {
    startLongPolling,
    isSyncing,
  };
};

export default useSync;
