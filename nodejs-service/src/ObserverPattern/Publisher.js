class Publisher {
    subscriber = {};


    on(event, callback) {
        if(!this.subscriber[event])
            this.subscriber[event] = []
        this.subscriber[event].push(callback)
    }

    emit(event) {
        if(this.subscriber[event])
        for(const callback of this.subscriber[event]) {
            callback();
        }
    }

}

module.exports = Publisher
