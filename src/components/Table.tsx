
interface TableProps {
    search: string;
    currentCity: string;
    data: YouBike[];
}

export const Table = ({ search, currentCity, data }: TableProps) => {
    return (
        <div
            id="table-container"
            className="rounded-[28px] max-h-64 overflow-y-scroll mt-8 md:mt-4 scrollbar-none"
        >
            <table className="w-full sticky border-collapse">
                <thead className="bg-success sticky top-0">
                    <tr>
                        <th className="table-head-text table-content">縣市</th>
                        <th className="table-head-text table-content">區域</th>
                        <th className="table-head-text table-content">站點名稱</th>
                        <th className="table-head-text table-content">可借車輛</th>
                        <th className="table-head-text table-content">可還空位</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCity === "台北市"
                        ? data.filter((_data) => {
                            return search.toLowerCase() === ""
                                ? _data
                                : _data.ar.includes(search)
                        }).map((_data) => (
                            <tr key={_data.sno} className="even:bg-secondary">
                                <td className="table-content table-body-text">{currentCity}</td>
                                <td className="table-content table-body-text">{_data.sarea}</td>
                                <td className="table-content table-body-text">{_data.ar}</td>
                                <td className="table-content table-body-text font-bold text-success">{_data.sbi}</td>
                                <td className="table-content table-body-text font-bold text-success">{_data.bemp}</td>
                            </tr>
                        ))
                        : <tr className="even:bg-secondary">
                            <td className="table-content table-body-text">無</td>
                            <td className="table-content table-body-text">無</td>
                            <td className="table-content table-body-text">無</td>
                            <td className="table-content table-body-text">無</td>
                            <td className="table-content table-body-text">無</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}