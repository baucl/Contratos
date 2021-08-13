import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const Index = (props) => {
  const [values, setValues] = useState({ info: "Hola" });
  return (
    <ThemeContext.Provider value={{ values }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Index;
