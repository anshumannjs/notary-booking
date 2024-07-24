import React,{useState, useEffect} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const OthersForm = ({ formData, setFormData, signerDets }) => {

  const [phoneNum, setPhoneNum] = useState();

  useEffect(() => {
    setFormData({ ...formData, signers : {
      ...signerDets, phoneNumber : phoneNum
    }})
  },[phoneNum])

  return (
    <div className="container shadow-xl flex items-start border-2 mt-4 rounded-md border-notaryGrey flex-col p-4">
      <h1 className="mx-auto text-3xl font-bold mb-16">Details</h1>
      <div className="flex flex-col items-start p-2 mb-4 space-y-3">
        {/* <h3 className="text-lg font-bold">Full Name</h3> */}
        <input
          className=" w-44 md:w-96 form-input"
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
              setFormData({ ...formData, signers : {
                ...signerDets, signerFullName : e.target.value
            }});
          }}
        />
      </div>
      <div className="flex flex-col items-start p-2 mb-4 space-y-3">
        {/* <h3 className="text-lg font-bold">Phone Number</h3> */}
        {/* <PhoneInput
        className="w-96 rounded-lg form-input"
          defaultCountry="US"
          placeholder="Enter phone number"
          onChange={setPhoneNum}
          /> */}
          <input
          className="w-44 md:w-96 form-input"
          type="number"
          placeholder="Phone Number"
          onChange={setPhoneNum}

        />
          
      </div>
      <div className="flex flex-col items-start p-2 mb-4 space-y-3">
        {/* <h3 className="text-lg font-bold">Email</h3> */}
        <input
          className=" w-44 md:w-96 form-input"
          type="email"
          placeholder="Email"
          onChange={(e) => {
              setFormData({ ...formData, signers : {
                ...signerDets, emailAddress : e.target.value
            } });
          }}
        />
      </div>
    </div>
  );
};

export default OthersForm;
