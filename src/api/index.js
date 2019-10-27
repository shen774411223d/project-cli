import http from './config.js'

export const receiveUser = () => {
	return http.get('/api/test')
}