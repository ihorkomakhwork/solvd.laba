import { type } from "os";
import { sleep } from "../api/util";

export const EVENTS_NAME = {
    fs:  'fs',
    network: 'network',
    setImmediate: 'setImmediate',
    exit: 'exit',
    promise: 'promise',
    nextTick: 'nextTick',
    timeout: 'timeout',
} as const;

const EVENT_DELEY = {
    fs: 4000,
    network: 2000,
    setImmediate: 1000,
    exit: 500,
    promise: 2000,
    nextTick: 1000,
    timeout: 3000,
} as const;

type TEventNameValue<T> = T[keyof T];  

export type TEventsName = TEventNameValue<typeof EVENTS_NAME>;


export interface IEvent {
    name: TEventsName;
    callback: Function;
    resourse: any;
}; 

export type TEvents = Set<IEvent>;

export const isEvent = (target: TEventsName | any): target is TEventsName  => {
    return Object.keys(EVENTS_NAME).includes(target);
};

export class EventMultiplexor {
    private static events: TEvents = new Set<IEvent>();
    
    public static add(event: IEvent): IEvent{
        console.log(`\nReading ${event.name} resources...\n`);
        
        const delay = EVENT_DELEY[event.name];
        sleep(delay);
        this.events.add(event);
        return event;
    };
    
    public static get(): TEvents{
        return this.events;
    }
    
    public static remove(event: IEvent): IEvent {
        this.events.delete(event);
        return event;
    }
    
    public static clearAll(): void {
        this.events.clear();
    }
};