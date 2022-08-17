class SEvent{
    private static instance: SEvent;
    private fn: Function | null;
    static $el:Map<string|number, HTMLElement>;
    private el:HTMLElement | undefined;
    static active: string | number;
    private constructor(){
        this.fn = null;
        SEvent.$el = new Map();
        SEvent.active = 0;
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new SEvent()
        }
        return this.instance
    }

    add(fn:Function, active: number|string){
        this.fn = fn
        SEvent.active = active
        console.log(SEvent.$el.get(active))
        this.el = SEvent.$el.get(active)
    }
    emit(name: string|number){
        if(this.fn){
            this.el = SEvent.$el.get(name)
            SEvent.active = name
            this.fn(name, this.el) 
        }
    }
    getel(){
        return this.el
    }
    setel(key:string|number, el:HTMLElement){
        SEvent.$el.set(key, el)
    }

}


export default SEvent