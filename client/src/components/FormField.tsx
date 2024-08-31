import "./FormField.css"; // Assuming you have a CSS file for styles

interface FormFieldProps {
  label: string;
  isRequired: boolean;
}

const FormField = ({ label, isRequired, ...props }: FormFieldProps) => {
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
