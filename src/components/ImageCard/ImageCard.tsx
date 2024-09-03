import { FC } from 'react';
import { CardProps } from './TypesCardProps';

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
