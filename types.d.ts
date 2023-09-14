type YouBike = {
    sno: string,
    sna: string,
    tot: number,
    sbi: number,
    sarea: string,
    mday: string,
    lat: number,
    lng: number,
    ar: string,
    sareaen: string,
    snaen: string,
    aren: string,
    bemp: number,
    act: string,
    srcUpdateTime: string,
    updateTime: string,
    infoTime: string,
    infoDate: string,
}

type TaiwanCity = {
    id: number,
    name: string,
    areas: string[],
    data?: YouBike[],
}

type Gifts = {
    tag: string;
    name: string;
    amount: number;
}