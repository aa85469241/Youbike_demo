
export function getAreaList(areas: string[]) {
    const areaList: string[] = [];

    for (const area of areas) {
        if (areaList.includes(area)) {
            continue;
        }
        areaList.push(area);
    }

    return areaList;
}
