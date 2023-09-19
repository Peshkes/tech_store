import {useParams} from "react-router-dom";

export const useSortLinkAnalyst = (customString) => {
    const {sort} = useParams();
    let sortString;
    if (sort && sort.includes('=')) {
        sortString = sort;
    } else {
        sortString = customString;
    }

    const analyzeInformation = () => {
        let filterArray;
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

        let sorting = filterArray.findIndex(item => item.item === 'other');
        if (sorting !== -1)
            sorting = filterArray.splice(sorting, 1)[0].data;
        else
            sorting = null;

        return {
            filterArray,
            sorting
        }
    };

    const createUrl = (sortingObject) => {
        return sortingObject.filterArray.concat(sortingObject.sorting).join('&');
    }

    return {
        sortString,
        analyzeInformation,
        createUrl
    };
}
