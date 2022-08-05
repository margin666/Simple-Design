

const defNamespace = 'simple'
// 使用bem命名规范
const _bem = (
    namespace: string, // 框架名 
    block: string, // -模块名
    blockSuffix: string, // -模块的补充后缀
    element: string, // __模块内部元素
    modifier: string // --修饰属性(之村、颜色、状态、操作等)
) => {
    let cls = `${namespace}-${block}`
    if(blockSuffix){
        cls += `-${blockSuffix}`
    }
    if(element){
        cls += `__${element}`
    }
    if(modifier){
        cls += `--${modifier}`
    }
    return cls
}


export const useNamespace = (block: string) => {
    const namespace = defNamespace
    const b = (blockSuffix = '') => {
        return _bem(namespace, block, blockSuffix, '', '')
    }
    const e = (element?:string) => {
        return element?_bem(namespace, block, '', element, ''):''
    }
    const m = (modifier?: string) => {
        return modifier?_bem(namespace, block, '', '', modifier):''
    }
    const be = (blockSuffix?:string, element?:string) => {
        return blockSuffix && element
                ? _bem(namespace, block, blockSuffix, element, '')
                : ''
    }
    const bm = (blockSuffix?:string, modifire?:string) => {
        return blockSuffix && modifire
            ? _bem(namespace, block, blockSuffix, '', modifire)
            : ''
    }
    const em = (element?:string, modifire?:string) => {
        return element && modifire
            ? _bem(namespace, block, '', element, modifire)
            : ''
    }

    const bem = (blockSuffix?:string, element?:string, modifire?:string) => {
        return blockSuffix && element && modifire 
            ?_bem(namespace, block, blockSuffix, element, modifire)
            : ''
    }

    const is = (name:string, status:boolean) => {
        return status?`is-${name}`:''
    }

    return {
        b,e,m,be,bm,em,bem,is
    }
}

