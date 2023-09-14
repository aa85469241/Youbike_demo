'use server'

export async function getData() {
    const res = await fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}