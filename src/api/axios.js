import axios from "axios";
import { NEURONAL_NETWORK } from "../config/neuronalNetwork";

const client = axios.create({
    baseURL: `http://${NEURONAL_NETWORK}`
})

export default client;