import { useState } from "react";
import useInput from "../hooks/use-input";
//Composant d'input qui utilise un HookCustom "useInput". La valeur retourné est un objet
//dans lequel on déclare un objet avec des champs contenant des variables d'état des des fonctions handlers.
const SimpleInput = (props) => {
  //Déclaration d'une variable grâce au hook custom "userInput"
  const {
    //Variable stockant des donées
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    //Variable stockant des fonctions handlers
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //Utilisation d'un hook useState pour stocker les états du champ email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  //Utilisation de la fonction include avec un pattern de recherche pour vérifier qu'un email à bien été rentré
  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;
  // /!\ Pourquoi vérifier deux fois la même variable avec une condition AND ?
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  //Fonction handler qui sera renseigné dans les event onChange/onBlur d'une balise <input>
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };
  //Fonction handler qui gère l'envoi du formulaire qui sera renseigné dans l'event onSubmit de la balise <form>
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };
  // Operations ternaires pour modifier les class css après un re-rendu de React
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    //Assignation des fonctions callback dans les props d'events dans la balises correspondant
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {/* Rendu conditionel: Si il y a une erreur afficher un texte */}
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      {/* Assignation des fonctions callback dans les props d'events dans la balises
      correspondant */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {/* Rendu conditionel: Si il y a une erreur afficher un texte */}
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        {/*Assignation d'une valeur boolean dans le props disabled du bouton 
        pour changer son état selon la validité du formulaire*/}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
//Export du composant pour qu'il soit réutilisable
export default SimpleInput;
