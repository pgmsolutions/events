/**
 * Sets up a new callback
 * @param event the name of the event
 * @param callback the function to call
 * @returns a UID of the callback
 */
export function on(event: string, callback: () => void) : number;

/**
 * Fires a callback
 * @param event the event to fire
 * @param ... the arguments to pass
 */
export function emit(event: string) : void;

/**
 * Removes a specific callback
 * @param uid the UID of the event
 */
export function off(uid: number) : void;

/**
 * Removes all callbacks for a specific event name
 * @param eventName the name of the event
 */
export function offAll(eventName: string) : void;