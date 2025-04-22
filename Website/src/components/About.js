import React from "react";

const About = () => {
  return (
    <>
      <div className="h-auto bg-zinc-800 p-10">
        <div className="flex left-0 right-0 flex-wrap justify-center">
          <div className="flex justify-center items-center text-white h-auto w-[500px]">
            <img
              src="https://digitalmarketingtrends.in/wp-content/uploads/2018/03/YouTube-Tips-GIFs.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white h-auto sm:w-[300px] mr-20 ml-20">
            <center>
              <p className="text-lg mt-10 w-auto">
                Unlock the power of effortless summarization with Synopsify. Our
                innovative platform allows you to transform video content into
                concise, text-based summaries effortlessly. Simply provide the
                video link, and watch as our advanced algorithms meticulously
                analyze and distill the key information.
              </p>
            </center>
          </div>
        </div>
      </div>

      <div className="h-auto bg-zinc-800 p-20">
        <div className="flex left-0 right-0 flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center items-center text-white h-auto sm:w-[300px] mr-10 ml-10">
            <center>
              <h1 className="font-bold text-2xl mt-10">Key Features</h1>
              <ul className="list-disc mt-3 font-bold">
                <li>
                  Video to Text Conversion: Convert lengthy videos into
                  easy-to-read text summaries.
                </li>
                <li>
                  Downloadable PDFs: Save time and resources by downloading your
                  summarized content in PDF format.
                </li>
                <li>
                  Customizable Summaries: Tailor your summaries to meet your
                  specific needs with our user-friendly customization options.
                </li>
                <li>
                  Save Your Work: Securely store and access your summaries
                  whenever you need them.
                </li>
              </ul>
            </center>
          </div>
          <div className="flex justify-center items-center text-white h-auto w-[500px]">
            <img
              src="https://i.pinimg.com/originals/3d/ba/b8/3dbab8416d907cf31926def8fc364ed1.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
