import axios from 'axios'

import csrftoken from 'externals/CSRFToken';
import routes from "shared/Routes";
import IAppResponse from "shared/IAppResponse";


export const serverApi = axios.create({
    headers: {
        'X-CSRF-TOKEN': csrftoken,
        'Accept': 'application/json'
    },
    baseURL: routes.baseUrl()
});

export type ServerApiResponse<T> = string|IAppResponse<T>;