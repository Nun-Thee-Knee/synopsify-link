from youtube_transcript_api import YouTubeTranscriptApi
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
genai.configure(api_key=os.getenv('apiKey'))
class Data:
    def __init__(self, link):
        self.title = None
        self.link = link
        self.text = None
        self.transcript = None
        self.video_id = None
        self.message = []
        self.data = None

    def video_link_check(self):
        try:
            self.video_id = self.link.split("/")[3].split("?")[0].strip()
            self.transcript_fetcher()
        except Exception as e:
            error = "message"
            self.message.append({error: "You have provided a wrong YouTube link"})

    def transcript_fetcher(self):
        try:
            self.transcript = YouTubeTranscriptApi.get_transcript(self.video_id)
            self.text = " ".join([entry['text'] for entry in self.transcript])
            self.summarization()
        except Exception as e:
            error = "message"
            if error == "TranscriptsDisabled":
                self.message.append({error: "Subtitles for this link are disabled"})
            elif error == "NoTranscriptFound":
                self.message.append({error: "Language is not supported for this video"})
            else:
                print(e)
                self.message.append({error: "Error faced while fetching the transcript"})


    def generate_gemini_content(self, transcript_text, prompt):
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(prompt + transcript_text)
        return response.text

    def summarize_youtube_transcript(self):
        transcript_text = self.text

        if transcript_text:
            prompt = "Can you provide detailed notes for the purpose of learning based on the transcripts?"
            self.summary = self.generate_gemini_content(transcript_text, prompt)
            prompt = "Can you give a title for the summary "
            self.title = self.generate_gemini_content(self.summary, prompt)

    def summarization(self):
        self.summarize_youtube_transcript()
        if not self.message:
            self.data = {
                "transcript": self.text,
                "summarized_text": self.summary,
                "title": self.title
            }
            return self.data
        else:
            self.message.append({"message": "TranscriptUnavailable Summarization is impossible for unavailable transcripts"})
            return self.message
