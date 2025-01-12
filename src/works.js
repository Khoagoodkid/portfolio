import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";
export const slides = [
    
    {
        title: 'Weather Wizard',
        path: 'weather_wizard',
        subtitle: 'Founder: Khoa Ha',
        frameworks: ["NextJS", "Typescript", "Tailwind Css", "Scss"],
        description: `A real-time weather application provides precise and detailed information, including ho
        urly and daily forecasts for your current location, as well as the ability to search for and monitor the weather in any city of your choice.`,
        images: [

            {
                id: 1,
                callout: "Welcome",
                title: "Introduction",
                description:
                    "Users can effortlessly view weather conditions in their local area.",
                contentPosition: "r",
                url: '/workImg/weather-wizard/weather-wizard1.png',
                Icon: FiEye,
            },
            {
                id: 2,
                callout: "Getting Data",
                title: "Loading phase",
                description:
                    "Experience a captivating loading phase as the system aggregates a vast array of data specific to your location.",
                contentPosition: "l",
                url: '/workImg/weather-wizard/weather-wizard2.png',
                Icon: FiSearch,
            },
            {
                id: 3,
                callout: "Tracking",
                title: "Current and forecasting",
                description:
                    "Gain insights into the current weather conditions, including comprehensive 7-day and hourly forecasts. Additionally, explore weather updates for any city of interest",
                contentPosition: "r",
                url: '/workImg/weather-wizard/weather-wizard3.png',
                Icon: FiSearch,
            },
            {
                id: 2,
                callout: "Interacting",
                title: "Screen modes",
                description:
                    "Easily toggle between dark and light mode for optimal visual comfort.",
                contentPosition: "l",
                url: '/workImg/weather-wizard/weather-wizard4.png',
                Icon: FiSearch,
            },
            

        ],
        github: 'https://github.com/Khoagoodkid/weather-wizard',
        demo: 'https://weather-wizard-peach.vercel.app/',
        bg: '/workImg/weather-wizard/weather-wizard1.png'
    },
    {
        title: 'PDFinder',
        path: 'pdfinder',
        subtitle: 'Founder: Khoa Ha',
        frameworks: ["ReactJs", "Tailwindcss", "FastAPI", "Langchain", "AWS", "RESTful API", "ChromaDB"],
        description: 'An advanced bot that is capable of efficiently retrieving and processing data from PDF files',
        images: [
            {
                id: 1,
                callout: "Dashboard",
                title: "Explore and develop",
                description:
                    "PDFinder provides users with a user-friendly and intuitive dashboard, allowing them to quickly upload PDF files and start chatting with the bot instantly.",
                contentPosition: "r",
                url: '/workImg/pdfinder/pdfinder1.png',
                Icon: FiEye,
            },
            {
                id: 2,
                callout: "Dropbox",
                title: "Upload File",
                description:
                    "With Dropbox integration, users can effortlessly import or drag-and-drop files, making them ready for processing right away.",
                contentPosition: "l",
                url: '/workImg/pdfinder/pdfinder2.png',
                Icon: FiEye,
            },
            {
                id: 3,
                callout: "Explore",
                title: "Process File",
                description:
                    "The system leverages RAG (Retrieval-Augmented Generation) to efficiently read and analyze the content of PDF documents.",
                contentPosition: "r",
                url: '/workImg/pdfinder/pdfinder3.png',
                Icon: FiEye,
            },
            {
                id: 4,
                callout: "Specification",
                title: "Ask anything!",
                description:
                    "You can ask any question about the contents of your PDF file and receive accurate, instant responses.",
                contentPosition: "l",
                url: '/workImg/pdfinder/pdfinder4.png',
                Icon: FiEye,
            },
           
           
            

        ],
        github: 'https://github.com/Khoagoodkid/pdf-chat-bot-v2',
        demo: 'https://pdfinder.vercel.app/',
        bg: '/workImg/pdfinder/pdfinder1.png'
    },
    {
        title: 'Chat Web',
        path: 'chat_web',
        subtitle: 'Founder: Khoa Ha',
        frameworks: ["React", "Firebase", "NodeJS", "Javascript", "MUI"],
        description: "This service is dedicated to connecting people globally while ensuring robust message security. It offers an array of features designed to enhance communication and user experience. Users can create conversations, personalize their chat space with changeable backgrounds, see who's online, and engage in video calls, among other interactive functionalities. This platform seamlessly blends secure connectivity with a rich suite of communication tools, fostering a dynamic and safe environment for global interaction.",
        images: [

            {
                id: 1,
                callout: "Login",
                title: "It's simple",
                description:
                    "Users are granted the empowering ability to forge their digital identity by creating a personal account and logging in, thereby unlocking a portal to connect with the vast expanse of the global community.",
                contentPosition: "r",
                url: '/workImg/chatweb/chatweb1.jpg',
                Icon: FiEye,
            },
            {
                id: 2,
                callout: "Conversation",
                title: "They're all here",
                description:
                    "Users have the creative freedom to spark engaging conversations, establish dynamic groups, and initiate pop-up events, fostering a vibrant tapestry of interaction and exchange.",
                contentPosition: "l",
                url: '/workImg/chatweb/chatweb2.jpg',
                Icon: FiSearch,
            },
            {
                id: 3,
                callout: "Interacting",
                title: "Let's party",
                description:
                    "Users can immerse themselves in the rich and customizable features of our website, reveling in the flexibility to personalize their experience through options like modifying the background aesthetics, pinning pivotal messages for prominence, and renaming groups to reflect their evolving dynamics. ",
                contentPosition: "r",
                url: '/workImg/chatweb/chatweb3.jpg',
                Icon: FiPlay,
            },
            {
                id: 4,
                callout: "Tracking",
                title: "Real-time online status",
                description:
                    "Users are endowed with the insightful capability to track who is online, providing a real-time panorama of their community’s activity, and enabling them to connect with peers who are presently engaged in the digital space.",
                contentPosition: "l",
                url: '/workImg/chatweb/chatweb4.jpg',
                Icon: FiDollarSign,
            },
            {
                id: 5,
                callout: "Connecting",
                title: "Connect with friends",
                description:
                    "Users are equipped with the collaborative tool to create exclusive circles of friends, extending invitations to like-minded individuals to join, thereby nurturing a network of connections and building a community that resonates with their interests and values.",
                contentPosition: "r",
                url: '/workImg/chatweb/chatweb5.jpg',
                Icon: FiDollarSign,
            },

        ],
        bg: 'https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        demo: 'https://chattersphere-wu4p.onrender.com/',
        github: 'https://github.com/Khoagoodkid/ChatterSphere'
    },
    {
        title: 'Quiz Crafters',
        path: 'quiz_crafters',
        subtitle: 'Founder: Khoa Ha',
        frameworks: ["React", "MongoDB", "NodeJS", "Javascript", "Web Socket", "Express", "Algorithms"],
        description: 'An online, real-time quiz competition that allows participants to showcase their extensive knowledge across a wide range of topics.',
        images: [

            {
                id: 1,
                callout: "Introduction",
                title: "Welcome",
                description:
                    "The home page offers users the option to either create and host rooms or join existing rooms using an ID.",
                contentPosition: "r",
                url: '/workImg/quizcrafters/quizcrafters1.png',
                Icon: FiEye,
            },
            {
                id: 2,
                callout: "Lobby",
                title: "View players",
                description:
                    "Room hosts can view the number of participants and see who has joined the room.",
                contentPosition: "l",
                url: '/workImg/quizcrafters/quizcrafters2.png',
                Icon: FiSearch,
            },
            {
                id: 3,
                callout: "Quiz",
                title: "Create and view collection",
                description:
                    "Hosts can create a collection of questions, manage them, and launch the quiz when ready.",
                contentPosition: "r",
                url: '/workImg/quizcrafters/quizcrafters3.png',
                Icon: FiPlay,
            },
            {
                id: 4,
                callout: "Interacting",
                title: "Let's talk to others",
                description:
                    "Players can join the lobby, interact, and chat with each other before the game begins.",
                contentPosition: "l",
                url: '/workImg/quizcrafters/quizcrafters4.png',
                Icon: FiDollarSign,
            },
            {
                id: 5,
                callout: "Question Dashboard",
                title: "Hit the answer!",
                description:
                    "During the quiz, players are presented with four answer choices and earn points by selecting the correct ones to compete with others.",
                contentPosition: "r",
                url: '/workImg/quizcrafters/quizcrafters5.png',
                Icon: FiDollarSign,
            },
            {
                id: 6,
                callout: "Scoreboard",
                title: "Dynamically view scores",
                description:
                    "After each question, players can view their scores and compare them with those of their competitors.",
                contentPosition: "l",
                url: '/workImg/quizcrafters/quizcrafters6.png',
                Icon: FiDollarSign,
            },
            {
                id: 7,
                callout: "Finish",
                title: "Congrats to the Winner!",
                description:
                    "At the end of the game, the player with the highest overall score is crowned the winner!",
                contentPosition: "l",
                url: '/workImg/quizcrafters/quizcrafters7.png',
                Icon: FiDollarSign,
            },

        ],
        bg: '/workImg/quizcrafters/quizcrafters1.png',
        demo: 'https://quiz-crafters.onrender.com/',
        github: 'https://github.com/Khoagoodkid/quiz-crafters'
    },
]
// export const slides = [
//     {
//         title: "Machu Picchu",
//         subtitle: "Peru",
//         description: "Adventure is never far away",
//         image:
//             "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Chamonix",
//         subtitle: "France",
//         description: "Let your dreams come true",
//         image:
//             "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Mimisa Rocks",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Four",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Five",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     }
// ];