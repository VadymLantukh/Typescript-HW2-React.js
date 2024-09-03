import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchArticles, UnplashImage } from './articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

function App() {
  const [query, setQuery] = useState<string>('');
  const [articles, setArticles] = useState<UnplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<UnplashImage | null>(null);
  const [isVisualButton, setIsVisualButton] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const handleChangeQuary = (newQuery: string): void => {
    setIsLastPage(false);
    setArticles([]);
    setIsVisualButton(true);
    setQuery(newQuery);
    setPage(1);
  };

  const handleOpenModal = (img: UnplashImage): void => {
    setModalImage(img);
    setOpenModal(true);
  };

  const closeModal = (): void => {
    setModalImage(null);
    setOpenModal(false);
  };

  const handleLoadMore = async (): Promise<void> => {
    setIsLoadingMore(true);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (query.trim() === '') return;

    const handleSearch = async (): Promise<void> => {
      try {
        if (page === 1) setIsLoader(true);
        setIsLoader(true);
        setIsError(false);
        const data = await fetchArticles(query, page);
        if (data.results.length === 0) {
          toast.error('No found images');
          return;
        }
        if (data.total <= data.results.length) {
          toast('There are no more pictures', { icon: '😞' });
          setIsVisualButton(false);
        }
        setArticles(prev => [...prev, ...data.results]);
        setIsLastPage(page >= data.total_page);
      } catch (error) {
        setIsError(true);
        throw new Error((error as Error).message);
      } finally {
        setIsLoader(false);
        setIsLoadingMore(false);
      }
    };

    handleSearch();
  }, [query, page]);

  return (
    <>
      <SearchBar handleChangeQuary={handleChangeQuary} />
      {isLoader && <Loader />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} handleOpenModal={handleOpenModal} />
      )}
      {articles.length > 0 &&
        !isLoadingMore &&
        isVisualButton &&
        !isLastPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {isLoadingMore && <Loader />}
      {modalImage && (
        <ImageModal
          openModal={openModal}
          closeModal={closeModal}
          urls={modalImage.urls.regular}
          alt={modalImage.description || ''}
        />
      )}
      {isError && <ErrorMessage />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
