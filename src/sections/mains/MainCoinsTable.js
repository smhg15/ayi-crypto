import CommonTable from "../../commons/CommonTable";


function MainCoinsTable({data}){

    const columnHeadTable = Object.keys(data.coins[0])

    const rowsTable = data.coins
        return (<CommonTable headCoins={columnHeadTable} rowsCoins={rowsTable}/>);
}

export default MainCoinsTable;