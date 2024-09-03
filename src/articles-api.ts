import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';

export interface UnplashImage {
  id: string;
  rel: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  description: string;
}

export interface SearchResponse {
  total: number;
  total_page: number;
  results: UnplashImage[];
}

export const fetchArticles = async (
  query: string,
  page: number
): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>('/search/photos', {
    params: {
      client_id: '0zZLPuE0vkvpT6eDFrj12ezhL4GmM_vcJGIyTNSWdbQ',
      page,
      query,
      orientation: 'landscape',
    },
  });

  return response.data;
};
