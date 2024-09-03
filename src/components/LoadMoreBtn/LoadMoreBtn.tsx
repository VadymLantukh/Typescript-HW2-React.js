import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreProps {
  handleLoadMore: () => Promise<void>;
}

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.btnLoadMore} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
