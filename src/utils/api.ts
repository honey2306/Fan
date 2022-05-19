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

export const getDailyPic = () => request('home/dailyPic', 'get')
