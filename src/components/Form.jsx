import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  //const [name, setName] = useState('')
  const [dataForm, setDataform] = useState({
    username: "",
    email: "",
    name: "",
    occupation: "",
    languages: [],
  });

  //const handleChangeText = (e) => {
  //console.log(e)
  //setName(e.target.value)
  //}

  const handleChangeValue = (e) => {
    if (e.target.name === "languages") {
      const formDataNew = { ...dataForm };
      console.log(e);

      if (e.target.checked) {
        formDataNew.languages.push(e.target.value);
      } else {
        formDataNew.languages.filter((language) => language !== e.target.value);
      }
      setDataform(formDataNew);
    }

    setDataform((dataForm) => ({
      ...dataForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-box">
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" onChange={handleChangeValue} />
        </div>
        <div>
          <label htmlFor="email"> Email:</label>
          <input name="email" onChange={handleChangeValue}></input>
        </div>
        <div>
          <label htmlFor="nome">Nome</label>
          <input name="name" onChange={handleChangeValue} />
        </div>
        <div>
          <div>
            <label htmlFor="languages">Languages:</label>
            <div>
              <label htmlFor="css">CSS</label>
              <input type="checkbox" name="languages" value="CSS" />
            </div>
            <div>
              <label htmlFor="HTML">HTML</label>
              <input type="checkbox" name="languages" value="HTML" />
            </div>
            <div>
              <label htmlFor="JS">JS</label>
              <input type="checkbox" name="languages" value="JS"></input>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select name="occupation" onChange={handleChangeValue}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
