import axios from 'axios'

axios.defaults.timeout = 600000
axios.defaults.baseURL = 'http://api-test.netease.com:3000/'
axios.defaults.withCredentials = true

const successCode = 0

axios.interceptors.response.use((response: any) => {
  const jsonRes = response.data
  const { code, msg, data } = jsonRes
  if (code === successCode) {
    return {
      code,
      msg,
      data
    }
  }
  const errMsg = `[${response.config.url}][${jsonRes.code}] ${msg || 'Error'}`
  return Promise.reject(new Error(errMsg))
})

export const handle = (defer: Promise<any>, desc: string, showSuc?: boolean, showErr?: boolean) => {
  defer.catch(() => {
    showErr && ElMessage.error(`${desc}失败`)
  })

  return defer.then((r) => {
    showSuc && ElMessage.success(`${desc}成功`)
    return r.data
  })
}
