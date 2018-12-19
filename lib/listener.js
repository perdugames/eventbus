function Listener(fn, isOnce=false) {
    this.fn = fn;
    this.isOnce = isOnce;
}

export default Listener;