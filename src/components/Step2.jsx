import React, { useState } from "react";
import "../styles/main.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";
import editLogo from "../assets/edit-profile.svg";

const Step2 = ({ formData, setFormData, activeAgent }) => {
  const [showWitness, setShowWitness] = useState(false);

  const addSigner = () => {
    setFormData({
      ...formData,
      signers: [
        ...formData.signers,
        { signerFullName: "", phoneNumber: "", emailAddress: "" },
      ],
    });
  };

  const addWitness = () => {
    setFormData({
      ...formData,
      witnessList: [
        ...formData.witnessList,
        {
          witnessName: "",
          witnessPhone: "",
          witnessEmail: "",
          type: "witness",
        },
      ],
      witnessCount: ++formData.witnessCount,
    });
  };

  return (
    <div className="container flex flex-col gap-2 p-4 -mt-3">
      <div className="p-4 mt-5 border shadow-md rounded-sm">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={editLogo} alt="" />
          <h3 className="text-xl font-bold text-notaryDarkGrey">
            Signer Details
          </h3>
        </div>
        {formData.signers.map((signer, index) => (
          <div
            // style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
            className="flex flex-row gap-x-5 gap-y-5 p-4 flex-wrap"
            key={index}
          >
            <div className="flex flex-col space-y-2">
              {/* <h4>Full Name</h4> */}
              <input
                value={signer.signerFullName}
                placeholder="First Name"
                className="form-input w-60 "
                onChange={(e) => {
                  const updatedSigners = [...formData.signers];
                  updatedSigners[index].signerFullName = e.target.value;
                  setFormData({ ...formData, signers: updatedSigners });
                }}
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2">
              {/* <h4>Email</h4> */}
              <input
                value={signer.emailAddress}
                placeholder="Email"
                className="form-input w-60 "
                onChange={(e) => {
                  const updatedSigners = [...formData.signers];
                  updatedSigners[index].emailAddress = e.target.value;
                  setFormData({ ...formData, signers: updatedSigners });
                }}
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2">
              {/* <h4>Phone Number</h4> */}
              {/* <PhoneInput
            className=" rounded-lg border-2 border-solid border-notaryGrey"
              defaultCountry="US"
              placeholder="Enter phone number"
              value={signer.phoneNumber}
              onChange={(e) => {
                const updatedSigners = [...formData.signers];
                updatedSigners[index].phoneNumber = e;
                setFormData({ ...formData, signers: updatedSigners });
              }}/> */}

              <input
                placeholder="Phone Number"
                value={signer.phoneNumber}
                className="form-input w-60 "
                onChange={(e) => {
                  const updatedSigners = [...formData.signers];
                  updatedSigners[index].phoneNumber = e;
                  setFormData({ ...formData, signers: updatedSigners });
                }}
                type="number"
              />
            </div>
            <img onClick={addSigner} className="w-10 h-10 hover:cursor-pointer" src={add} alt="" />

            {/* <img className="w-10 h-10" src={remove} alt="" /> */}
          </div>
        ))}
      </div>
      {/* <button
        className="px-4 py-2 rounded-full self-baseline transition-all duration-100 bg-notaryProgressBar text-white font-bold hover:bg-white hover:text-notaryProgressBar"
        onClick={addSigner}
      >
        Add Signer
      </button> */}

      {activeAgent.nsa ? (
        <>
          <div className="p-4 mt-5 border shadow-md rounded-sm">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={editLogo} alt="" />
              <h3 className="text-xl font-bold text-notaryDarkGrey">
                Title Company Details
              </h3>
            </div>
            <div
              // style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
              className="flex flex-row gap-x-5 gap-y-5 p-4 flex-wrap"
            >
              <div className="flex flex-col space-y-2">
                {/* <h4>Company Name</h4> */}
                <input
                  value={formData.customerDetails.companyName}
                  placeholder="Company Name"
                  className="form-input w-60 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      customerDetails: {
                        ...formData.customerDetails,
                        companyName: e.target.value,
                      },
                    });
                  }}
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2 mr-64">
                {/* <h4>Closing Agent Name</h4> */}
                <input
                  value={formData.customerDetails.customerName}
                  placeholder="Closing Agent Name"
                  className="form-input w-60 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      customerDetails: {
                        ...formData.customerDetails,
                        customerName: e.target.value,
                      },
                    });
                  }}
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                {/* <h4>Email</h4> */}
                <input
                  value={formData.customerDetails.customerEmailAddress}
                  placeholder="Email"
                  className="form-input w-60 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      customerDetails: {
                        ...formData.customerDetails,
                        customerEmailAddress: e.target.value,
                      },
                    });
                  }}
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                {/* <h4>Phone Number</h4> */}
                {/* <PhoneInput
                className="w-60 py-2"
                defaultCountry="US"
                placeholder="Enter phone number"
                value={formData.customerDetails.customerPhoneNumber}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    customerDetails: {
                      ...formData.customerDetails,
                      customerPhoneNumber: e,
                    },
                  });
                }}
              /> */}
                <input
                  className="w-60 form-input"
                  placeholder="Phone Number"
                  value={formData.customerDetails.customerPhoneNumber}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      customerDetails: {
                        ...formData.customerDetails,
                        customerPhoneNumber: e,
                      },
                    });
                  }}
                  type="number"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {!activeAgent.nsa ? (
        <>
          <div className="p-4 mt-5 border shadow-md rounded-sm">
            <div className="flex flex-row gap-4 p-2 mt-4">
              <input
                className="w-5 h-5 text-notaryProgressBar bg-gray-100 border-gray-300 focus:ring-notaryYellow rounded-full"
                type="checkbox"
                checked={showWitness}
                onClick={() => setShowWitness(!showWitness)}
              />
              <h3 className="text-sm font-bold">
                Do you want Witness with this signing?
              </h3>
            </div>
            {showWitness ? (
              <>
                <h3 className="text-xl font-bold text-notaryDarkGrey mb-2">
                  Witness Details
                </h3>
                {formData.witnessList.map((witness, index) => (
                  <div
                    // style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
                    className="flex flex-row gap-x-20 gap-y-8 p-4 flex-wrap"
                    key={index}
                  >
                    <div className="flex flex-col space-y-2">
                      {/* <h4>Witness Name</h4> */}
                      <input
                        value={witness.witnessName}
                        className="w-60 form-input"
                        placeholder="Witness Name"
                        onChange={(e) => {
                          const updatedWitness = [...formData.witnessList];
                          updatedWitness[index].witnessName = e.target.value;
                          setFormData({
                            ...formData,
                            witnessList: updatedWitness,
                          });
                        }}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      {/* <h4>Witness Phone</h4>
                    <PhoneInput
                      className="w-96 rounded-lg border-2 border-solid border-notaryGrey"
                      defaultCountry="US"
                      placeholder="Enter phone number"
                      value={witness.witnessPhone}
                      onChange={(e) => {
                        const updatedWitness = [...formData.witnessList];
                        updatedWitness[index].witnessPhone = e;
                        setFormData({
                          ...formData,
                          witnessList: updatedWitness,
                        });
                      }}
                    /> */}
                      <input
                        className="w-60 form-input"
                        placeholder="Witness Phone"
                        value={witness.witnessPhone}
                        onChange={(e) => {
                          const updatedWitness = [...formData.witnessList];
                          updatedWitness[index].witnessPhone = e;
                          setFormData({
                            ...formData,
                            witnessList: updatedWitness,
                          });
                        }}
                        type="number"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      {/* <h4>Email</h4> */}
                      <input
                        value={witness.witnessEmail}
                        className="w-60 form-input"
                        placeholder="Email"
                        type="text"
                        onChange={(e) => {
                          const updatedWitness = [...formData.witnessList];
                          updatedWitness[index].witnessEmail = e.target.value;
                          setFormData({
                            ...formData,
                            witnessList: updatedWitness,
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  className="px-4 py-2 rounded-full self-baseline transition-all duration-100 bg-notaryProgressBar text-white font-bold hover:bg-white hover:text-notaryProgressBar"
                  onClick={addWitness}
                >
                  Add Witness
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}

      {!activeAgent.ron ? (
        <>
          <div className="p-4 mt-5 border shadow-md rounded-sm">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={editLogo} alt="" />
              <h3 className="text-xl font-bold text-notaryDarkGrey">
                Order Info
              </h3>
            </div>
            <div
              // style={{ borderTop: "2px solid", borderColor: "#a5a0b0" }}
              className="flex flex-row gap-x-5 gap-y-5 p-4 flex-wrap"
            >
              <div className="flex flex-col space-y-2">
                {/* <h4>Escrow # / Loan Number</h4> */}
                <input
                  value={formData.escrowNumber}
                  placeholder="Escrow # / Loan Number"
                  className="w-60 form-input"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      escrowNumber: e.target.value,
                      loanNo: e.target.value,
                    });
                  }}
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2">
                {/* <h4>Property Address</h4> */}
                <input
                  value={formData.propertyAddress}
                  placeholder="Property Address"
                  className="form-input w-60 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      propertyAddress: e.target.value,
                    });
                  }}
                  type="text"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Step2;
