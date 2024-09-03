import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className={css.loaderBox}>
      <PropagateLoader color="#f5e61c" />
    </div>
  );
};
export default Loader;
