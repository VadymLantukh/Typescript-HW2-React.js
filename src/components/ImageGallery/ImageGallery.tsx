import React from 'react';
import { UnplashImage } from '../../articles-api';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  articles: UnplashImage[];
  handleOpenModal: (img: UnplashImage) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  articles,
  handleOpenModal,
}) => {
  return (
    <ul className={css.listImages}>
      {articles.map(item => {
        return (
          <li key={item.id} className={css.itemImages}>
            <ImageCard {...item} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
