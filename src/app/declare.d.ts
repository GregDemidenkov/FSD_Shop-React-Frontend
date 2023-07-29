declare type RootState = ReturnType<typeof import("./store/rootStore").store.getState>
declare type AppDispatch = typeof import("./store/rootStore").store.dispatch