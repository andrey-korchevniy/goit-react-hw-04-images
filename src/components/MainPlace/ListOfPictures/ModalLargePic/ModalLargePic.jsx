import { Backdrop, PictureContainer, LargePic } from './ModalLargePic.styled';
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const ModalLargePic = ({ url, onClose }) => {

    // create listener on ESC
    useEffect(() => (window.addEventListener('keydown', handleKeyDown)), [])

    // stop listener on ESC
    useEffect(() => {
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })

    // close modal by ESC press
    const handleKeyDown = e => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    return (
        <Backdrop onClick={onClose}>
            <PictureContainer>
                <LargePic src={url} alt='result of search' />
            </PictureContainer>
        </Backdrop>
    )
}

ModalLargePic.propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}