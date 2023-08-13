function arrayMoveMutable(array, fromIndex, toIndex): void {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

export function preprocessRequired(properties: string[] | string | undefined, required: string): string[] | string {
  let tmpArray = properties;
  if (tmpArray === undefined) return required;
  if (Array.isArray(properties)) {
    const findIndex = tmpArray.indexOf(required);
    tmpArray = (tmpArray as string[]).filter((v, i, self) => {
      return i == self.indexOf(v);
    });
    if (tmpArray.includes(required) && findIndex > 0) {
      arrayMoveMutable(tmpArray, findIndex, 0);
    }
    if (tmpArray[0] !== required) {
      tmpArray.unshift(required);
    }
  }
  if (typeof tmpArray === 'string' && tmpArray !== required) {
    tmpArray = required;
  }
  return tmpArray;
}
