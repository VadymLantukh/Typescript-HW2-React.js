import { UnplashImage } from '../../articles-api';

export interface ImageGalleryProps {
  articles: UnplashImage[];
  handleOpenModal: (img: UnplashImage) => void;
}
