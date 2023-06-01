import {addDoc, collection, doc, setDoc} from 'firebase/firestore';
import { dbRef } from "./config";

type TAddData = { collectionName: string; data: any }

export default async function addData({ collectionName, data }: TAddData){
    let result;
    let error;
    try {
        const collectionRef = collection(dbRef, collectionName);
        // addDoc(dbRef,data)
        result = await addDoc(collectionRef, data)
    } catch (err) {
        error = err
    }
    return {result, error}
}