import { useReducer } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);
  return (
    <div className="py-5 border-b">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData })}
    </div>
  );
};

export default Form;
