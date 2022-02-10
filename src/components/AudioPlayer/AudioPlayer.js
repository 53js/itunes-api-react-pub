import React from 'react';
import PropTypes from 'prop-types';

export const AudioPlayer = ({
    mp3Src,
    title,
}) => {
    return (
        <section>
            <h2>{title}</h2>
            <audio controls src={mp3Src} />
        </section>
    );
};

AudioPlayer.propTypes = {
    title: PropTypes.string.isRequired,
    mp3Src: PropTypes.string.isRequired,
};