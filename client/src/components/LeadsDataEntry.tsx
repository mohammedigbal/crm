import { useState } from "react";
import "./Leads.css";
import FormField from "./FormField";
import DynamicDropdown from "./DynamicDropdown";

function Leads() {
  const [formData, setFormData] = useState({
    opportunityName: "",
    leadSource: "",
    accountManager: "",
    salesCategory: "",
    productCategory: "",
    partnerName: "",
    location: null as number | null,
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

  const handleonOptionChange = (
    field: string,
    selectedValue: number | null
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: selectedValue, // Ensure this matches your state key
    }));
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTextBoxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="middle-panel">
      <h2>Leads</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <FormField
              label="Opportunity Name"
              isRequired={true}
              type="text"
              value={formData.opportunityName}
              onChange={handleTextBoxChange}
              name="opportunityName"
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Lead Source</label>
            <DynamicDropdown
              name="leadSource"
              label="Lead Source"
              field_value="lead_source"
              onOptionChange={handleonOptionChange}
            />
          </div>
          <div className="form-group col-md-3">
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
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Sales Category</label>
            <input
              type="text"
              className="form-control"
              name="salesCategory"
              value={formData.salesCategory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Product Category</label>
            <input
              type="text"
              className="form-control"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
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

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Location</label>
            <DynamicDropdown
              name="location"
              label="Locatoin"
              field_value="location_name"
              onOptionChange={handleonOptionChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Partner Names</label>
            <input
              type="text"
              className="form-control"
              name="partnerNames"
              value={formData.partnerNames}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
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

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Forecast Amount</label>
            <input
              type="text"
              className="form-control"
              name="forecastAmount"
              value={formData.forecastAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Current Status</label>
            <DynamicDropdown
              name="currentStatus"
              label="Current Status"
              field_value="current_status"
              onOptionChange={handleonOptionChange}
            />
          </div>
          <div className="form-group col-md-3">
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

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Proposal Ref#</label>
            <input
              type="text"
              className="form-control"
              name="proposalRef"
              value={formData.proposalRef}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>PO Received</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="poReceived"
              checked={formData.poReceived}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Partner PO Ref#</label>
            <input
              type="text"
              className="form-control"
              name="partnerPORef"
              value={formData.partnerPORef}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Partner PO Date</label>
            <input
              type="date"
              className="form-control"
              name="partnerPODate"
              value={formData.partnerPODate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Actual Order Value</label>
            <input
              type="text"
              className="form-control"
              name="actualOrderValue"
              value={formData.actualOrderValue}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Order Status</label>
            <DynamicDropdown
              name="orderStatus"
              label="Order Status"
              field_value="order_status"
              onOptionChange={handleonOptionChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Remarks (if any)</label>
            <textarea
              className="form-control"
              name="remarks"
              value={formData.remarks}
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
