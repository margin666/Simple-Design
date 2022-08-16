class SEvent{
    private static instance: SEvent;
    private temp: Array<any>;
    private constructor(){
        this.temp = []
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new SEvent()
        }
        return this.instance
    }

    setData(arg:string){
        this.temp.length = 0
        this.temp.push(arg)
    }
    getData(){
        return this.temp
    }
}


export default SEvent