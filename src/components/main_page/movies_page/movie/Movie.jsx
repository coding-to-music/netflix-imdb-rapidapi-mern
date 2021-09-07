import React from "react";
import './Movie.scss'
import PropTypes from 'prop-types';
import {FaRegStar} from 'react-icons/fa'
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import OverlayMovie from "./overlay_movie/OverlayMovie";


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


const Movie = (props) => {
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
            <OverlayMovie text={props.text} movie={props.movie} changeList={props.changeList}/>
        </div>
    );


    if (props.text === props.movie.list) {
        return (
            <div>
                <div className={'film'} onClick={handleOpen}>
                    <div className={'film-cover'}>
                        <img className={'cover'} alt={'Film Cover'}
                             src={props.movie.Poster}/>
                    </div>
                    <div className={'film-information'}>
                        <div className={'main'}>
                            <div className={'title'}>{props.movie.Title}</div>
                            <div className={'rating'}>
                                <FaRegStar/>{props.movie.imdbRating}
                            </div>
                        </div>
                        <div className={'release-date'}>{props.movie.Released}</div>
                        <div className={'genre'}>{props.movie.Genre}</div>
                        <div className={'description'}>{props.movie.Plot}...</div>
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
    return (
        <div/>
    )
}

Movie.propTypes = {
    movie: PropTypes.object,
    text: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    releaseDate: PropTypes.string,
    genre: PropTypes.array,
    shortDescription: PropTypes.string,
    changeList: PropTypes.func
}

export default Movie;