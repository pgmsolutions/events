module.exports = {
    /** List of callbacks in the form of {event: string, func: function} */
    _callbacks: [],
    /** UID of each callbacks */
    _nextCbID: 1,

    /**
     * Sets up a new callback
     * @param event the name of the event
     * @param callback the function to call
     * @returns a UID of the callback
     */
    on: function(event, callback){
        let uid = Events._nextCbID++;
        Events._callbacks.push({id: uid, event: event, func: callback});
        return uid;
    },

    /**
     * Fires a callback
     * @param event the event to fire
     * @param ... the arguments to pass
     */
    emit: function(event){
        let params = [];
        for(let i = 1; i < arguments.length; ++i)
            params.push(arguments[i]);
        for(let i = 0; i < Events._callbacks.length; ++i)
            if(Events._callbacks[i].event === event)
                Events._callbacks[i].func.apply(this, params);
    },

    /**
     * Removes a specific callback
     * @param uid the UID of the event
     */
    off: function(uid){
        Events._callbacks = Events._callbacks.filter(e => e.id !== uid);
    },

    /**
     * Removes all callbacks for a specific event name
     * @param eventName the name of the event
     */
    offAll: function(eventName){
        Events._callbacks = Events._callbacks.filter(e => e.event !== eventName);
    }
};