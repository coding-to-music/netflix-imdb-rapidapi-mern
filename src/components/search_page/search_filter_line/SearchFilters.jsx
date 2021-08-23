import React from "react";
import './SearchFilters.scss'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {FormControl, InputLabel, makeStyles, MenuItem, Select, TextField} from "@material-ui/core";
import PropTypes from 'prop-types';


const useStyles = makeStyles(() => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "dimgray"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "dimgray"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "dimgray"
        },
    }
}));


const SearchFilters = (props) => {

    const width = props.minWidth;
    const classes = useStyles();
    const [genre, setGenre] = React.useState('')

    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    return (

        <div className={'filters'}>
            <div className={'year-filter'}>
                <Autocomplete className={classes.root}
                              id="year-filter"
                              options={props.filters.years}
                              getOptionLabel={(option) => option.title}
                              style={{minWidth: width}}
                              renderInput={(params) => <TextField {...params} label="Year" variant="outlined"/>}
                />
            </div>
            <div className={'genre-filter'}>
                <Autocomplete className={classes.root}
                              id="genre-filter"
                              options={props.filters.genres}
                              getOptionLabel={(option) => option.title}
                              style={{minWidth: (width + 50)}}
                              renderInput={(params) => <TextField {...params} label="Genre" variant="outlined"/>}
                />
            </div>
            <div className={'sort-by'}>
                <FormControl variant="outlined" className={classes.root}>
                    <InputLabel id="select-outlined-label">Sort by</InputLabel>
                    <Select
                        labelId="select-outlined-label"
                        id="sort-by-filter"
                        label="Sort by"
                        value={genre}
                        onChange={handleChange}
                        style={{minWidth: width}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'alphabetA'}>A-Z</MenuItem>
                        <MenuItem value={'alphabetZ'}>Z-A</MenuItem>
                        <MenuItem value={'year'}>Year</MenuItem>
                        <MenuItem value={'type'}>Type</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    )
}

SearchFilters.propTypes = {
    minWidth: PropTypes.number,
    filters: PropTypes.object,
    searchMovies: PropTypes.func
}

export default SearchFilters;