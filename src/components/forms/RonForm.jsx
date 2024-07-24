import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";

const RonForm = () => {
  const {getCostDet} = useData();
  const costingdetails = getCostDet();
  const [quote, setQuote] = useState(costingdetails.GEN_ONLINE.baseNotarisationCost);
  const [signatures, SetSignatures] = useState(0);
  const [extraWitness, setExtraWitness] = useState(0); 
  const [extraSigners, setExtraSigners] = useState(0);

  useEffect(() => {
    const baseCost = costingdetails.GEN_ONLINE.baseNotarisationCost
    const extraSignCost = costingdetails.GEN_ONLINE.extraSignatureCost;
    const extraWitnessCost = costingdetails.GEN_ONLINE.perWitnessCost;
    const extraSignersCost = costingdetails.GEN_ONLINE.extraSignersCost;
    setQuote(baseCost + (signatures * extraSignCost) + (extraWitness * extraWitnessCost) + (extraSigners * extraSignersCost));
  },[signatures, extraWitness, extraSigners])

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-md border-notaryGrey flex-col p-4 ">
      <h1 className="text-xl mx-auto font-bold">
        Calculate your Costs for RON!
      </h1>
      <div className="flex flex-row md:gap-[164px]  px-4 mt-16">
        <h2 className="font-semibold text-md md:text-xl">No. of Extra Signatures</h2>
        
        <input onChange={(e) => SetSignatures(e.target.value)} min="0" className="w-20 h-11 form-input" type="number" />
      </div>
      <div className="flex flex-row gap-8 px-4 mt-8">
        <h2 className="font-semibold text-md md:text-xl">
          How Many Files will you be uploading in the session
        </h2>
        <input className="w-20 h-11  form-input" type="number" />
      </div>
      <div className="flex flex-row md:gap-[200px] px-4 mt-8">
        <h2 className="font-semibold text-md md:text-xl">Number of Signers</h2>
        <input onChange={(e) => setExtraSigners(e.target.value)} min='0' className="w-20 h-11 form-input" type="number" />
      </div>
      <div className="flex flex-row md:gap-[162px] px-4 mt-8">
        <h2 className="font-semibold text-md md:text-xl">Do you Need Witness?</h2>
        <input onChange={(e) => setExtraWitness(e.target.value)} min='0' className="w-20 h-11 form-input" type="number" />
      </div>
      <h1 className="text-md mt-12 text-notaryDarkGrey font-bold px-4 md:ml-64 md:text-xl">
        Your Approximate Quote : {quote}$
      </h1>
    </div>
  );
};

export default RonForm;
