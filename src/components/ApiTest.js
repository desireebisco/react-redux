import React, { useEffect, useCallback, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchAll, fetchById } from "../services/apiServices";



export const ApiTest = () => {
const [userDetails, setUserDetails] = useState([]);



// const getAll = useCallback(async () => {
//     try {
//         const response = (await fetchAll()).data;
//         // console.log('getAll:', response);
//         setAllData(response);
//         return response;
        
//     } catch (e) {
//         console.log('error:', e)
//     }
// },[])

// const getAllById = useCallback(async (allData) => {
//     console.log('test:', allData)

//     const response = (
//         await Promise.allSettled( allData.map(async (data) => {
//             const params = {
//                 id: allData.id,
//             }; 
//             try{
//                 const res = await fetchAll(params);
//                 console.log('id:', res)
//             } catch (e) {
//                 console.log('error:', e)
//             }
//         }))
//     )
//     return response;   

// },[])


const getAll = useCallback(async () => {
    
    try {
        // let contract = [];
        const response = ((await fetchAll()).data).map(async (item) => {
            let id = item.id;
           
            try {
            const details = (await fetchById({id})).data;
            // console.log('details:', details);
            setUserDetails(userDetails => [...userDetails, {name: details.name, id: details.id}])
            
            } catch (e) {
                console.log('error:', e)
            }
        });
        return response;
        
    } catch (e) {
        console.log('error:', e)
    }
},[])

useEffect(() => {
    getAll();
}, [getAll]);
console.log('userDetails:', userDetails);
    return (
        <div>
        {userDetails.map((item) => 
            <p>{item.name}</p>
        )}
        </div>
    )
    
}