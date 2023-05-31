import React, { useContext, useState } from "react";

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: false,
    table: false,
    message: false,
  });

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => useContext(FormContext);
