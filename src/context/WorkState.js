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

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");

    const titleWidth =
      (doc.getStringUnitWidth(title) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.width - titleWidth) / 2;

    doc.text(title, titleX, 10);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const summaryX = 10;
    let summaryY = 20;

    const lines = doc.splitTextToSize(
      summary,
      doc.internal.pageSize.width - 20
    ); // Adjust as needed

    const addText = (textLines, yPos) => {
      for (let i = 0; i < textLines.length; i++) {
        doc.text(textLines[i], summaryX, yPos);
        yPos += 12;

        if (yPos > doc.internal.pageSize.height - 10) {
          doc.addPage();
          yPos = 10;
        }
      }
      return yPos;
    };

    // eslint-disable-next-line
    summaryY = addText(lines, summaryY);
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
  const changeSummary = () => {
    setTitle("Haunted Parlor");
    setSummary(
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis beatae dolorem et illum asperiores fugit inventore facilis, aut excepturi tenetur officia nihil necessitatibus deleniti eligendi minus ipsam quibusdam cum! Dignissimos!`
    );
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
        }}
      >
        {props.children}
      </WorkContext.Provider>
    </>
  );
};

export default WorkState;
