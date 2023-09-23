import {useParams} from "react-router-dom";

export const useSortLinkAnalyst = (customString) => {
    const {sort} = useParams();
    let filterArray = [];
    let sortString;
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
    }

    let createUrl = (sortingObject) => {
        if (sortingObject.item === 'other') {
            if (sortingObject.data[0] === 'all')
                sorting = null;
            else
                sorting = sortingObject.data[0];
        } else {
            let index = filterArray.findIndex(object => object.item === sortingObject.item);
            if (index === -1)
                filterArray.push(sortingObject);
            else {
                if (sortingObject.type === 'enumeration') {
                    addOrRemoveItem(sortingObject, index);
                } else if (sortingObject.type === 'range') {
                    filterArray[index] = sortingObject;
                }
            }
        }
        return formString()
    }

    let rebuildUrl = (sortingObject) => {
        filterArray = [filterArray.find(object => object.item === sortingObject.item)];

        addOrRemoveItem(sortingObject, 0);
        return formString();
    };

    function addOrRemoveItem(sortingObject, index){
        if (sortingObject.checked) {
            if (filterArray[index]) {
                filterArray[index].data.push(...sortingObject.data);
            } else {
                filterArray[0] = {...sortingObject};
            }
        } else {
            filterArray[index].data.splice(filterArray[index].data.findIndex(item => item === sortingObject.data[0]), 1);
            if (filterArray[index].data.length === 0)
                filterArray.splice(index, 1);
        }
    }
    function formString() {
        if (sorting)
            filterArray = filterArray.concat([{item: 'other', type: 'enumeration', data: [sorting]}]);
        return filterArray.map(object => {
            if (object.type === 'enumeration') {
                return `${object.item}=${object.data.join('+')}`;
            } else if (object.type === 'range') {
                return `${object.item}=${object.data[0]}-${object.data[1]}`;
            }
        }).join('&');
    }

    return {
        sortString,
        filterArray,
        sorting,
        createUrl,
        rebuildUrl
    };
}
