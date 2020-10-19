import {initialState, enhancedCreateStore, rootReducer, enhancer} from './store-config';

describe('store-config', () => {

    it('configureStore returns store in PROD mode', () => {
        const testStore = enhancedCreateStore(rootReducer, initialState, enhancer);
        expect(testStore.dispatch).toBeDefined();
        expect(testStore.getState).toBeDefined();
        expect(testStore.replaceReducer).toBeDefined();
        expect(testStore.subscribe).toBeDefined();
    });

});