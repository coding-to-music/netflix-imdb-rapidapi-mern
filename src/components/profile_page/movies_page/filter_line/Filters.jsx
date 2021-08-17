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
    function yearsList() {
        let currentYear = new Date().getFullYear();
        let years = [];
        for (let i = currentYear; i > 1969; i--) {
            years.push({title: i.toString()})
        }
        return years;
    }

    const years = yearsList();
    const classes = useStyles();
    const genres = [
        {title: 'Action'},
        {title: 'Adventure'},
        {title: 'Animation'},
        {title: 'Biography'},
        {title: 'Comedy'},
        {title: 'Crime'},
        {title: 'Documentary'},
        {title: 'Drama'},
        {title: 'Family'},
        {title: 'Fantasy'},
        {title: 'Film'},
        {title: 'Noir'},
        {title: 'History'},
        {title: 'Horror'},
        {title: 'Music'},
        {title: 'Musical'},
        {title: 'Mystery'},
        {title: 'Romance'},
        {title: 'Sci-Fi'},
        {title: 'Short'},
        {title: 'Sport'},
        {title: 'Superhero'},
        {title: 'Thriller'},
        {title: 'War'},
        {title: 'Western'}
    ];

    return (

        <div className={'filters'}>
            <div className={'search-filter'}>
                <TextField className={classes.root}
                           id="outlined-basic"
                           label="Search"
                           variant="outlined"
                           style={{minWidth: width}}
                />
            </div>
            <div className={'year-filter'}>
                <Autocomplete className={classes.root}
                              id="combo-box-demo"
                              options={years}
                              getOptionLabel={(option) => option.title}
                              style={{minWidth: width}}
                              renderInput={(params) => <TextField {...params} label="Year" variant="outlined"/>}
                />
            </div>
            <div className={'genre-filet'}>
                <Autocomplete className={classes.root}
                              id="combo-box-demo"
                              options={genres}
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
                        id="select-outlined"
                        label="Sort by"
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
}

export default Filters;