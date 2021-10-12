import React, { useState } from 'react';
import { useHistory } from 'react-router';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';

import { useUsers } from 'hooks/useUsers';

const initialFormValues = {
  name: '',
  attendence: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { handleAddUser } = useUsers();

  const history = useHistory();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormValues);
    history.push('/');
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmit}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField
        label="Name"
        name="name"
        id="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendence"
        name="attendence"
        id="attendence"
        type="number"
        value={formValues.attendence}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        name="average"
        id="average"
        type="number"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
