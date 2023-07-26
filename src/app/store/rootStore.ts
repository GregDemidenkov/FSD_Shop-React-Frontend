import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { configureStore  } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// import posts, { GET_PRODUCTS, getProductsSaga } from './posts'


const sagaMiddleware = createSagaMiddleware()

function* sagas() {
    // yield takeEvery(GET_PRODUCTS, getProductsSaga)
}
    
export const store = configureStore({
    devTools: true,
    reducer: {
        // posts,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)


export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>