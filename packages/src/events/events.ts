export interface tempObj{
    name?: string;
    label?: string;
}

export class Tabs{
    tabs: Map<HTMLElement, tempObj>;
    size: string;
    constructor(){
        this.tabs = new Map();
        this.size = '';
    }
    add(e: HTMLElement, obj:tempObj){
        this.tabs.set(e, obj)
    }
    get(e:HTMLElement){
        return this.tabs.get(e)
    }
    setSize(size: string){
        this.size = size
    }

}











