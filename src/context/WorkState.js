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
     // Create a new jsPDF instance
     const doc = new jsPDF();

     // Set font styles for title
     doc.setFontSize(18); // Adjust font size as needed
     doc.setFont('helvetica', 'bold'); // Making title bold
 
     // Calculate the starting position for the title
     let titleX = 10;
     let titleY = 20;
 
     // Split the title into words
     const titleWords = title.split(' ');
 
     // Add title to the PDF, handling multiple lines and pages
     titleWords.forEach(word => {
         const wordWidth = doc.getStringUnitWidth(word) * doc.internal.getFontSize() / doc.internal.scaleFactor;
 
         // Check if the word fits on the current line
         if (titleX + wordWidth > doc.internal.pageSize.width - 20) {
             // Move to the next line
             titleX = 10;
             titleY += 18; // Adjust line height as needed
 
             // Check if there's enough space on the current page
             if (titleY > doc.internal.pageSize.height - 10) {
                 // Move to a new page
                 doc.addPage();
                 // Reset font styles for title on the new page
                 doc.setFont('helvetica', 'bold');
                 doc.setFontSize(18);
                 titleY = 20;
             }
         }
 
         // Add the word to the PDF
         doc.text(word, titleX, titleY);
         titleX += wordWidth + 5; // Add a space between words
     });
 
     // Reset font styles for summary
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(12);
 
     // Calculate the starting position for the summary
     let summaryX = 10;
     let summaryY = titleY + 18; // Adjust Y position based on title height
 
     // Wrap and add the summary text, handling multiple pages
     const lines = doc.splitTextToSize(summary, doc.internal.pageSize.width - 20); // Adjust as needed
     for (let i = 0; i < lines.length; i++) {
         doc.text(lines[i], summaryX, summaryY);
         summaryY += 12; // Adjust line height as needed
 
         if (summaryY > doc.internal.pageSize.height - 10) {
             // Move to a new page if not enough space for the summary
             doc.addPage();
             // Reset font styles for summary on the new page
             doc.setFont('helvetica', 'normal');
             doc.setFontSize(12);
             summaryY = 10;
         }
     }
 
     // Save the PDF
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
      // Assuming your localhost server is running on http://localhost:5000
      const response = await fetch('https://video-summary-cs2k.onrender.com', {
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
      // Handle errors as needed
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
