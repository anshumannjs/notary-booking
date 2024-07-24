import React, { useState } from "react";
import GEN_ONLINE from "./services/GEN_ONLINE";
import LSA_OFFLINE from "./services/LSA_OFFLINE";
import LSA_ONLINE from "./services/LSA_ONLINE";

const NotarySignForm = ({ formData, setFormData }) => {
  // KNOWN ISSUE : THE SHOW SERVICE SHOULD BE GLOBAL TO STORE THE STATES.
  const [showServices, setShowServices] = useState({
    inoffice: true,
    mobile: false,
    ron: false,
  });

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-md border-notaryGrey flex-col p-4">
      <h1 className="text-xl font-bold">Select Your Type Of Order</h1>

      <div className="flex flex-row justify-around gap-2 md:gap-10 mx-auto mt-5 mb-5">
        <input
          type={"checkbox"}
          onClick={() => {
            setFormData({
              ...formData, isOnlineSigning: false, isInOffice: true, place: {
                completeAddress: "",
                lat: "",
                lon: "",
                zipcode: "",
                city: "",
                state: "",
                timeZone: "",
                area: "",
                streetAddress: "",
                place_id: "",
              }
            });
            setShowServices({ inoffice: true, mobile: false, ron: false });
          }}
          id='order1'
          className="mt-2"
          style={showServices.inoffice ? { color: "#8b36fd" } : { color: "black" }}
        />
        <h1 className="font-bold">
          In-office
        </h1>
        <input
          type={"checkbox"}
          onClick={() => {
            setFormData({ ...formData, isOnlineSigning: true, isInOffice: false, place: null });
            setShowServices({ inoffice: false, mobile: true, ron: false });
          }}
          id='order2'
          className="mt-2"
          style={showServices.mobile ? { color: "#8b36fd" } : { color: "black" }}
        />
        <h1 className="font-bold">
          Mobile
        </h1>
        <input
          type={"checkbox"}
          onClick={() => {
            setFormData({ ...formData, isOnlineSigning: false, isInOffice: false });
            setShowServices({ inoffice: false, mobile: false, ron: true });
            setFormData({ ...formData, place: { ...formData.place } })
          }}
          id='order3'
          className="mt-2"
          style={showServices.ron ? { color: "#8b36fd" } : { color: "black" }}
        />
        <h1 className="font-bold">
          RON
        </h1>
      </div>
      <div className="w-full">
        {showServices.mobile && <LSA_OFFLINE formData={formData} setFormData={setFormData} />}
        {showServices.inoffice && <LSA_OFFLINE formData={formData} setFormData={setFormData} />}
        {showServices.ron && <LSA_ONLINE formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  );
};

export default NotarySignForm;
