import routes from "shared/Routes";
import {processResponse} from "root/jquery-dependent/FormHelpers/Utils";
import {serverApi, ServerApiResponse} from "remotes/ApiManager";
import IAppResponse from "shared/IAppResponse";
import {getServerResponse} from "../jquery-dependent/FormHelpers/Utils";
import {AxiosResponse} from "axios";

export default class RemoteService {
    protected defaultProcessResponse(resp:AxiosResponse<ServerApiResponse<any>>):IAppResponse<any> {
        const r = processResponse(getServerResponse(resp.data));
        if(r!==null && r.status) {
            return r;
        }
        return null;
    }

    getWidgetData(id:string|number):Promise<IAppResponse<any>> {
        return serverApi.request<ServerApiResponse<any>>({url:routes.widgetGet(id)})
            .then(r=>this.defaultProcessResponse(r));
    }

    getLeafLogixData(id:string|number) {
        return serverApi.request<ServerApiResponse<any>>({url:routes.leaflogixGet(id)})
            .then(r=>this.defaultProcessResponse(r));
    }

    getIQMatrixData(id:string|number) {
        return serverApi.request<ServerApiResponse<any>>({url:routes.iqmatrixGet(id)})
            .then(r=>this.defaultProcessResponse(r));
    }

    getGreenbitRestData(id:string|number) {
        return serverApi.request<ServerApiResponse<any>>({url:routes.gbrestGet(id)})
            .then(r=>this.defaultProcessResponse(r));
    }

    getBakerData(id:string|number) {
        return serverApi.request<ServerApiResponse<any>>({url:routes.bakerGet(id)})
            .then(r=>this.defaultProcessResponse(r));
    }

    getGreenbitCompanies(username:string,password:string) {
        return serverApi.request<ServerApiResponse<any>>({
            url:routes.greenbitGetCompanies(),
            params: {
                username,
                password
            }
        })
        .then(r=>this.defaultProcessResponse(r));
    }
}