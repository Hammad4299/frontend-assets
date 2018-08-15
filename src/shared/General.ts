import {PaginatedResult, PaginationDef} from "interfaces/Pagination";
import IAppResponse from "shared/IAppResponse";
import FieldsState from "shared/FieldsState";

export function paginate<T>(data:T[], paginationDef:PaginationDef):PaginatedResult<T[]> {
    if(paginationDef.paginate) {
        const start = (paginationDef.page-1)*paginationDef.perPage;
        return {
            data: data.slice(start, start + paginationDef.perPage),
            currentPage: paginationDef.page,
            perPage: paginationDef.perPage,
            totalRows:data.length
        };
    } else {
        return {
            data: data,
            currentPage: 1,
            perPage: data.length,
            totalRows: data.length
        };
    }
}


export function extractResponseErrors<T>(response:IAppResponse<T>, defaultFields:string[] = []) {
    let toRet:FieldsState = new FieldsState(defaultFields);
    if(response!==null){
        for(const field in response.errors) {
            if(response.errors.hasOwnProperty(field)){
                const errArr = response.errors[field];
                toRet.setErrors(field,errArr);
            }
        }
    }

    return toRet;
}