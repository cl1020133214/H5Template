import api from '../index'
import urls from './urls'

const header = {}

export default {
    wx_get_sdk_config(params){
        // return出去了一个promise
        return api.get(urls.wx_get_sdk_config, params, header)
    },
    Activitytime(params){
        // return出去了一个promise
        return api.get(urls.Activitytime, params, header)
    },
    randomPrize(params){
        // return出去了一个promise
        return api.get(urls.randomPrize, params, header)
    },
}
