import { EventMultiplexor,  TEvents , IEvent, isEvent} from './EventMultiplexor';
import { EventQueue } from './Queue';

export class EventLoop {
    constructor(
        private events: TEvents,
        private queue: EventQueue = new EventQueue()) {
            this.events = events;
         } 
    
    run(): void {
        while (this.events.size) {
            for (const multiplexorEvent of this.events) {
                const {  name } = multiplexorEvent;
                const q = this.queue[name];  
                q.add(multiplexorEvent);
                this.events.delete(multiplexorEvent);

            }
            this.itetation();
        }
    }
    
    private itetation(): void {
            const { fs, network, exit, promise, nextTick ,timeout, setImmediate } = this.queue;
            const queues = [timeout , network, fs, setImmediate ,exit];
            const emergency = [promise, nextTick];
            for (const q of queues) {
               if (promise.size || nextTick.size) {
                    for ( const emergencyQueue of emergency) {
                        if (!emergencyQueue.size) continue;
                        this.execute(emergencyQueue as TEvents);
                    };
                }; 
                if (!q.size) continue;
                
                this.execute(q as TEvents);
            } 
    }
    
    private execute(queue: TEvents): void {
            for (const event of queue) {
                const { callback, resourse} = event;
                callback(null, resourse) 
                queue.delete(event);
            }
        } 

};