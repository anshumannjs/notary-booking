import React, { useState } from "react";
import { useData } from "../../../contexts/DataContext";

const LSA_OFFLINE = ({ formData, setFormData }) => {
  const { getServiceDet } = useData();
  const servicedetails = getServiceDet();
  const listServices = servicedetails.LSA_OFFLINE;

  const [selectedService, setSelectedService] = useState(null);

  const handleCheckboxChange = (service) => {
    if (selectedService === service) {
      setSelectedService(null);
      setFormData({ ...formData, serviceDetails: null });
    } else {
      setSelectedService(service);
      setFormData({ ...formData, serviceDetails: service });
    }
  };

  return (
    <>
      <h1 className="text-xl mx-auto font-bold">Select Services</h1>

      <div className="flex w-full justify-between mt-5">
        {listServices.slice(0, 3).map((service) => {
          return (
            <div
              key={service.serviceName}
              className="flex space-x-3"
            >
              <h2 className="sm:text-xs">{service.serviceName}</h2>
              <input
                type="checkbox"
                className="w-5 h-5 border-2 mt-2 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full"
                checked={selectedService === service}
                onChange={() => handleCheckboxChange(service)}
              ></input>
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-between mt-3">
        {listServices.slice(3).map((service) => {
          return (
            <div
              key={service.serviceName}
              className="flex space-x-3"
            >
              <h2 className="sm:text-xs">{service.serviceName}</h2>
              <input
                type="checkbox"
                className="w-5 h-5 border-2 mt-2 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full"
                checked={selectedService === service}
                onChange={() => handleCheckboxChange(service)}
              ></input>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LSA_OFFLINE;
