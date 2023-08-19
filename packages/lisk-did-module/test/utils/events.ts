/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { EventQueuer, codec } from 'lisk-sdk';

export const eventResult = (
  eventQueue: EventQueuer['eventQueue'],
  EventClass: any,
  moduleName: string,
  expectedResult: any,
  length = 1,
  index = 0,
) => {
  expect(eventQueue.getEvents()).toHaveLength(length);
  expect(eventQueue.getEvents()[index].toObject().name).toEqual(new EventClass(moduleName).name);

  const eventData = codec.decode<Record<string, unknown>>(
    new EventClass(moduleName).schema,
    eventQueue.getEvents()[index].toObject().data,
  );

  expect(eventData).toEqual(expectedResult);

  return true;
};
