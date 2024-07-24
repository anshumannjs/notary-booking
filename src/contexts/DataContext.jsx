import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import PageLoader from "../components/PageLoader";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [params, setParams] = useState({});
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(false);

  useEffect(() => {
    const getData = () => {
      axios
        .post("https://staging.thenotary.app/plugin/getPluginSampleResponse", {
          username: window.location.hostname,
        })
        .then((res) => {
          setParams(res);
          setCounter(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    if (counter) {
      console.log(params);
      setLoading(false);
    }
  }, [params]);

  const getPersonalDet = () => {
    return params.data.response.personalInfo;
  };

  const getBusinessDet = () => {
    return params.data.response.personalInfo.businessDetails;
  };

  const getServiceDet = () => {
    return params.data.response.ServicesInfo;
  };

  const getCostDet = () => {
    return params.data.response.costSettings;
  };

  const getUserId = () => {
    return params.data.response._id;
  };

  const getTimeDet = () => {
    return params.data.response.timingInfo[0];
  };

  const val = {
    params,
    getPersonalDet,
    getBusinessDet,
    getServiceDet,
    getCostDet,
    getUserId,
    getTimeDet,
  };

  return (
    <DataContext.Provider value={val}>
      {!loading ? children : <PageLoader />}
    </DataContext.Provider>
  );
};

export default DataProvider;
