

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


// 如果是string，直接使用，如果是tuple，第一项作为条件，后面两项作为class名
type classType = (string | [any, string, string?])[]

// 创建一个命名空间，返回一个生成class名的函数，以及生成多个classname的函数
// 框架名-命名空间--后缀
// classes => string/表达式
export function createNamespace(name:string){
    const namespace = 'simple-'+name
    const createBEM = (suffix?:string) => {
        if(!suffix)return namespace
        return suffix.startsWith('--')?`${namespace}${suffix}`:`${namespace}__${suffix}`
    }
    const classes = (...classes:classType) => {
        return classes.map(el => {
            if(Array.isArray(el)){
                const [condition, truthy,falsy=null] = el
                return condition?truthy:falsy
            }
            return el
        })
    }
    return {
        n:createBEM,
        classes

    }
}