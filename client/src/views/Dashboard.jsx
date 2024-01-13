import React, {useState} from "react";  
import Display from "../components/Display";

const Dashboard = (props) => {
    const [pirateList, setPirateList] = useState([]);
    return(
        <>
            

            <Display pirateList={pirateList} setPirateList={setPirateList}/>

        </>
            
    )
}
export default Dashboard;