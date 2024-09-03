import { UnplashImage } from "../../articles-api";

export type CardProps = {
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
