import { useState } from "react";
import { toast } from "react-toastify";

const useContactForm = (formID) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const url = `https://wordpress.tour-guide.pl/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`;

  const checkLength = (value, len) => value.trim().length > len;

  const checkEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };

  const validateForm = () => {
    let formIsValid = true;
    const validationErrors = {
      userName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    if (!checkLength(formData.userName, 1)) {
      validationErrors.userName = "Pole musi zawierać minimum dwie litery.";
      formIsValid = false;
    }

    if (!checkLength(formData.subject, 1)) {
      validationErrors.subject = "Pole musi zawierać minimum dwie litery.";
      formIsValid = false;
    }

    if (!checkEmail(formData.email)) {
      validationErrors.email = "Wpisz poprawny adres email.";
      formIsValid = false;
    }

    if (!checkLength(formData.phone, 6)) {
      validationErrors.phone = "Wpisz poprawny numer telefonu.";
      formIsValid = false;
    }

    if (!checkLength(formData.message, 1)) {
      validationErrors.message = "Pole musi zawierać minimum dwie litery.";
      formIsValid = false;
    }

    setErrors(validationErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, recaptchaToken) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Proszę zaznaczyć reCAPTCHA przed wysłaniem formularza.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const { action, method } = e.currentTarget;

    const formDataObject = new FormData();

    formDataObject.append("your-name", formData.userName);
    formDataObject.append("your-email", formData.email);
    formDataObject.append("your-phone", formData.phone);
    formDataObject.append("your-subject", formData.subject);
    formDataObject.append("your-message", formData.message);
    formDataObject.append("g-recaptcha-response", recaptchaToken || "");
    formDataObject.append("_wpcf7_unit_tag", `form-${formID}`);

    try {
      const response = await fetch(action, {
        method,
        body: formDataObject,
      });

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success("Twoja wiadomość została wysłana!");
        setFormData({ userName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({ userName: "", email: "", phone: "", subject: "", message: "" });
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        toast.error("Wystąpił problem z wysłaniem wiadomości. Zadzwoń do Tomka +48 601 786 363.");
      }
    } catch (error) {
      console.error("Error during message sending:", error);
      toast.error("Wystąpił błąd podczas wysyłania wiadomości.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    isSuccess,
    handleChange,
    handleSubmit,
    url,
  };
};

export default useContactForm;
