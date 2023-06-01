import { collection, getDocs, query } from "firebase/firestore";

import { dbRef } from "./config";

export default async function getData(collectionName: string){
    let result;
    let error;
    try {
        const collectionRef = collection(dbRef,collectionName);
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);
        result = [];
        querySnapshot.forEach(doc=>{
            const data = doc.data();
            result.push({id: doc.id, ...data});
        })    
    } catch (err) {
        error = err;
    }
    return {result, error}
}