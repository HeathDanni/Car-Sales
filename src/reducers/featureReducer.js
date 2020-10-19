const initialState = {
    features: [

    ]
};

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            return {
                ...state,
                features: [...state.features, {name: action.payload}]
            };

        case "REMOVE_FEATURE":
            return {
                ...state,
                features: [state.features.filter((name) => action.name)
                ]
            };

        default:
            return state;
    };
};