import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const useDeviceIdentifier = () => {
  const [deviceIdentifier, setDeviceIdentifier] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Step 1: Get the public IP address
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        // Step 2: Load FingerprintJS and get the device fingerprint
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const fingerprint = result.visitorId;

        // Step 3: Combine IP address and fingerprint to create a unique identifier
        const identifier = `${ipAddress}_${fingerprint}`;
        setDeviceIdentifier(identifier);
      } catch (error) {
        console.error("Failed to fetch device identifier:", error);
      }
    })();
  }, []);

  return deviceIdentifier;
};

export default useDeviceIdentifier;
