import {processResponse} from "root/jquery-dependent/FormHelpers/Utils";
import {serverApi, ServerApiResponse} from "remotes/ApiManager";
import IAppResponse from "shared/IAppResponse";
import {getServerResponse} from "root/jquery-dependent/FormHelpers/Utils";
import {AxiosResponse} from "axios";

export default class RemoteService {
    protected defaultProcessResponse(resp:AxiosResponse<ServerApiResponse<any>>):IAppResponse<any> {
        const r = processResponse(getServerResponse(resp.data));
        if(r!==null && r.status) {
            return r;
        }
        return null;
    }
}