import WorkContext from "./WorkContext";
import React, { useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import jsPDF from "jspdf";
import "jspdf-autotable";

const WorkState = (props) => {
  const workCollectionRef = collection(db, "work");
  const [work, setWork] = useState([]);
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteWork = async (key) => {
    const workDoc = doc(db, "work", key);
    await deleteDoc(workDoc);
    const data = await getDocs(workCollectionRef);
    const arr = data.docs.map((doc) =>
      doc.data()["UID"] === auth?.currentUser?.uid
        ? { ...doc.data(), key: doc.id }
        : null
    );
    setWork(arr.filter((item) => item !== null));
  };

  const saveAsPDF = () => {
     const doc = new jsPDF();
     doc.setFontSize(18);
     doc.setFont('helvetica', 'bold');

     let titleX = 10;
     let titleY = 20;

     const titleWords = title.split(' ');

     titleWords.forEach(word => {
         const wordWidth = doc.getStringUnitWidth(word) * doc.internal.getFontSize() / doc.internal.scaleFactor;
 
         if (titleX + wordWidth > doc.internal.pageSize.width - 20) {

             titleX = 10;
             titleY += 18;
 
             if (titleY > doc.internal.pageSize.height - 10) {

                 doc.addPage();
                 doc.setFont('helvetica', 'bold');
                 doc.setFontSize(18);
                 titleY = 20;
             }
         }
 
         doc.text(word, titleX, titleY);
         titleX += wordWidth + 5;
     });
 
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(12);
 
     let summaryX = 10;
     let summaryY = titleY + 18; 
 
     const lines = doc.splitTextToSize(summary, doc.internal.pageSize.width - 20);
     for (let i = 0; i < lines.length; i++) {
         doc.text(lines[i], summaryX, summaryY);
         summaryY += 12; 
 
         if (summaryY > doc.internal.pageSize.height - 10) {
             doc.addPage();
             doc.setFont('helvetica', 'normal');
             doc.setFontSize(12);
             summaryY = 10;
         }
     }
 
     doc.save(`${title}.pdf`);
  };

  const getWork = async () => {
    const data = await getDocs(workCollectionRef);
    const arr = data.docs.map((doc) =>
      doc.data()["UID"] === auth?.currentUser?.uid
        ? { ...doc.data(), key: doc.id }
        : null
    );
    setWork(arr.filter((item) => item !== null));
  };

  const showPage = (item) => {
    setTitle(item["title"]);
    setLink(item["link"]);
    setSummary(item["content"]);
  };

  const clearPage = async () => {
    setLink("");
    setSummary("");
    setTitle("");
  };
  const saveWork = async () => {
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}-${(
      today.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${today.getFullYear()}`;
    let newentry = {
      date: formattedDate,
      title: title,
      content: summary,
      link: link,
    };
    let newWork = [...work, newentry];
    setWork(newWork);
    await addDoc(workCollectionRef, {
      ...newentry,
      UID: auth?.currentUser?.uid,
    });
  };
  const getSummary = (ytLink) => {
    setLink(ytLink);
  };
  const changeSummary = async() => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({link: link})
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setLoading(false);
      if (data['error'])
      {
        setError(data['error'][0]['message'])
        setInterval(()=>{
          setError("")
        }, 3000)
      }
      else 
      {
        setSummary(data['summarized_text']);
        setTitle(data['title']);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <WorkContext.Provider
        value={{
          deleteWork,
          saveAsPDF,
          title,
          link,
          showPage,
          work,
          summary,
          getSummary,
          changeSummary,
          saveWork,
          clearPage,
          getWork,
          error,
          loading
        }}
      >
        {props.children}
      </WorkContext.Provider>
    </>
  );
};

export default WorkState;
