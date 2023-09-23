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


export function sortArray (array, sorting) {
    switch (sorting) {
        case 'new': {
            array.sort((a, b) => b.id - a.id);
            return;
        }
        case 'price_up': {
            array.sort((a, b) => a.price - b.price);
            return;
        }
        case 'price_down': {
            array.sort((a, b) => b.price - a.price);
            return;
        }
        case 'all': {
            array.sort((a, b) => a.id - b.id);
            return;
        }
        default:
            return;
    }
}