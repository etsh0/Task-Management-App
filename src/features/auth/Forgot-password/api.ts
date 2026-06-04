import config from "../../../config/env"
import type { ForgotPasswordPayload } from "./type"

export const recoverPassword = async (payload:ForgotPasswordPayload) => {
    const res = await fetch(config.apiUrl + '/auth/v1/recover', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            apiKey: config.anonKey,
        },
        body: JSON.stringify(payload)
    })

    const data = await res.json()
    return data
}