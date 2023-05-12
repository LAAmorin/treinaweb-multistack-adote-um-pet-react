import axios from "axios"; // Instalar o AXIOS (terminal): 'npm i axios@0.26.0'

// configurações base para definição do BackEnd (usando AXIOS)
export const ApiService = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});