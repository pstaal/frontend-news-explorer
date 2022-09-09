const dateFormatter = (date) => {
    let dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'});
}

export default dateFormatter;