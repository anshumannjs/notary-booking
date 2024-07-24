import React, { useState } from "react";
import backIcon from "../assets/back.png";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "../styles/main.css";
import "tw-elements";
import { useData } from "../contexts/DataContext";
import "../index.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const { getBusinessDet, getUserId } = useData();
  const bDet = getBusinessDet();
  const uId = getUserId();
  const [err, setErr] = useState("");
  const [activeAgent, setActiveAgent] = useState({
    nsa: true,
    mgn: false,
    ron: false,
    oth: false,
  });
  const [formData, setFormData] = useState({
    activityHistory: [],
    isRealEstateTransaction: true,
    isOnlineSigning: false,
    escrowNumber: "",
    serviceId_DB: "asdfasdf",
    loanNo: "",
    place: {
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
    },
    serviceDetails: null,
    customerDetails: {
      customerName: "",
      type: "Customer",
      customerPhoneNumber: "",
      customerEmailAddress: "",
      companyName: "",
      companyAddress: bDet.businessAddress,
    },
    signers: [{ signerFullName: "", phoneNumber: "", emailAddress: "" }],
    witnessCount: 0,
    witnessList: [],
    propertyAddress: "",
    signingDate: "",
    signingDateTimeStamp: "",
    signingTime: "",
    readableTime: "",
    isMileageEntered: false,
    isMileageEntryRequired: false,
    isNotarialActsEntered: false,
    isExpenseEntered: false,
    status: 0,
    paymentStatus: 0,
    notaryId: uId,
    markAsUncollectable: false,
    isParsedFromMail: false,
    aptSource: "plugin",
    isInvoiceDue: true,
    isInvoiceFullyPaid: false,
    isPaymentReceivedFull: false,
    fromPlugin: true,
    isDeleted: false,
    isRescheduled: false,
    isRejected: false,
    isCancelledBefore: false,
  });

  const handleSubmit = (setBtnLoading) => {
    axios
      .post("https://staging.thenotary.app/plugin/submitApptDetails", formData)
      .then(() => {
        console.log("sent!");
        console.log(formData);
        setErr("");
        setStep(step + 1);
      })
      .catch((error) => {
        setErr(error.message);
        setTimeout(() => {
          setErr("");
        }, 10000);
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };

  const handlePages = () => {
    if (step === 1) {
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          activeAgent={activeAgent}
          setActiveAgent={setActiveAgent}
        />
      );
    } else if (step === 2) {
      return (
        <Step2
          activeAgent={activeAgent}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (step === 3) {
      return (
        <Step3
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          activeAgent={activeAgent}
          err={err}
        />
      );
    } else {
      return <Step4 />;
    }
  };
  return (
    <div className="relative container p-2 md:ml-[18vw]">
      <div className="flex flex-row">
        {" "}
        {/*Previous Button Functionality*/}
        <div className="flex-1 flex-row p-4">
          <button
            disabled={step === 1 || step === 4}
            onClick={() => {
              if (activeAgent.oth) {
                setStep(step - 2);
                return;
              }
              setStep(step - 1);
            }}
            className="rounded-full bg-notaryGrey p-2"
            style={
              step === 1 || step === 4 ? { backgroundColor: "#a5a0b0" } : {}
            }
          >
            <img src={backIcon} width="10px" />
          </button>
        </div>
        <div className="flex absolute flex-col p-2 ml-12">
          <h1 className="text-2xl ">New Appointment Request</h1>
          <h3 className="text-notaryGrey">Same great coverage for less.</h3>
        </div>
      </div>

      {/* This is the code for Horizontal Stepper which will only be active
      for the desktops/larger than mediums screens */}

      <div className="hidden md:block">
        <ul className="stepper" data-mdb-stepper="stepper">
          <li
            className={
              step === 1
                ? "stepper-step stepper-active"
                : "stepper-step stepper-completed"
            }
            onClick={() => setStep(1)}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 1 </span>
              <span className="stepper-head-text"> Select Service </span>
            </div>
          </li>
          <li
            className={
              step === 1
                ? "stepper-step"
                : step === 2
                ? "stepper-step stepper-active"
                : "stepper-step stepper-completed"
            }
            onClick={() => {
              if (!activeAgent.oth) {
                setStep(2);
              }
            }}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 2 </span>
              <span className="stepper-head-text"> Signer Details </span>
            </div>
          </li>
          <li
            className={
              step < 3
                ? "stepper-step"
                : step === 3
                ? "stepper-step stepper-active"
                : "stepper-step stepper-completed"
            }
            onClick={() => setStep(3)}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 3 </span>
              <span className="stepper-head-text"> Date & Time </span>
            </div>
          </li>
          <li
            className={
              step === 4 ? "stepper-step stepper-completed" : "stepper-step"
            }
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 4 </span>
              <span className="stepper-head-text"> Success </span>
            </div>
          </li>
        </ul>
      </div>

      {/* This is the code for Vertical Stepper which will only be active
      for the mobile/smaller than medium screens */}

      <div className="block md:hidden">
        <ul
          className="stepper overflow-auto scrollHider p-5"
          data-mdb-stepper="stepper"
        >
          <li
            className={
              step === 1
                ? "stepper-step stepper-active -ml-4"
                : "stepper-step stepper-completed -ml-4"
            }
            onClick={() => setStep(1)}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 1 </span>
              <span className="stepper-head-text w-44"> Select Service </span>
            </div>
          </li>
          <li
            className={
              step === 1
                ? "stepper-step"
                : step === 2
                ? "stepper-step stepper-active"
                : "stepper-step stepper-completed"
            }
            onClick={() => setStep(2)}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 2 </span>
              <span className="stepper-head-text w-44"> Signer Details </span>
            </div>
          </li>
          <li
            className={
              step < 3
                ? "stepper-step"
                : step === 3
                ? "stepper-step stepper-active"
                : "stepper-step stepper-completed"
            }
            onClick={() => setStep(3)}
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 3 </span>
              <span className="stepper-head-text w-44"> Date & Time </span>
            </div>
          </li>
          <li
            className={
              step === 4 ? "stepper-step stepper-completed" : "stepper-step"
            }
          >
            <div className="stepper-head">
              <span className="stepper-head-icon"> 4 </span>
              <span className="stepper-head-text"> Success </span>
            </div>
          </li>
        </ul>
      </div>

      <div>{handlePages()}</div>
      {step < 3 ? (
        <div className="fixed bottom-0 right-0 px-6">
          <button
            disabled={step === 4}
            onClick={() => {
              if (activeAgent.oth) {
                setStep(step + 2);
                return;
              }
              setStep(step + 1);
            }}
          >
            <div className="flex flex-row gap-2">
              <h3 className="text-notaryTextPurple text-xl font-bold ">
                Next Step
              </h3>
              <div className="bg-notaryLightYellow text-notaryDarkGrey mb-4 font-bold rounded-full px-2 py-1">
                &rarr;
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Form;
