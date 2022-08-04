


// 如果是string，直接使用，如果是tuple，第一项作为条件，后面两项作为class名
type classType = (string | [any, string, string?])[]
export function createNamespace(name:string){
    const namespace = 'sim-'+name
    const createBEM = (suffix?:string) => {
        if(!suffix)return namespace
        return suffix.startsWith('__')?`${namespace}${suffix}`:`${namespace}__${suffix}`
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