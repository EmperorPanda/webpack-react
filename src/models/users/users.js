export default {
    namespace: 'users',
    state: {
        text: {}
    },
    effects: {
        
    },
    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        },
    }
};