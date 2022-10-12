// -------------------------------------------------------------------------------------
//Déclaration d'un hook custom useInput
import { useState } from "react";

const useInput = (validateValue) => {
  //Déclaration des states avec des valeurs par défaut string :"" et bool: false
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  // Variables d'état boolean
  // Validation par une fonction de la valeur rentrée
  const valueIsValid = validateValue(enteredValue);
  //Dans le cas où il y a une erreur et que l'user n'est pas en train de rentrer une donnée
  const hasError = !valueIsValid && isTouched;
  //Fonction handler qui doit être rensigné dans une balise <input> pour pouvoir récupérer les données
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  //Fonction handler qui doit être rensigné dans une balise <input> pour pouvoir blur la balise
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  //Fonction de reset qui permet de remettre à un état par défaut la balise <input> dans lequel il est renseigné
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
//Export du hook
export default useInput;
