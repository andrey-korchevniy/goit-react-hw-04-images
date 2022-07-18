import nothing from 'images/nothing.png';
import typeword from 'images/search.png';
import { useState, useEffect } from "react";
import { FindBlock, FindText, Img, Li, Ul, Margin } from './ListOfPictures.styled';
import {ModalLargePic} from './ModalLargePic/ModalLargePic';
import PropTypes from 'prop-types';

export const ListOfPictures = ({ data }) => {
    const [url, setUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

// open modal window
    const openModal = (e) => {
        setIsModalOpen(true);
        setUrl(e.target.id);
    }

// close modal window
    const closeModal = () => {
        setIsModalOpen(false)
    }

// set scroll to end of the page
    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }, [data.photos])
    
    const { total, photos } = data;
    let message = 'Type any word to find pictures';
    let picture = typeword;

    if (total === 0) { message = 'Nothing has been found'; picture = nothing };
    if (total === -1) { message = 'Somesing wrong is happening with server'; picture = nothing };

    if (total > 0) {
        return (
            <Ul>
                {photos.map(pic =>
                    <Li key={pic.id} onClick={openModal}>
                        <Img src={pic.previewURL} alt={pic.tags} id={pic.largeImageURL}></Img>
                    </Li>
                )}
                {isModalOpen && <ModalLargePic url={url} onClose={closeModal} />}
                <Margin></Margin>
            </Ul>
        )
    } else {
        return (
            <FindBlock>
                <FindText>
                    {message}
                </FindText>
                <img src={picture} alt='nothing is found'></img>
            </FindBlock>
                )
        }
    }
    
ListOfPictures.propTypes = {
    data: PropTypes.object.isRequired,
}
