import React from 'react';
import { useLocation } from 'react-router-dom';
import LocationForm from './LocationForm';

function LocationFormWrapper() {
  const locationData = useLocation();
  const { locations, isEditing } = locationData.state || {};

  return (
    <LocationForm
      locations={locations}
      isEditing={isEditing}
    />
  );
}

export default LocationFormWrapper;
