export const addFeature = () => {
    return {type: 'ADD_FEATURE', payload: 'addedFeature'};
};

export const removeFeature = () => {
    return {type: 'REMOVE_FEATURE'};
};

export const addToTotal = () => {
    return {type: 'ADD_TO_TOTAL', payload: 'addedPrice'};
};