import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

const Form = () => {
  const flag = true;
  return (
    <div className="py-5 border-b">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
};

export default Form;
