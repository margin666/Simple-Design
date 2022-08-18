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




export function rtype(target:any){
    return /\s(\w+)\]/.exec(Object.prototype.toString.call(target))![1].toLowerCase()
}

export function deepCopy(target:any, map = new Map()){
    if(typeof target !== 'object' || typeof target !== 'function'){
        return target
    }else{
        const t = rtype(target)
        if(t === 'object'){
            if(map.has(target)){
                return map.get(target)
            }
            const obj = Object.create(target.__proto__)
            map.set(target, obj)
            for(let key in target){
                obj[key] = deepCopy(target[key], map)
            }
            return obj
        }
        if(t === 'map'){
            const m = new Map()
            for(let item of target){
                m.set(item[0], deepCopy(item[1]))
            }
            return m
        }
        if(t === 'array'){
            return target.map(el => deepCopy(el))
        }
    }
}






