// TimeZone.tsx
import React, { useEffect, useState } from 'react';
import { fetchTimeZoneData } from '../pages/api/TimeZoneAPI';

interface TimeZoneProps {
  q: string; // City name or zip code entered by the user
}

interface LocationData {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

const TimeZone: React.FC<TimeZoneProps> = ({ q }) => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimeData = async () => {
      try {
        setLoading(true);
        const data = await fetchTimeZoneData(q); // Pass the user-provided value for q
        setLocationData(data.location);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch time zone data');
        setLoading(false);
      }
    };

    fetchTimeData();
  }, [q]); // Include q in the dependency array to re-fetch data when q changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        {locationData && (
          <ul>
            <li>Local Time: {locationData.localtime}</li>        
            <li>City: {locationData.name}</li>
            <li>Region: {locationData.region}</li>
            <li>Country: {locationData.country}</li>
            <li>Latitude: {locationData.lat}</li>
            <li>Longitude: {locationData.lon}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimeZone;
