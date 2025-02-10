'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';
import Heading from '@components/Heading/Heading';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IFormProps {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    name: '',
    email: '',
  });

  /**
   * Handles changes to form input fields.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission.
   * @return {Promise<any>} - The result of the form submission.
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<any> => {
    e.preventDefault();

    hideAlert();

    setLoading(true);

    const parameters: IRequest = {
      url: 'v1/signin/password',
      method: 'POST',
      postData: {
        email: '',
        password: '',
      },
    };

    const req: IResponse = await Request.getResponse(parameters);

    const { status, data } = req;

    if (status === 200) {
      //
    } else {
      showAlert({ type: 'error', text: data.title ?? '' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type="inline" color="gray" text="Hang on a second" />;
  }

  return (
    <form
      className="form shrink"
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className="form-elements">
        <div className="form-line padding-top">
          <Heading type={5} color="gray" text="Buyer info" />
        </div>
        <div className="form-line">
          <div className="flex flex-v-center flex-space-between">
            <div className="two-line">
              <div className="label-line">
                <label htmlFor="name">Name</label>
              </div>
              <Input
                type="text"
                name="name"
                value={formValues.name}
                maxLength={48}
                placeholder="Insira seu nome:"
                required
                onChange={handleChange}
              />
            </div>
            <div className="two-line">
              <div className="label-line">
                <label htmlFor="email">E-mail address</label>
              </div>
              <Input
                type="text"
                name="email"
                value={formValues.email}
                maxLength={64}
                placeholder="Insira seu e-mail:"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <Button
            type="submit"
            color="blue-filled"
            text="Efetuar pagamento & emitir tickets"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
