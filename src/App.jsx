import { useState, useEffect } from "react";
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MainPlace } from "components/MainPlace/MainPlace";
import { getPictures } from 'api/pixabay-api';

export const App = () => {
  const [photos, setPhotos] = useState([]);         // array for render
  const [total, setTotal] = useState(null);         // total amount of pictures in search result
  const [page, setPage] = useState(1);              // number of a current page
  const [query, setQuery] = useState('');           // a search word or frase
  const [isLoaded, setIsLoaded] = useState(false);  // spinner status

  const dataSet = { photos, total, page, query, isLoaded };

  // processing search-btn click
  const onSearch = (data) => {
    if (data.query !== query) {
      setQuery(() =>  data.query );
      setPage(1);
      setPhotos([]);
      setTotal(null);
      setIsLoaded(true);
    }
  }

  // processing loadMore-btn click
  const onLoadMoreClick = () => {
    setPage(prev => prev + 1);
    setIsLoaded(true);
  }
  
  // processing an income result of the search
  const handleSearchResult = (data) => {
    if (data !== undefined) {
      setPhotos(photos.concat(data.data.hits));
      setTotal(data.data.totalHits);
      setIsLoaded(false);
    } else {
      setPhotos([]);
      setIsLoaded(false);
    };
  }

  // get API 
  useEffect(() => {
    if (query !== '') {
      try {
        getPictures(query, page, handleSearchResult);
      } catch (error) {
        setTotal(-1);
        handleSearchResult();
      }
    }
  }, [query, page]);

  return (
    <div>
      <Searchbar onSearch={onSearch} />
      <MainPlace data={dataSet} onLoadMoreClick={onLoadMoreClick} />
    </div>
  );
}

