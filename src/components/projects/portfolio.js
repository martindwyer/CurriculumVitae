import primalPic from "../../assets/images/portfolio/primal-strength.jpeg"
import penguinPic from "../../assets/images/portfolio/penguin-tours.jpeg"
import wildThingsPic from "../../assets/images/portfolio/wild-things.jpeg"
import mirefaPicture from "../../assets/images/portfolio/mirefa.jpeg"
import vidlyImage from "../../assets/images/portfolio/vidly-video.jpeg"
import feedbackFocusImage from "../../assets/images/portfolio/feedback-focus.jpeg"
import careersImage from "../../assets/images/portfolio/careers.jpeg"
import expensifyImage from "../../assets/images/portfolio/expensify.jpeg"
import chatImage from "../../assets/images/portfolio/chat-app.jpeg"
import birdPicture from "../../assets/images/portfolio/thebird.jpeg"

const portfolio = {
  websites: [
    {
      title: "Penguin Tours",
      description:
        "The MD Web Technologies website template is demonstrated by Penguin Tours, a fictitious Antarctic service company.  Special features include full screen players for the company video and a full-screen gallery for images shared. Visitors can send our customers messages through the fully automated form on the Contact page.",
      techDetails: {
        backEnd: "Node Express on Linux Server",
        frontEnd: "HTML, Sass, JavaScript, Bootstrap, React, Next.js",
        specialFeatures:
          "Lightbox gallery and video display, fully responsive.",
        deployment: "Vercel Platform-as-a-Service (Paas)",
        performance:
          "Rated by <a href='https://gtmetrix.com/reports/penguin-tours.vercel.app/Y6fZyti7/' target='_blank'> GTMetrix</a> at 100%.",
        analytics: "Full tracking with Google Analytics",
        metaData:
          "Optimized for SEO and Social Media with customized meta data.",
        gitUrl: "https://github.com/martindwyer/PenguinTours",
      },
      varName: "penguinTours",
      image: penguinPic,
      siteUrl: "https://penguin-tours.vercel.app",
      featured: true,
    },
    {
      title: "Primal Strength",
      description:
        "Primal Strength, a website about personal transformation, began as a WordPress blog in 2015.  The blog now has over 4,000 registered followers with a growing presence in social media. The decision was made to fully separate the website front end from its WordPress back end to improve user experience.",
      techDetails: {
        backEnd: "Linux server, PHP, MySQL, WordPress, GraphQl",
        frontEnd: "HTML, Sass, JavaScript, Bootstrap, React, Next.js",
        specialFeatures:
          "WordPress Blog with fully responsive React front end.",
        deployment: "Vercel Platform-as-a-Service (Paas)",
        performance:
          "Rated by <a href='https://gtmetrix.com/reports/primal-strength.vercel.app/Ftc47dar/' target='_blank'> GTMetrix</a> at 100%.",
        analytics: "Full tracking with Google Analytics",
        metaData:
          "Optimized for SEO and Social Media with customized meta data.",
        gitUrl: "https://github.com/martindwyer/PrimalStrength",
      },
      varName: "primalStrength",
      image: primalPic,
      siteUrl: "https://primal-strength.vercel.app",
      featured: true,
    },
    {
      title: "Wild Things Nature Photography",
      description:
        "Martin and his wife Rose share a passion for nature and wildlife. Over the years, the digital images from their nature adventures provided great content for website development. This website shares stories and pictures from their wildlife adventures targeted at capturing digital images of wild things in nature.",
      techDetails: {
        backEnd: "Linux server, PHP, MySQL, WordPress REST API",
        frontEnd: "HTML, Sass, JavaScript, Bootstrap, React",
        specialFeatures:
          "WordPress Blog with fully responsive React front end.  Full screen Lightbox photo gallery.",
        deployment: "DigitalOcean virtual private server",
        performance:
          "Rated by <a href='https://gtmetrix.com/reports/wildthings.mdbytes.us/JmhvixgI/' target='_blank'> GTMetrix</a> at 100%.",
        analytics: "Full tracking with Google Analytics",
        metaData:
          "Optimized for SEO and Social Media with customized meta data.",
        gitUrl: "https://github.com/martindwyer/GoWildThings",
      },
      varName: "wildThings",
      image: wildThingsPic,
      siteUrl: "https://wildthings.mdbytes.us",
      featured: true,
    },
    {
      title: "Ministerio De Restauracion Familiar",
      description:
        "Ministerio De Restauracion Familiar (MIREFA) MIREFA is Martin's first website written entirely in Spanish. The website provides the ministry home for Gilmer y Ethel Mauricio.  Using the website, made with WordPress, the Mauricios are able to add content, post pictures, and schedule events with hundreds of churches in Iowa and the Midwest.<br/><br/>",
      techDetails: {
        backEnd: "Apache server, PHP, MySQL, WordPress",
        frontEnd: "HTML, CSS, Bootstrap, React",
        specialFeatures: "WordPress Blog with fully responsive front end.",
        deployment: "GoDaddy shared hosting (C-Panel)",
        performance:
          "Rated by <a href='https://gtmetrix.com/reports/mirefa.org/PDMnLbBr/' target='_blank'> GTMetrix</a> at 90% for structure, 72% overall.",
        analytics: "",
        metaData: "",
        gitUrl: "",
      },
      varName: "mirefa",
      image: mirefaPicture,
      siteUrl: "https://mirefa.org",
      featured: false,
    },
  ],
  webApps: [
    {
      title: "Vidly Video",
      description:
        "Vidly Video represents a customer interface for video streaming rental operations. The application allows the user to register, search for movies, and secure movies for rental. User registration can be at three different authorization levels; administrators, employees, and customers.",
      techDetails: {
        backEnd: "ASP.NET MVC, Entity Framework, MySQL",
        frontEnd: "HTML, CSS, JavaScript, jQuery",
        specialFeatures:
          "User registration and validation.  Form input validations with data annotations and jQuery validate.",
        deployment: "Microsoft IIS Server, AWS Elastic Beanstalk",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/VidlyVideoForVS2019",
      },
      varName: "vidly",
      image: vidlyImage,
      siteUrl: "http://vidly001-dev.us-east-2.elasticbeanstalk.com/",
      featured: true,
    },
    {
      title: "Feedback Focus",
      description:
        "Feedback Focus is an all-in-one survey creation and feedback management tool.  Feedback Focus authenticates users, facilitates creation of surveys, emails the survey, receives responses and tabulates results.",
      techDetails: {
        backEnd: "Node Express Server, MongoDB",
        frontEnd: "HTML, CSS, Materialize.css, JavaScript, React, Redux",
        specialFeatures:
          "Google API for registration and authentication.  Stripe API for payment services. SendGrid API for automated survey transmission and data collection.",
        deployment: "Heroku Platform-as-a-Service (PaaS)",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/FeedbackFocusApp",
      },
      varName: "feedbackFocus",
      image: feedbackFocusImage,
      siteUrl: "https://customer-email-response-app.herokuapp.com/",
      featured: true,
    },
    {
      title: "Expensify",
      description:
        "Expense management app for a wide range of users.  Users can securely login with their GoogleId. Authentication is provided through Google Firebase. Users can create, edit, or remove expenses from their list of ongoing expenses. Expenses can track several expense attributes. Expenses can be sorted and searched.",
      techDetails: {
        backEnd: "Node Express Server, Google Firebase Realtime Database",
        frontEnd: "HTML, Sass, JavaScript, React, Redux",
        specialFeatures:
          "Extensive testing with Jest, Enzyme, React test renderer.",
        deployment: "Heroku Platform-as-a-Service (PaaS)",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/ExpensifyApp",
      },
      varName: "expensifyApp",
      image: expensifyImage,
      siteUrl: "https://mdbytes-expensify-app.herokuapp.com/",
      featured: false,
    },
    {
      title: "Careers",
      description:
        "An employment application module that could be integrated into any enterprise internet or intranet framework. Input is validated. When necessary, the applicant is guided to correct inputs that cannot be accepted.",
      techDetails: {
        backEnd: "Linux server with Nginx support",
        frontEnd: "HTML, CSS, Bootstrap, JavaScript, jQuery, jQuery UI.",
        specialFeatures: "Input validation using jQuery validate.",
        deployment: "DigitalOcean virtual private server",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/EmploymentApplication",
      },
      varName: "careers",
      image: careersImage,
      siteUrl: "https://careers.mdbytes.us/",
      featured: false,
    },

    {
      title: "Chat App",
      description:
        "ChatApp provides an interface for secure and instant communication between users. Users can login to a specific chat room or create their own room and invite others. All users in a room receive an alert when anyone else joins or leaves the room.",
      techDetails: {
        backEnd: "Node Express, Socket.io",
        frontEnd: "HTML, CSS, JavaScript",
        specialFeatures: "Use of socket.io to secure communication stream.",
        deployment: "Heroku Platform-as-a-Service (PaaS)",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/ChatApp/tree/main/src",
      },
      varName: "chatApp",
      image: chatImage,
      siteUrl: "https://mdbytes-chat-app.herokuapp.com/",
      featured: false,
    },
    {
      title: "The Bird",
      description:
        "This social clone was first developed years ago.  Nonetheless, it has recently been resurrected for further development.  The site allows users to logon, collect contacts, and share information with contacts.",
      techDetails: {
        backEnd: "Php, MySql",
        frontEnd: "HTML, CSS, JavaScript, Bootstrap",
        specialFeatures: "In process of transition to Laravel ",
        deployment:
          "Currently deployed on DigitalOcean virtual private server.",
        performance: "",
        analytics: "",
        metaData: "",
        gitUrl: "https://github.com/martindwyer/TheBird",
      },
      varName: "bird",
      image: birdPicture,
      siteUrl: "https://bird.mdbytes.us/",
      featured: false,
    },
  ],
}

export default portfolio
