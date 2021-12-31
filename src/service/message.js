import axios from "axios"
import config from "./service.config"

const getMessages = async groupId => {
    const response = await axios.get(config.mes_url, { groupId: groupId })
    return response.data
}

export default { getMessages }