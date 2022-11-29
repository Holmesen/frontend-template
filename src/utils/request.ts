import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 3 * 1000, // 超时毫秒数
  withCredentials: false, // 跨域请求时是否使用凭证
})

// 前置拦截器
instance.interceptors.request.use(
  (config) => {
    /**
     * 这里一般会携带前台的参数发送给后台，如下：
     * const token = getToken()
     * if (token) {
     *   config.headers.token = token
     * }
     */
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  },
)

// 后置拦截器
instance.interceptors.response.use(
  (response) => {
    // 根据项目实际情况对响应内容做处理
    return response
  },
  async (error) => {
    const { response } = error
    if (Boolean(response) && Boolean(response.data)) {
      return await Promise.reject(error)
    }
    const { message } = error
    console.error(message)
    return await Promise.reject(error)
  },
)

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = async (url: string, data: object = {}, params: object = {}): Promise<any> => {
  return await instance({
    method: 'post',
    url,
    data,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export const get = async (url: string, params: object = {}): Promise<any> => {
  return await instance({
    method: 'get',
    url,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = async (url: string, data: object = {}, params: object = {}): Promise<any> => {
  return await instance({
    method: 'put',
    url,
    params,
    data,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = async (url: string, params: object = {}): Promise<any> => {
  return await instance({
    method: 'delete',
    url,
    params,
  })
}

export default instance
