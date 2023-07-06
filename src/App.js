import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

function App() {
  const [inputData, setInputData] = useState({
    callDateFrom: "",
    callDateTo: "",
    phoneNo: "",
    volunteerNumber: "",
    campaignId: "",
    agentId: "",
  });

  const [inputArr, setInputArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/callRecordings", inputData)
      .then((response) => {
        console.log(response.data);
        setInputArr((prevArr) => [...prevArr, inputData]);
        setInputData({
          callDateFrom: "",
          callDateTo: "",
          phoneNo: "",
          volunteerNumber: "",
          campaignId: "",
          agentId: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClear = () => {
    setInputData({
      callDateFrom: "",
      callDateTo: "",
      phoneNo: "",
      volunteerNumber: "",
      campaignId: "",
      agentId: "",
    });
  };
  return (
    <div className="container-fluid bg-white text-dark">
      <header className="header">
        <h1 className="m-0 p-1">Manage Call Recording</h1>
      </header>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Call Date From:</label>
            <input
              type="date"
              className="form-control border border-dark border-2"
              name="callDateFrom"
              value={inputData.callDateFrom}
              onChange={handleChange}
              placeholder="Call Date From"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Call Date To:</label>
            <input
              type="date"
              className="form-control border border-dark border-2"
              name="callDateTo"
              value={inputData.callDateTo}
              onChange={handleChange}
              placeholder="Call Date To"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Phone No:</label>
            <input
              type="text"
              className="form-control border border-dark border-2"
              name="phoneNo"
              value={inputData.phoneNo}
              onChange={handleChange}
              placeholder="Phone No"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Volunteer Number:</label>
            <input
              type="text"
              className="form-control border border-dark border-2"
              name="volunteerNumber"
              value={inputData.volunteerNumber}
              onChange={handleChange}
              placeholder="Volunteer Number"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Campaign Id:</label>
            <select
              className="form-control border border-dark border-2"
              name="campaignId"
              value={inputData.campaignId}
              onChange={handleChange}
            >
              <option value="">Select Campaign Id</option>
              {Array.from({ length: 10 }, (_, index) => {
                const campaignId = 801 + index;
                return (
                  <option key={campaignId} value={campaignId}>
                    {campaignId}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="fw-bold">Agent Id:</label>
            <input
              type="text"
              className="form-control border border-dark border-2"
              name="agentId"
              value={inputData.agentId}
              onChange={handleChange}
              placeholder="Agent Id"
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="btn btn-primary mx-2" onClick={handleSubmit}>
          Save
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <table className="table table-bordered mt-4">
        <tbody>
          <tr>
            <th className="table-header border border-dark border-2">
              Call Date From
            </th>
            <th className="table-header border border-dark border-2">
              Call Date To
            </th>
            <th className="table-header border border-dark border-2">
              Phone No
            </th>
            <th className="table-header border border-dark border-2">
              Volunteer Number
            </th>
            <th className="table-header border border-dark border-2">
              Campaign Id
            </th>
            <th className="table-header border border-dark border-2">
              Agent Id
            </th>
            <th className="table-header border border-dark border-2">
              Actions
            </th>
          </tr>
          {inputArr.map((info, ind) => (
            <tr key={ind}>
              <td className="border border-dark border-2">{info.callDateFrom}</td>
              <td className="border border-dark border-2">{info.callDateTo}</td>
              <td className="border border-dark border-2">{info.phoneNo}</td>
              <td className="border border-dark border-2">{info.volunteerNumber}</td>
              <td className="border border-dark border-2">{info.campaignId}</td>
              <td className="border border-dark border-2">{info.agentId}</td>
              <td>
              <i className="bi bi-three-dots-vertical "></i>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-content={
                      <div>
                        
                      </div>
                    }
                  >
                    
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
