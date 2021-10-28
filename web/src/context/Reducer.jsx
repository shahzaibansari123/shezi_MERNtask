export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            if (
                action.payload.name &&
                action.payload.email &&
                action.payload.contact &&
                action.payload.website &&
                action.payload.address
            ) {
                return { ...state, user: action.payload };
            } else {
                console.log(`invalid data`);
                return state;
            }
        }
        case "LOGOUT": {
            return { ...state, user: null }; // set this to null on purpose, do not change
        }

        default: {
            return state;
        }
    }
};
