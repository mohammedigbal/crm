import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Leads() {
  const [formData, setFormData] = useState({
    opportunityName: "",
    leadSource: "",
    accountManager: "",
    salesCategory: "",
    productCategory: "",
    partnerName: "",
    location: "",
    partnerNames: "",
    partnerContactDetails: "",
    forecastAmount: "",
    currentStatus: "",
    lastFollowUpDate: "",
    remarks: "",
    proposalRef: "",
    poReceived: false,
    partnerPORef: "",
    partnerPODate: "",
    actualOrderValue: "",
    orderStatus: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <h2>Leads</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-4">
            <label>Opportunity Name</label>
            <input
              type="text"
              className="form-control"
              name="opportunityName"
              value={formData.opportunityName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Lead Source</label>
            <select
              className="form-control"
              name="leadSource"
              value={formData.leadSource}
              onChange={handleChange}
            >
              <option value="">Select Lead Source</option>
              <option value="Consultant">Consultant</option>
              <option value="Direct Enquiry">Direct Enquiry</option>
              <option value="Website">Website</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="OEM">OEM</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label>Account Manager</label>
            <input
              type="text"
              className="form-control"
              name="accountManager"
              value={formData.accountManager}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Sales Category</label>
            <input
              type="text"
              className="form-control"
              name="salesCategory"
              value={formData.salesCategory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Product Category</label>
            <input
              type="text"
              className="form-control"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Partner Name</label>
            <input
              type="text"
              className="form-control"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Partner Names</label>
            <input
              type="text"
              className="form-control"
              name="partnerNames"
              value={formData.partnerNames}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Partner Contact Details</label>
            <input
              type="text"
              className="form-control"
              name="partnerContactDetails"
              value={formData.partnerContactDetails}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Forecast Amount</label>
            <input
              type="text"
              className="form-control"
              name="forecastAmount"
              value={formData.forecastAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Current Status</label>
            <input
              type="text"
              className="form-control"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Last Follow up Date</label>
            <input
              type="date"
              className="form-control"
              name="lastFollowUpDate"
              value={formData.lastFollowUpDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Remarks (if any)</label>
            <textarea
              className="form-control"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Proposal Ref#</label>
            <input
              type="text"
              className="form-control"
              name="proposalRef"
              value={formData.proposalRef}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>PO Received</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="poReceived"
              checked={formData.poReceived}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Partner PO Ref#</label>
            <input
              type="text"
              className="form-control"
              name="partnerPORef"
              value={formData.partnerPORef}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Partner PO Date</label>
            <input
              type="date"
              className="form-control"
              name="partnerPODate"
              value={formData.partnerPODate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Actual Order Value</label>
            <input
              type="text"
              className="form-control"
              name="actualOrderValue"
              value={formData.actualOrderValue}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Order Status</label>
            <input
              type="text"
              className="form-control"
              name="orderStatus"
              value={formData.orderStatus}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Leads;
