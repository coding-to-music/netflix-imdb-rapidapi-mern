import React from "react";
import './Filters.scss'
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


const Filters = (props) => {

    const width = props.minWidth;
    const classes = useStyles();
    const [genre,setGenre] = React.useState('')

    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    return (

        <div className={'filters'}>
            <div className={'search-filter'}>
                <TextField className={classes.root}
                           id="search-filter"
                           label="Search"
                           variant="outlined"
                           style={{minWidth: width}}
                />
            </div>
            <div className={'year-filter'}>
                <Autocomplete className={classes.root}
                              id="year-filter"
                              options={props.filters.years}
                              getOptionLabel={(option) => option.title}
                              style={{minWidth: width}}
                              renderInput={(params) => <TextField {...params} label="Year" variant="outlined"/>}
                />
            </div>
            <div className={'genre-filet'}>
                <Autocomplete className={classes.root}
                              id="genre-filet"
                              options={props.filters.genres}
                              getOptionLabel={(option) => option.title}
                              style={{minWidth: (width+50)}}
                              renderInput={(params) => <TextField {...params} label="Genre" variant="outlined"/>}
                />
            </div>
            <div className={'sort-by'}>
                <FormControl variant="outlined" className={classes.root}>
                    <InputLabel id="select-outlined-label">Sort by</InputLabel>
                    <Select
                        labelId="select-outlined-label"
                        id="sort-by"
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
                        <MenuItem value={'rating'}>IMDb Rating</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    )
}

Filters.propTypes = {
    minWidth: PropTypes.number,
    filters:PropTypes.object
}

export default Filters;