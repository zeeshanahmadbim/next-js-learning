import { doc, getDoc } from "firebase/firestore";
import { dbRef } from "./config";

export default async function getDocument(collectionName: string, id: string ){
    let result;
    let error;
    try {
        const docRef = doc(dbRef, collectionName, id);
        result =  await getDoc(docRef)
        
    } catch (err) {
        error = err;
    }

    return {result, error}
}