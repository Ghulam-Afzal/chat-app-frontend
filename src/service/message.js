import axios from "axios"
import config from "./service.config"

const getMessages = async groupId => {
    const response = await axios.post(config.mes_url, { groupId: groupId })
    return response.data
}

export default { getMessages }