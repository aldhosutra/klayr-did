export const createStoreGetter = stateStore => ({
  getStore: (p1, p2) => stateStore.getStore(p1, p2),
});
