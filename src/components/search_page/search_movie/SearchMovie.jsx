import React from "react";
import './SearchMovie.scss'
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import OverlaySearchMovieContainer from "./overlay_search_movie/OverlaySearchMovieContainer";




const SearchMovie = (props) => {

    function getModalStyle() {
        return {
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        };
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            backgroundColor: '#F2EAE4',
            width: '60%',
            border: '1px solid #727373',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <OverlaySearchMovieContainer id={props.movie.imdbID}/>
        </div>
    );

    return (
        <div>
            <div className={'search-film'} onClick={handleOpen}>
                <div className={'search-film-cover'}>
                    <img className={'search-cover'} alt={'Film Cover'}
                         src={props.movie.Poster}/>
                </div>
                <div className={'search-film-information'}>
                    <div className={'search-title'}>{props.movie.Title}</div>
                    <div className={'search-release-date'}>Year: {props.movie.Year}</div>
                    <div className={'search-type'}>Type: {props.movie.Type}</div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

SearchMovie.propTypes = {
    movie: PropTypes.object,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
}

export default SearchMovie;