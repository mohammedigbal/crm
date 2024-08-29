import "./FormField.css"; // Assuming you have a CSS file for styles

const FormField = ({ label, isRequired, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className={`form-control ${isRequired ? "mandatory-field" : ""}`}
        {...props}
      />
    </div>
  );
};

export default FormField;
