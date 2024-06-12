import axios from 'axios'

const BASE_DEV_URL = 'https://fake-url.com'

const apiInstance = axios.create({
  baseURL: BASE_DEV_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const MAX_RETRIES = 2
const RETRY_DELAY = 2000

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

apiInstance.interceptors.response.use(null, async (error) => {
  const { config } = error

  if (!config || !config.retryCount) {
    config.retryCount = 0
  }

  if (config.retryCount >= MAX_RETRIES) {
    return Promise.reject(error)
  }

  config.retryCount += 1

  await delay(RETRY_DELAY)

  return apiInstance(config)
})

export const post = async <T = any>(
  endpoint: string,
  data: any,
): Promise<T> => {
  const response = await apiInstance.post<T>(endpoint, data)

  return response.data
}
