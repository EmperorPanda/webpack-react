export default {
    namespace: 'home',
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