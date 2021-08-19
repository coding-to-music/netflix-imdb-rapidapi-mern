function yearsList() {
    let currentYear = new Date().getFullYear();
    let years = [];
    for (let i = currentYear; i > 1969; i--) {
        years.push({title: i.toString()})
    }
    return years;
}

let initialState = {
    genres: [
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
    ],
    years: yearsList(),
}

const filtersReducer = (state = initialState) => {
    return state;
}

export default filtersReducer;