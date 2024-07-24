import React from "react";
import "../styles/main.css";
import RonForm from "./forms/RonForm";
import MobNotaryForm from "./forms/MobNotaryForm";
import NotarySignForm from "./forms/NotarySignForm";
import OthersForm from "./forms/OthersForm";
import TypeofOrder from "./forms/TypeofOrder";

const Step1 = ({ activeAgent, setActiveAgent, formData, setFormData }) => {
  const handleSign = () => {
    if (activeAgent.nsa) {
      setActiveAgent({ ...activeAgent, nsa: false });
      return;
    }
    setActiveAgent({ nsa: true, mgn: false, ron: false, oth: false });
    setFormData({
      ...formData,
      isRealEstateTransaction: true,
      signers: [{ signerFullName: "", phoneNumber: "", emailAddress: "" }],
      customerDetails: {
        customerName: "",
        type: "Customer",
        customerPhoneNumber: "",
        customerEmailAddress: "",
        companyName: "",
      },
    });
  };

  const handleRemote = () => {
    if (activeAgent.ron) {
      setActiveAgent({ ...activeAgent, ron: false });
      return;
    }
    setActiveAgent({ nsa: false, mgn: false, ron: true, oth: false });
    setFormData({
      ...formData,
      isOnlineSigning: true,
      isRealEstateTransaction: false,
      signers: [{ signerFullName: "", phoneNumber: "", emailAddress: "" }],
      customerDetails: null,
      isMileageEntryRequired: true,
    });
  };

  const handleMobile = () => {
    if (activeAgent.mgn) {
      setActiveAgent({ ...activeAgent, mgn: false });
      return;
    }
    setActiveAgent({ nsa: false, mgn: true, ron: false, oth: false });
    setFormData({
      ...formData,
      isOnlineSigning: false,
      isRealEstateTransaction: false,
      signers: [{ signerFullName: "", phoneNumber: "", emailAddress: "" }],
      customerDetails: null,
    });
  };

  const handleOthers = () => {
    if (activeAgent.oth) {
      setActiveAgent({ ...activeAgent, oth: false });
      return;
    }
    setActiveAgent({ nsa: false, mgn: false, ron: false, oth: true });
    setFormData({
      ...formData,
      isOnlineSigning: false,
      isRealEstateTransaction: false,
      customerDetails: null,
    });
  };

  return (
    <div className="container flex flex-col p-2 space-x-4 mx-auto mt-3 md:flex-row">
      <div className="container flex flex-col gap-3 space-y-0 mt-2">
        <h1 className="text-2xl font-bold mb-3">Select your Service</h1>
        <div
          style={{
            borderColor: activeAgent.nsa ? "#4D78F2" : "#d5cfe3",
            backgroundColor: activeAgent.nsa ? "#f0f0f5" : "#FFF",
          }}
          onClick={handleSign}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-md hover:cursor-pointer"
        >
          <h1
            style={{
              fontWeight: activeAgent.nsa ? "600" : "400",
              color: activeAgent.nsa ? "#4D78F2" : "#000000",
            }}
            className="text-4xl px-4 my-5">Notary Signing Agent</h1>
          {/* <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for those who have purchased a brand new car.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p> */}
        </div>
        <div
          style={{
            borderColor: activeAgent.ron ? "#4D78F2" : "#d5cfe3",
            backgroundColor: activeAgent.ron ? "#f0f0f5" : "#FFF",
          }}
          onClick={handleRemote}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-md hover:cursor-pointer"
        >
          <h1
            style={{
              fontWeight: activeAgent.ron ? "600" : "400",
              color: activeAgent.ron ? "#4D78F2" : "#000000",
            }}
            className="text-4xl px-4 my-5"
          >
            Remote Online Notary
          </h1>
          {/* <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for thoe who already have a valid third party cover.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p> */}
        </div>
        <div
          style={{
            borderColor: activeAgent.mgn ? "#4D78F2" : "#d5cfe3",
            backgroundColor: activeAgent.mgn ? "#f0f0f5" : "#FFF",
          }}
          onClick={handleMobile}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-md hover:cursor-pointer"
        >
          <h1
            style={{
              fontWeight: activeAgent.mgn ? "600" : "400",
              color: activeAgent.mgn ? "#4D78F2" : "#000000",
            }}
            className="text-4xl px-4 my-5">Mobile General Notary</h1>
          {/* <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            Suitable for those who use the car infrequently.
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p> */}
        </div>
        <div
          style={{
            borderColor: activeAgent.oth ? "#4D78F2" : "#d5cfe3",
            backgroundColor: activeAgent.oth ? "#f0f0f5" : "#FFF",
          }}
          onClick={handleOthers}
          className="flex flex-col mt-6 border-2 transition-all ease-out duration-150 border-notaryGrey rounded-md hover:cursor-pointer"
        >
          <h1
            style={{
              fontWeight: activeAgent.oth ? "600" : "400",
              color: activeAgent.oth ? "#4D78F2" : "#000000",
            }}
            className="text-4xl px-4 my-5">Others</h1>
          {/* <p className="hidden text-sm px-4 mt-2 text-notaryDarkGrey md:block">
            For other Service Categories
          </p>
          <p className="hidden text-sm px-4 mb-4 mt-5 font-bold md:block">
            View Details &rarr;
          </p> */}
        </div>
      </div>



      {/* <div className="mx-auto md:hidden">
      {activeAgent.nsa ? (
        <NotarySignForm formData={formData} setFormData={setFormData} />
      ) : (
        <></>
      )}
      {activeAgent.ron ? <RonForm /> : <></>}
      {activeAgent.mgn ? <MobNotaryForm /> : <></>}
      {activeAgent.oth ? (
        <OthersForm
          formData={formData}
          setFormData={setFormData}
          signerDets={formData.signers}
        />
      ) : (
        <></>
      )}
    </div> */}

      {activeAgent.nsa ? (
        <NotarySignForm formData={formData} setFormData={setFormData} />
      ) : (
        <></>
      )}
      {activeAgent.ron ? <RonForm /> : <></>}
      {activeAgent.mgn ? <MobNotaryForm /> : <></>}
      {activeAgent.oth ? (
        <OthersForm
          formData={formData}
          setFormData={setFormData}
          signerDets={formData.signers}
        />
      ) : (
        <></>
      )}



      {/* <TypeofOrder/> */}
    </div>
  );
};

export default Step1;
