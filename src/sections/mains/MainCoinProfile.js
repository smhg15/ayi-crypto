import CommonCard from "../../commons/CommonCard";


function MainCoinProfile({data}){
const coin = data.coins[0]

        return (<CommonCard coin={coin}/>);
}

export default MainCoinProfile;
