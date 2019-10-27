import axios from 'axios'
import { getLS } from '@/pulgins/storage'
const http = axios.create({
	headers: {
		'X-CSRF-TOKEN': getLS('default storage') || 'default storage'
	}
	
})

export default http