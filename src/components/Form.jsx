import { useEffect } from "react";
import { useFormStore } from "../store/dataForm";
import "./Form.css";

const Form = () => {
  const { formValues, setFormValues } = useFormStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleLanguagesChange = (e) => {
  const {value, name} = e.target
  setFormValues({...formValues, [name]: value})
  };


  return (
    <div className="form-box">
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email"> Email:</label>
          <input name="email" onChange={handleInputChange}></input>
        </div>
        <div>
          <label htmlFor="nome">Nome</label>
          <input name="name" onChange={handleInputChange} />
        </div>
        <div>
          <div>
            <label htmlFor="languages">Languages:</label>
            <div>
              <label htmlFor="css">CSS</label>
              <input
                type="checkbox"
                name="languages"
                value="CSS"
                onChange={handleLanguagesChange}
              />
            </div>
            <div>
              <label htmlFor="HTML">HTML</label>
              <input
                type="checkbox"
                name="languages"
                value="HTML"
                onChange={handleLanguagesChange}
              />
            </div>
            <div>
              <label htmlFor="JS">JS</label>
              <input
                type="checkbox"
                name="languages"
                value="JS"
                onChange={handleLanguagesChange}
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select name="occupation" onChange={handleInputChange}>
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

/*const [dataForm, setDataform] = useState({
    username: "",
    email: "",
    name: "",
    occupation: "",
    languages: [],
  });


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
*/
