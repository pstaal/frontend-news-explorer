const stringFormatter = (array) => {
    const keywordsArray = array.map((item) => { return item.category });
    const uniqueKeywordsSet = new Set(keywordsArray);
    const uniqueKeywordsArray = [...uniqueKeywordsSet];
    let string;
    if (uniqueKeywordsArray.length < 3) {
        string = uniqueKeywordsArray.join(', ');
    } else {
        string = `${uniqueKeywordsArray[0]}, ${uniqueKeywordsArray[1]}, and ${uniqueKeywordsArray.length -2} other`
    }
    return string;
};

export default stringFormatter;
