import { Backdrop, PictureContainer, LargePic } from './Modal';
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const Modal = ({ url, onClose }) => {

    // close modal by ESC press
    const handleKeyDown = e => {
        if (e.key === 'Escape') {
            onClose()
        }
    }
    
    // create listener on ESC
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    })

    // stop listener on ESC
    useEffect(() => {
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <Backdrop onClick={onClose}>
            <PictureContainer>
                <LargePic src={url} alt='result of search' />
            </PictureContainer>
        </Backdrop>
    )
}

Modal.propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}