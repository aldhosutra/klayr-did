import { utils } from '@dist/index';

describe('findIntersection', () => {
  it('should find an intersection of two array', () => {
    const arr1 = ['1', 'different', 'item'];
    const arr2 = ['some', 'other', '1'];
    const intersection = utils.array.findIntersection([arr1, arr2]);
    expect(intersection).toStrictEqual(['1']);
  });

  it('should not find an intersection of two different array', () => {
    const arr1 = ['1', 'different', 'item'];
    const arr2 = ['some', 'other', '2'];
    const intersection = utils.array.findIntersection([arr1, arr2]);
    expect(intersection).toHaveLength(0);
  });
});

describe('asyncFilter', () => {
  it('should function like array.filter for async predicate', async () => {
    const syncPredicate = item => item === '1';
    const asyncPredicate = async item => Promise.resolve(syncPredicate(item));
    const arr = ['1', '2', '3'];
    const arrSyncFilter = arr.filter(syncPredicate);
    const arrAsyncFilter = await utils.array.asyncFilter(arr, asyncPredicate);
    expect(arrAsyncFilter).toEqual(arrSyncFilter);
  });
});
