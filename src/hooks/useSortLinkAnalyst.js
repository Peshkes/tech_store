import {useParams} from "react-router-dom";

export const useSortLinkAnalyst = (customString) => {
    const {sort} = useParams();
    let filterArray;
    let sortString;
    let createUrl;
    let sorting;

    if (sort && sort.includes('=')) {
        sortString = sort;
    } else {
        sortString = customString;
    }

    if (sortString) {
        if (sortString.includes('&'))
            filterArray = sortString.split('&');
        else
            filterArray = [sortString];

        filterArray = filterArray.map(item => {
            const result = {};
            const tmp = item.split('=');
            result.item = tmp.shift();
            if (tmp[0].includes('-')) {
                result.type = 'range';
                result.data = tmp[0].split('-');
            } else {
                result.type = 'enumeration';
                if (tmp[0].includes('+')) {
                    result.data = tmp[0].split('+');
                } else {
                    result.data = [tmp[0]];
                }
            }
            return result;
        });

        sorting = filterArray.findIndex(item => item.item === 'other');
        if (sorting !== -1)
            sorting = filterArray.splice(sorting, 1)[0].data[0];
        else
            sorting = null;

        createUrl = (sortingObject) => {
            filterArray = filterArray.map(object => (object.item === sortingObject.item) ? sortingObject : object);
            return filterArray.concat(sorting).join('&');
        }
    }

    return {
        sortString,
        filterArray,
        sorting,
        createUrl
    };
}
