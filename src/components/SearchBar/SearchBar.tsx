import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { RiSearchEyeFill } from 'react-icons/ri';
import css from './SearchBar.module.css';
import React from 'react';
import { FormValue, SearchBarProps } from './TypesSearchBarProps';

const SearchBar: React.FC<SearchBarProps> = ({ handleChangeQuary }) => {
  const handleSubmit = (
    values: FormValue,
    options: FormikHelpers<FormValue>
  ) => {
    if (values.query.trim() === '') {
      toast.error('Please enter the text!');
      return;
    }

    handleChangeQuary(values.query);
    options.resetForm();
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
        <Form className={css.boxForm}>
          <Field
            className={css.fieldForm}
            type="text"
            name="query"
            placeholder="Search images..."
          />
          <button type="submit" className={css.btnForm}>
            {' '}
            <RiSearchEyeFill className={css.iconBtn} />
            Search
          </button>
        </Form>
      </Formik>

      <Toaster position="bottom-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
