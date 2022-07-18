import { LoadMoreBtn } from 'components/MainPlace/LoadMoreBtn/LoadMoreBtn';
import { ListOfPictures } from './ListOfPictures/ListOfPictures';
import PropTypes from 'prop-types';

export const MainPlace = ({ data, onLoadMoreClick }) => {
    return (
        <div>
            <ListOfPictures data={data}/>  
            <LoadMoreBtn data={data} onLoadMoreClick={onLoadMoreClick} />
        </div>
    )
}

MainPlace.propTypes = {
    data: PropTypes.object.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
}