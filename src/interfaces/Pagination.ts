export interface PaginationDef {
    paginate:boolean,
    page:number,
    perPage:number|null
}

export interface PaginatedResult<T> {
    currentPage:number,
    perPage:number|null,
    totalRows:number,
    data:T
}