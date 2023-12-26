
export function env(variable) {
    console.log(import.meta.env[variable])
    return import.meta.env[variable]
}
