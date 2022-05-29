import axios from 'axios'

const request = (url: string, method: string, data: any = null) => {
  const options: any = {
    url,
    method: method.toLowerCase()
  }
  if (method === 'post') {
    options.data = JSON.stringify(data)
  }
  if (method === 'get') {
    options.params = data
  }
  return axios(options)
}

export const getBlogList = (data: any) => request('blog/list', 'get', data)

export const getBlogDetail = (data: any) => request('blog/detail', 'get', data)
