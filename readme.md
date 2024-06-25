This is going to serve as the implementation flow document for this project. It will also contain few important resources that are necessary.

Idea: To create a web app that summarizes news to 30 secs or less and delivers it to user in the form of audio.
Features:
    1. Infinity news.
    2. Categorical sorting.
    3. Same news in multiple languages. 
    4. Usability as website as well as application. 

Implementation steps:

Backend:
    Version I:
        1. Scrape news from google news or some copy right free website. 
        2. Push them to an NEWS STREAM. This should keep updating every one minute.
        3. Covert news to summaries. 
        4. Convert this summary to audio. 
        5. Push them to AUDIO STREAM. This should keep updating every one minute. 
        6. Create MULTIPLE AUDIO STREAMS for different languages. 
        7. Serve news to front end. 
    Version II:
        1. Categorise audio. 
        2. Push them to different CATEGORY BASED STREAMS.

Frontend:
    Version I:
        1. It will be a simple web application. 
        2. Single play button that play, next, previous and favourite button. 
        3. Ability to change colour of the application and set few themes. 
    Version II:
        1. Change language using drop down list.
        2. Select Categories as tabs. 
        3. Menu Bar to access the favourites and replay them.

Database:
    Version I:
        1. Initially use completely relational data base that is compatible with Python and Flask.

Tech Stack:
    1.Wynk Teck Implementation - https://www.quora.com/Whats-the-technology-behind-a-music-streaming-app-like-Gaana-Saavn-Apple-music