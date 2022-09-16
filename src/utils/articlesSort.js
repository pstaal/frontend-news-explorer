const articlesSort = (array) => {
let countObj = {};
array.forEach((item) => {
 if (countObj[item.category]) {
    countObj[item.category] = countObj[item.category] +1;
 } else {
    countObj[item.category] = 1;
 }
})
const newArray = array.map((item) => {
    return {
       ...item,
       count: countObj[item.category]
    }
})

const sortedArray = newArray.sort(function(item1, item2){
    return item2.count - item1.count
});

return sortedArray;

}

export default articlesSort;