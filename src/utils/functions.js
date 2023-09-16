export const urlParsing = (params, pagesCount) => {
    let pageNumber = 1;
    if (params && params.includes('=')) {
        let temp = params.split('=');
        if (temp.length === 2 && temp[0] === 'p') {
            temp = +temp[1];
            if (temp && temp <= pagesCount) {
                pageNumber = temp;
            }
        }
    }
    return pageNumber;
}