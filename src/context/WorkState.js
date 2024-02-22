import WorkContext from "./WorkContext";
import React, { useState } from "react";

const WorkState = (props) => {
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");
    const [video, showVideo] = useState(false)
    const [page, setPage] = useState({
        link: "",
        content: ""})

    const showPage = (item) => {
        showVideo(true);
        setSummary(item['content'])
    }

    const clearPage = () => {
        setLink("");
        showVideo(false);
        setSummary("");
    }
     
    let savedWork = [
        {
            date: "22-02-2024",
            title: "Gemini Advanced is far more capable at reasoning, following instructions, coding, and creative inspiration. We can't wait to see what you create.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius est nihil",
            link: "https://youtu.be/hhWXPzTRIP8?feature=shared"
        },
        {
            date: "21-02-2024",
            title: "Marie Delphine Macarty or MacCarthy (March 19, 1787 – December 7, 1849), more commonly known as Madame Blanque or, after her third marriage, as Madame LaLaurie, was a New Orleans socialite and serial killer who was believed to have tortured and murdered slaves in her household.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius est nihil",
            link: "https://youtu.be/hhWXPzTRIP8?feature=shared"
        },
        {
            date: "20-02-2024",
            title: "Ricardo Leyva Muñoz Ramirez (/rəˈmɪərɛz/; February 29, 1960 – June 7, 2013), dubbed the Night Stalker, the Walk-In Killer and the Valley Intruder, was an American serial killer and sex offender whose crime spree took place in California from June 1984 until his capture in August 1985. He was convicted and sentenced to death in 1989, and died while awaiting execution in 2013.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius est nihil",
            link: "https://youtu.be/hhWXPzTRIP8?feature=shared"
        },
        {
            date: "19-02-2024",
            title: "Anna Elisabeth Michel (21 September 1952 – 1 July 1976) was a German woman who underwent 67 Catholic exorcism rites during the year before her death. She died of malnutrition, for which her parents and priest were convicted of negligent homicide. She was diagnosed with epileptic psychosis (temporal lobe epilepsy) and had a history of psychiatric treatment that proved ineffective.[1]",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius est nihil",
            link: "https://youtu.be/hhWXPzTRIP8?feature=shared"
        }
    ]
    const [work, setWork] = useState(savedWork);
    const saveWork = () => {
        let newentry = {
            date: "23-02-2024",
            title: "This is a new title",
            content: summary,
            link: link
        }
        let newWork = [...work, newentry];
        setWork(newWork);
    }
    const getSummary = (ytLink) => {
        setLink(ytLink);
    }
    const changeSummary = () => {
        setSummary("Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, laudantium! Architecto dignissimos magnam neque voluptas rerum corporis, odio explicabo quisquam nihil! Ullam, asperiores");
    }
    const setVideo = () => {
        if(link !== "")
        showVideo(true)
    }
  return (
    <>
    <WorkContext.Provider value={{showPage, work, video, summary, getSummary, changeSummary, setVideo, saveWork, clearPage}}>
        {props.children}
    </WorkContext.Provider>
    </>
  )
}

export default WorkState