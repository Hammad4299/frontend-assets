export default interface IAppResponse<T>{
    status:boolean
    errors:{[field:string]: string[]}
    data:T,
    redirectUrl:string,
    reload:boolean,
    message:string
}