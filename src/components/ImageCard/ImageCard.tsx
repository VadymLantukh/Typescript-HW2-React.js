import { FC } from 'react';
import { UnplashImage } from '../../articles-api';

type CardProps = {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  rel: string;
  description: string;
  handleOpenModal: (urls: UnplashImage) => void;
};

const ImageCard: FC<CardProps> = ({
  urls,
  rel,
  description,
  handleOpenModal,
}) => {
  return (
    <div>
      <img
        onClick={() => handleOpenModal({ id: '', urls, rel, description })}
        src={urls.small}
        rel={rel}
        alt={description}
        width="360px"
        height="220px"
      />
    </div>
  );
};

export default ImageCard;
