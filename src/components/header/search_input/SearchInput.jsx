import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {makeStyles, TextField} from "@material-ui/core";


const SearchInput = (props) => {

    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#f2a999"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "dimgray"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "dimgray"
            },
        }
    }));
    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = React.useState('')

    function handleClick(event) {
        if (event.key === 'Enter' && title !== '') {
            history.push('/searchPage');
            props.searchMovies(title)
            setTitle('');
        }
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className={'search'}>
            <TextField className={classes.root}
                       id="search-input"
                       label="Search movies..."
                       variant="outlined"
                       style={{width: '700px'}}
                       onKeyDown={handleClick}
                       value={title}
                       onChange={handleChange}
            />
        </div>
    )
}

SearchInput.propTypes = {
    searchMovies: PropTypes.func,
}


export default SearchInput;