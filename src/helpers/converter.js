
export async function convertImperialToMetric(stones, pounds) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000))

    return Math.round((stones * 14 + pounds) / 2.2)
}

export async function convertMetricToImperial(kilos) {
    const stones = Math.floor((kilos * 2.2) / 14)
    const pounds = Math.round(((kilos * 2.2) / 14 - stones) * 14)

    await new Promise(resolve => setTimeout(() => resolve(), 1000))

    return {
        stones,
        pounds
    }
}