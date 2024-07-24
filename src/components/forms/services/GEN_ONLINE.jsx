import React, { useState } from "react";
import { useData } from "../../../contexts/DataContext";

const GEN_ONLINE = ({formData, setFormData}) => {
  const { getServiceDet } = useData();
  const servicedetails = getServiceDet();
  const listServices = servicedetails.LSA_ONLINE;

  const [selectedService, setSelectedService] = useState(null);

  const handleCheckboxChange = (service) => {
    if (selectedService === service) {
      setSelectedService(null);
      setFormData({...formData, serviceDetails : null});
    } else {
      setSelectedService(service);
      setFormData({...formData, serviceDetails : service});
    }
  };

  return (
    <>
      {listServices.map((service) => {
        return (
          <div
            key={service.serviceName}
            className="flex flex-row space-x-24 mt-2 justify-between md:space-x-80"
          >
            <h2 className="text-xl font-bold">{service.serviceName}</h2>
            <input
              type="checkbox"
              className="w-5 h-5 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full"
              checked={selectedService === service}
              onChange={() => handleCheckboxChange(service)}
            ></input>
          </div>
        );
      })}
    </>
  );
};

export default GEN_ONLINE;
