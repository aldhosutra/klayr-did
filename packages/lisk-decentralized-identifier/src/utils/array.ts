export function findIntersection<T>(arr: T[][]): T[] {
  if (arr.length === 0) return [];
  return arr.reduce((a, b) => a.filter(c => b.includes(c)));
}

export async function asyncFilter<T>(arr: T[], predicate: (data: T) => Promise<boolean>) {
  const results = await Promise.all(arr.map(predicate));
  return arr.filter((_v, index) => results[index]);
}
