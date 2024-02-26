import WorkContext from "./WorkContext";
import React, { useState } from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

const WorkState = (props) => {
    const workCollectionRef = collection(db, "work");
    const [work, setWork] = useState([]);
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");

    const saveAsPDF = () => {
    // Create a new jsPDF instance
    console.log("This is to save the PDF")
    }

    const getWork = async() =>
    {
        const data = await getDocs(workCollectionRef);
        const arr = data.docs.map((doc) => (
            doc.data()['UID'] === auth?.currentUser?.uid ? { ...doc.data(), id: doc.id } : null
        ));
        setWork(arr.filter(item => item !== null));
    }

    const showPage = (item) => {
        setSummary(item['content'])
    }

    const clearPage = async() => {
        setLink("");
        setSummary(""); 
    }
    const saveWork = async() => {
        const today = new Date();
        const formattedDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
        let newentry = {
            date: "23-02-2024",
            title: "This is a new title",
            content: summary,
            link: link
        }
        let newWork = [...work, newentry];
        setWork(newWork);
        await addDoc(workCollectionRef,
            {...newentry, UID:auth?.currentUser?.uid})
    }
    const getSummary = (ytLink) => {
        setLink(ytLink);
    }
    const changeSummary = () => {
        setTitle("Days in Sodom");
        setSummary("Salò, or the 120 Days of Sodom (Italian: Salò o le 120 giornate di Sodoma), billed on-screen as Pasolini's 120 Days of Sodom on English-language prints[3] and commonly referred to as simply Salò (Italian: [saˈlɔ]), is a 1975 art horror film[a] directed and co-written by Pier Paolo Pasolini. The film is a loose adaptation of the 1785 novel (first published in 1904) The 120 Days of Sodom by Marquis de Sade, updating the story's setting to the World War II era. It was Pasolini's final film, released three weeks after his murder.");
    }
  return (
    <>
    <WorkContext.Provider value={{saveAsPDF, title, link, showPage, work, summary, getSummary, changeSummary, saveWork, clearPage, getWork}}>
        {props.children}
    </WorkContext.Provider>
    </>
  )
}

export default WorkState