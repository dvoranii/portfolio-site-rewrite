import * as S from "./Contact.styles";
import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Checkmark from "./Checkmark/Checkmark";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1500);
  };

  return (
    <S.ContactOuter id="contact-section">
      <S.ContactInner>
        <S.ContactTitle>Let&apos;s Connect!</S.ContactTitle>
        <S.ContactDescription>
          Want to inquire about a project or employment opportunity?
          <br />
          Fill out the form below and I will return your message shortly.
        </S.ContactDescription>

        <S.ContactForm onSubmit={handleSubmit}>
          <S.InputRow>
            <S.InputWrapper>
              <S.NameInput
                ref={nameInputRef}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <S.ErrorMessage>Please enter a valid name</S.ErrorMessage>
              )}
            </S.InputWrapper>

            <S.InputWrapper>
              <S.EmailInput
                ref={emailInputRef}
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <S.ErrorMessage>
                  Please enter a valid email (<i>123@example.com</i>)
                </S.ErrorMessage>
              )}
            </S.InputWrapper>
          </S.InputRow>

          <S.MessageTextarea
            name="message"
            placeholder="Message (Optional)"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          />

          <S.ButtonRow>
            {!isLoading && !isSuccess && (
              <S.SendButton type="submit">Send</S.SendButton>
            )}
            {isLoading && (
              <S.LoadingWrapper>
                <LoadingSpinner />
              </S.LoadingWrapper>
            )}
            {!isLoading && isSuccess && (
              <S.CheckWrapper>
                <Checkmark />
                <S.MessageSent>Sent!</S.MessageSent>
              </S.CheckWrapper>
            )}

            <S.OutlookText>
              Have Outlook?
              <br />
              Simply click{" "}
              <S.OutlookLink href="mailto:example@example.com">
                here
              </S.OutlookLink>
            </S.OutlookText>
          </S.ButtonRow>
        </S.ContactForm>
      </S.ContactInner>
    </S.ContactOuter>
  );
};

export default Contact;
