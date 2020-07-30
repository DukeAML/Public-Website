const projects = [
  {
    uid: 1,
    title: "Course-insight",
    description:
      "Our goal is to find out what aspects of an online course correlate with high course ratings by using explicit feedback and learner behavior, and provide recommendations to instructors on how to improve their online courses.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1M-ABaiIEKeo4h0Rb1EsFk3MvRas-F3_R",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128819/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 2,
    title: "Coursera Support Ticket Classification",
    description:
      "Using a dataset of user support tickets (in the form of chat transcripts and emails) tagged to specific support issues (e.g., “payments”, “assignments”, “registration”), we worked to improve, extend, and evaluate a classifier that can be used to group and triage incoming support tickets.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1cytL65pP9kZVkI3H6wPVt8X0a4oai3Cq",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128819/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 3,
    title: "IBM Hyper Protect Accelerator",
    description:
      "IBM Hyper Protect Accelerator is a new tech startup program designed to build and scale the next generation with solutions engineered to keep their sensitive data highly secure. We the interns have been working with a series of these tech startups ranging across the fintech and healthtech spheres.",
    abstract:
      "We have been working across four international startups:\n- Home Lending Pal is an AI-powered mortgage advisor that allows potential borrowers to see mortgage approval odds without applying for a mortgage\n- myAllergy helps consumers regain their freedom from food allergies while reducing risk exposure for businesses\n- Privakey streamlines the way people authenticate their identities & authorize anything by delivering secure, interactive content\n - Wayapay enables people to send money securely, efficiently, and affordably from any country in the world to and within sub-Saharan Africa",
    drive: "https://drive.google.com/open?id=1NQyO5aE7tq80dsSWgj2AAp8Et6Jf2Fxd",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128978/phoenix/Screen_Shot_2020-07-29_at_5.01.49_PM_-_Jacob_Rubin_khbggx.png",
  },
  {
    uid: 4,
    title: "Levels.fyi",
    description:
      "The main goal of this project is to build an internal website that helps the Offer letter reviewing process. The main functions include pdf extraction, ML on fraud data detection and full-stack software engineering.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1rcd3b9aW6Qsgidym0bzhnR-Hi9P8ztb-",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129027/phoenix/Screen_Shot_2020-07-29_at_6.25.37_PM_-_Y_F_trxmzv.png",
  },
  {
    uid: 5,
    title: "Rakkkasans (101st Airborne Division DoD)",
    description:
      "We are working with members of the 101st Airborne Division to build a mobile application geared towards consolidating relevant training/administrative information in an easy to use mobile interface.",
    abstract:
      "We have worked with our correspondents in the 101st Airborne Division to design a user interface and then build out those designs using React Native. The app includes a news section where soldiers can find relevant news articles, information about their commanding officers and the division itself, as well as more administrative information about individual battalions and their histories (and many other features, including a game). All of this information has been compiled from multiple bodies within the DoD to reduce the hassle of finding information which has been traditionally stored in cumbersome, physical formats. All of the decisions have worked to build an app that is both easy to update (in house) and can change according to new necessary features which may be desired in the future.",
    drive: "https://drive.google.com/open?id=1HOEvf7bHcUzaapByJ3WiiHEMgxQp4beV",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129041/phoenix/200px-US_101st_Airborne_Division_patch.svg_-_Matt_Dillabough_w0r3ap.png",
  },
  {
    uid: 6,
    title: "Black Fire Ventures Game",
    description:
      "Black Fire Game is a project designed to shake up the current casino game industry. We are working to design a MVP that will capture the attention and business of Millennial and Generation Z consumers and drive foot traffic to casinos.",
    abstract:
      "Through our work with industry professionals, we have identified and targeted key drivers of repeat gameplay and are working to adapt this model to a more modern gaming aesthetic and design. Our plan to deploy this game will provide multiple routes to traditional video game monetization - loot boxes, skins, etc. - in addition to casino specific house controlled betting (similar to slot machines). We plan to demonstrate our current MVP and create a white paper to long term adoption and deployment and a break down of the potential market niche this product could fill",
    drive: "https://drive.google.com/open?id=1K0Kj0cl8kIF-P2DtM9UrvXSwX7J-fpjJ",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129312/phoenix/BFVLogo_-_Arushi_Bhatia_czfrkg.png",
  },
  {
    uid: 7,
    title: "DoD- 4th Medical Group Mobile App Development",
    description:
      "The team was tasked to modernize the 4th Medical Group Thomas Koritz Clinic mobile app to improve the user experience.",
    abstract:
      "In order to create a more functional and pleasant mobile app, the team was inspired by the simplistic and intuitive user interfaces of other hospital apps. The team implemented some of these design features and also integrated the new app to other parts of the clinic's ecosystem including the clinic's online portals, news feed, and directory. The result is a more meaningful avenue of communication and information between patients and healthcare workers.",
    drive: "https://drive.google.com/open?id=1T0tonNxqFjrcoeVG8Ri1zs0L9aX5VwaW",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129086/phoenix/download_-_Joe_choo_pa85jn.jpg",
  },
  {
    uid: 8,
    title: "Woto",
    description:
      'Woto, short for "working together", is a student-founded app that allows professors to manage virtual office hours for their courses.',
    abstract:
      "Our founding team consistently experienced 1-2 hour-long wait times for office hours in our CS courses at Duke. When these wait times increases to 2-4 hours during virtual courses this past Spring, we knew we needed to design a solution that works for students, teaching assistants, and professors.\n\nWe offer a platform for hosting virtual (and later in-person) office hours sessions, a comprehensive dashboard for professors to understand the data analytics behind their courses, and a room for students to work together on problems with their peers.\n\nWe began user research and designing wireframes in May and have since developed a production React/Node/MongoDB app that will be in Duke CS courses in the fall.",
    drive: "https://drive.google.com/open?id=1e_8KPDaRIAxHPXQQgeGgfl1Z9R0Smm8A",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129621/phoenix/logo-square_-_Jaidha_Rosenblatt_ukl0hj.png",
  },

  {
    uid: 9,
    title: "Course Insight",
    description:
      "Using explicit feedback and learner behavior, produce a report about what aspects of an online course correlate with high course ratings (across a variety of dimensions).",
    abstract: "EDA, Predictive models,Predicting rating",
    drive: "https://drive.google.com/open?id=1K3vXjlZGf5prg1N5nuNEV1mPNjklrvYW",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128819/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 10,
    title: "Eagle - ISEEU",
    description:
      "Development of a scheduling webapp used to coordinate radiation testing for the Missile Defense Agency under the US Department of Defense.",
    abstract:
      "Radiation testing is a necessary step in validating the stability of electrical components for eventual deployment in space, with applications in fields such as avionics, high energy physics, and the automotive industry. Current radiation testing methods and facilities require long travel and setup times, expensive service fees, and reservations up to a year in advance partly due to outdated and uncoordinated scheduling tools. As one of the largest coordinators of radiation testing in the United States, the Missile Defense Agency aims to integrate the scheduling process between the four US testing facilities through the development a user-friendly and responsive webapp, potentially reducing service fees, unused testing hours, and scheduling errors. The webapp, termed Integrated Single Event Effects Utility (ISEEU), was developed using React and Python.",
    drive: "https://drive.google.com/open?id=1weXKzIog_Up-0y9mFnWNvlRaN0wWHR2y",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129193/phoenix/ISEEULogo_-_Jiwoo_Song_plyff2.png",
  },
  {
    uid: 11,
    title: "ARIX Technologies Data Analytics Dashboard",
    description:
      "This dashboard visualizes and presents a combination of live and historical data collected from robots created by ARIX Technologies.",
    abstract:
      "ARIX Technologies is an early stage, venture-backed robotics & data analytics company. We have been working on a dashboard project this summer that aims to visualize and present a combination of live and historical data collected from robots created by ARIX Technologies. However, the data we use at ARIX is highly proprietary. So, we will use an entirely different dataset and problem statement to showcase a modified and simplified version of dashboard the work we’ve done this summer and the technologies we used to create it.",
    drive: "https://drive.google.com/open?id=1V0R6smkivu7ZvXP26aWwaFvt53QsCOe7",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129224/phoenix/ARIX_NASA_logo_-_Elise_Brown_s8kgq6.png",
  },
  {
    uid: 12,
    title: "Peer Medical",
    description:
      "Peer Medical is a patient empowerment tool to help lung cancer patients compare verified anonymous medical records so that they can optimize their treatment plans. We were tasked with building an NLP web application that recognizes relevant information from anecdotal treatment stories in order to build new patient profiles.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1CWF21MWkF352DpES5trOuyZ-sWQtdno-",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129246/phoenix/Peer_Medical_logo_-_Caleb_Woo_lgzgtz.jpg",
  },
  {
    uid: 13,
    title: "FatTail",
    description:
      "FatTail is focused on redefining the business of advertising by allowing ad publishers to increase monetization, control, and scale. For FatTail, we completed two machine learning projects: one which aimed to develop a pricing model for publishers and another that created a refined taxonomy for news articles.",
    abstract:
      "Unlike the world of finance, where price discovery is standard and prices are driven by supply and demand, the forward market for advertising is still based on archaic practices like “rate cards” (e.g. list price) and indiscriminate pricing. The first project aimed at providing a more flexible pricing approach: using historical data from actual ad sales teams, we built a solution that used ML to determine which attributes about the buyer, the website, placement, etc. had an impact (positive or negative) on price. For our second project, we focused on contextual ad buying: \ncontextual (topical) ad buying is returning to favor due to the increased scrutiny around consumer privacy and tracking. Unlike audience targeting, which relies on identifiers to locate a person, contextual targeting uses the topics of a web page as the mechanism to group and target consumers. We built a tool that can crawl web pages for a given set of root domains and classify each page into a target taxonomy. The taxonomy values will be used to inform “key values” that can eventually be communicated to the publisher’s ad server (which is needed to sell and deliver ads for any topic).",
    drive: "https://drive.google.com/open?id=1Qs7iph2TPsgUikY0RkhpohCWOo1ofHqs",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129262/phoenix/Screen_Shot_2020-07-29_at_8.18.17_PM_-_Shreya_Shubhangi_zybjgx.png",
  },
  {
    uid: 14,
    title: "Black Fire Journalism",
    description:
      "Our project was to create a new model for journalism that restores trust by addressing the main problems present in journalism today: a broken economic model, niche programming, and the proliferation of misinformation. Our technical solution for this problem implements cutting-edge technologies such as machine learning, natural language processing, and blockchain technology to facilitate fact-checking, and manifests in a platform that revitalizes local and freelance journalists.",
    abstract:
      "Journalism today is facing multiple crises that have led to an overall feeling of distrust in the industry: a broken economic model, the presence of niche programming, and the rampant spread of misinformation. In order to address these problems at a large scale, especially considering that news today is being produced in 24-hour cycles, a technological and automated solution must be embraced. Our model implements fact-checking for news articles as a service, and does so using machine learning, natural language processing, and blockchain technology to verify statements against databases maintained by official sources. This technical framework is manifested in a service marketplace and media content platform which will connect local news organizations and freelance journalists with readers seeking to consume fact-checked content. In the long term, our idea of fact-checking as a service can be used to not only check news articles, but also podcasts, social media posts, and other forms of media. Overall, this project not only has the power to restore trust in journalism by addressing its multiple crises, but do social good in our society by cultivating informed citizens and maintaining democracy.",
    drive: "https://drive.google.com/open?id=1uZcESB2q5D0odptd2I2DURlRaSjSqVvw",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129312/phoenix/BFVLogo_-_Arushi_Bhatia_czfrkg.png",
  },
  {
    uid: 15,
    title: "OfficePro",
    description:
      "OfficePro sought to expand their suite of training and licensing services for their clients with the addition of a chatbot to help with user queries related to the Microsoft 365 applications. The Phoenix Project team built a chatbot using Microsoft’s QnA Maker Service and Microsoft Azure, along with a knowledge base that includes a wealth of content encompassing the Microsoft Word, Excel, and Powerpoint applications.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1zYdgNg8_1pKrRJRA6ua7POCuR1r5i6Iw",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129340/phoenix/office-pro-logo_-_William_Hayward_fcjgm5.png",
  },
  {
    uid: 16,
    title: "Invoice Data Ingest Pipeline - ARCO/Murray",
    description:
      "To digitize company invoices and store the data, and provide a way to analyze aggregate data.",
    abstract:
      "Currently, thousands of invoices are being stored as PDFs without an automated way to digitize and store the information. ARCO/Murray wants to be able to view this data via web application in a simpler way and to sort it in order to detect different outliers and trends. We utilized several online services including AWS, Heroku, and Microsoft Sharepoint.",
    drive: "https://drive.google.com/open?id=1zbXmZx3Gy9WJXOX5K3XuQAZqzWRHxxZ2",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129360/phoenix/arcomurray_-_Jeffrey_Liu_dhkrqo.jpg",
  },
  {
    uid: 17,
    title: "Polarization Lab",
    description:
      "A web app evaluates polarization scores based on Twitter handle",
    abstract: "",
    drive: "https://drive.google.com/open?id=1VrQacyWevo91LIpoDu8hTSMacYqdB6cA",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129379/phoenix/lab_logo_-_charlie_ksncy1.png",
  },
  {
    uid: 18,
    title: "PolarisQB",
    description: "A dashboard web application developed in Django and Vue.js.",
    abstract:
      "•\tCreated a dashboard web application from scratch, based on Django and Vue.js, as a full-stack developer.\n•\tDynamically addressed user-uploaded files to different storage ends with an intermediate data access layer.\n•\tContributed in an energetic start-up environment with daily stand-up, sprint meetings and Agile development.",
    drive: "https://drive.google.com/open?id=1m7IwUOoFya5RVTkFzSGjoHbjRJ-9kju2",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129393/phoenix/polarisqb_-_Yuanrui_Zhang_zgkl0t.png",
  },
  {
    uid: 19,
    title: "Axial Industry Recommender",
    description:
      "A recommender that can predict industry based on description input.",
    abstract:
      "To predict industries from an industry node tree, we built two models to do the text mining and both are based on multi-label classification with Neural Network. One predicts tail - 1 nodes first then use a pre-trained model to recommend tail nodes. Another predicts tail nodes directly.",
    drive: "https://drive.google.com/open?id=1L8p0r6iPFoZ94dIbawz7qRuej8KDS8XC",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129407/phoenix/logo_-_Yi_Mi_zf2er6.png",
  },
  {
    uid: 20,
    title: "Predicting battery cycle life using data-driven methods",
    description:
      "Working with Cuberg, a company developing next-generation battery technologies and their partner Aionics, whose platform supports AI-driven materials science research, we developed models for the prediction of battery cycle life using early cycle data.",
    abstract:
      "Lithium ion batteries are widely used for consumer applications, and improving their energy density, lifespan, and safety is an active area of research. Testing new battery materials and manufacturing methods is difficult however, due to the long lifespans of lithium batteries.\nWorking with Cuberg, a company developing next-generation battery technologies and their partner Aionics, whose platform supports AI-driven materials science research, regularized linear models were developed that can accurately predict battery life using early cycle data. These models allow for the classification of battery cells based on predicted performance before they reach consumers, improving cell reliability and guiding future development.",
    drive: "https://drive.google.com/open?id=1wPJKnRKRpQ69d9qEuk6F3gk6Olo5drqD",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129445/phoenix/cuberg2_-_Yoav_Kargon_u5ochr.png",
  },
  {
    uid: 21,
    title:
      "Synthesizing Taxi Trajectories Using Generative Adversarial Networks",
    description:
      "This project aims at exploring the possibility of applying generative adversarial networks to synthesize realistic taxi trajectory data for data privacy protection.",
    abstract:
      "In today’s environment with exploding information, we can be identified more easily than we expected through multiple sources where our information is collected anonymously. With the advancement of mobile devices with GPS, better internet accessibility, and increasing demand for location-dependent services such as finding nearest restaurants or the shortest route to a destination, geolocation data, more specifically trajectory data, becomes valuable for marketing and academic research and is collected more frequently. We've showed a succesfull application of GANs to generate synthetic taxi trajectories. However, GANs are still evolving within this area of application, and they are massively impacted by the preprocessing chosen, leading to some drawbacks and issues to be solved, such as mode collapse, which suggests further research in this area.",
    drive: "https://drive.google.com/open?id=1LXpcghwfcHHan95M9vqQgMbE8ZeKjsVY",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129461/phoenix/Logo_YD_600x600_-_Shiyi_Jiang_weu6pz.png",
  },
  {
    uid: 22,
    title: "Department of Defense - NC National Guard Website",
    description:
      "The NC National Guard's public-facing website was created years ago. The goal of this project was to design and implement a modernized version of the NC National Guard's public website.",
    abstract:
      "Due to funding and limited skillsets, the NC National Guard's public-facing website has not been modernized in years. The goal was to design and implement a new version of the website, but still use SharePoint 2013. We created a new design for the website using Invision, implemented it using the React framework, and deployed it using SharePoint Online. For the last few weeks, we've been working on deployment using SharePoint 2013 on a Windows virtual machine.",
    drive: "https://drive.google.com/open?id=1GHp1xaWyEiUyYZw7QL6ovseKwhXyGYOp",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129530/phoenix/logo_-_Isabella_Wang_ul9jt6.png",
  },
  {
    uid: 23,
    title: "AI2 - Speech",
    description:
      "The company is developing NLP product, and we are supporting them on both technical and business side.",
    abstract:
      "The technical side of work involves transcribing speech to text in a specific context,  including reproducing the SOTA model and combining it with real-time audio processing. On the business side, the work covers the market research, competitor analysis and product marketing.",
    drive: "https://drive.google.com/open?id=19fOJ7hyGbUl2xwKmigetytuGSMqOvexj",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129560/phoenix/image_-_leilei_liu_1_cfgels.png",
  },
  {
    uid: 24,
    title: "Almost Matching Exactly Lab - Matching for Causal Inference",
    description:
      "A study and comparison of various statistical machine learning based algorithms to match upon continuous, discrete and categorical covariate data to obtain close matches of units for obtaining accurate treatment effects.",
    abstract:
      "The AME lab has so far designed four algorithms - DAME, FLAME, MALTS and AHB. The first work was to create a tutorial manual website for the four algorithms, clearly explaining to an user how they should choose an appropriate algorithm and use the various in-built functions. Secondly, data visualization techniques were designed to better showcase the relation within and between marched groups. Thirdly, speed and complexity tests were done to assess the algorithms logistically. Next, the R and Python packages for various algorithms were synced and made comparable in performance. Lastly, we used them on various datasets obtaining useful insights.",
    drive: "https://drive.google.com/open?id=12jqdd617WSvdqT0YEj_iDHS7IRrHgJu9",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129575/phoenix/logo_-_Angikar_Ghosal_us2gld.png",
  },
  {
    uid: 25,
    title: "myDrugCosts",
    description:
      "myDrugCosts is a software platform that helps self-insured companies and their employees reduce their prescription drug costs. \nOur team built two dashboards and an automated savings reporting system to help the company communicate its value to customers, identify potential low-cost drugs, and identify savings trends.",
    abstract: "",
    drive: "https://drive.google.com/open?id=1nPQWX9Z2f0U0qrkqJS3JlzEUAxER12C5",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129588/phoenix/LOGO_-_Joseph_Krinke_gz7p8h.jpg",
  },
  {
    uid: 26,
    title: "Finance Machine Learning",
    description:
      "FML is a web application that algorithmically manages how to best invest a user's assets by applying machine learning to market trading.",
    abstract:
      "Similar to an actual trader, FML's algorithm looks over a variety of technical indicators (e.g. Moving Average Convergence Divergence (MACD)) to determine if a security needs to be purchased or sold. Each technical indicator is a \"weak learner\" ML model (most are RBF Kernel SVMs) trained on ~200 days of stock data that outputs a 0/1 corresponding to a buy/sell signal. From there, the FML algorithm checks the outputs from all the individual models and votes on whether to buy, sell, or hold the security. The model is able to achieve high predictive power and based on some backtests actually beat human traders thanks to this Bagging and Boosting approach. Once FML gains brokerage status, it'll allow for users to not only start trading, but also even create their own ML trading models.",
    drive: "https://drive.google.com/open?id=1e2uC7xK3V6RvJ1eGLW_YNzIYkoKCZmNO",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129604/phoenix/FML_-_Tommy_Hessel_ffgfr1.png",
  },
  {
    uid: 27,
    title: "EzTrain",
    description:
      "EZTrain offers an intuitive software platform that assists section chiefs and traditional reservists by eliminating wasted time.",
    abstract:
      "With an Air Force endorsement, EZTrain organizes, prioritizes, and tracks requirements for squadron training. EZTrain facilitates the planning process of these training events, relieving the pain of manually preparing in the current system.",
    drive: "https://drive.google.com/open?id=1GsnYYpeQx0PaJZbWBmxXgECcqlQg_4Ay",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129122/phoenix/Logo_-_Xie_Jingyi_xuujpm.png",
  },

  {
    uid: 28,
    title: "Extracting Insights from Free-Text Course Feedback",
    description:
      "This project aims to produce automated tagging and insight extraction from free-text reviews to provide useful insights for each course.",
    abstract:
      "Learners have the opportunity to provide ratings and reviews for courses in which they have enrolled. Although these reviews are publicly available, there are limited options for instructors or learners to quickly glean insights from them. By defining useful aspects that learners would want to filter for and tag reviews by for each course, we are able to determine the polarity of user opinion at a more granular level to help both learners and instructors gain useful insights.",
    drive: "https://drive.google.com/open?id=13fnpdGDrSfxCCr2pZ3ZUUyYXgktH4DZc",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128819/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 29,
    title: "Hypershot",
    description:
      "Pager provides a platform for group chats to be organized by topics. This summer, we built a core feature called Hypershot which uses optical character recognition and web scraping to extract source URL's from screenshots shared by users.",
    abstract:
      "Hypershot was envisioned as a way to unlock the potential of screenshots as a medium for sharing content. Our surveys have indicated that many users prefer to share screenshots in lieu of copying links directly from content sources because of convenience and the inconsistency of link previews. Hypershot would allow users to directly interact with the original source of a screenshot with a simple click.",
    drive: "https://drive.google.com/open?id=1CsEg9JCtOR0stpCUNGem2V02lMQGzJos",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129653/phoenix/Pager_Logo_1_-_Vincent_Peng_ljmjfw.png",
  },
  {
    uid: 30,
    title: "Konektid",
    description:
      "We are exploring how AI/ML can reduce overhead costs for humanitarian aid organizations, primarily in their business development processes, so the organizations can direct more funding to delivering sustainable impact in the communities where they work.",
    abstract:
      "Konektid is building a new platform AidKonekt, which will automate much of the monitoring process involved in this industry and will ease this business development burden by condensing, centralizing, and making more accessible, key USAID procurement data from numerous government databases. AidKonekt will show changes to procurement data in real time paired with historical data on awards to expedite the work of Business Development teams and allow small businesses to compete in the market. As interns, we have been aiding in the automation process for AidKonekt. We are exploring how AI/ML can reduce overhead costs for humanitarian aid organizations, primarily in their business development processes, so the organizations can direct more funding to delivering sustainable impact in the communities where they work.",
    drive: "https://drive.google.com/open?id=1baVsrl-xNkruTs6gL_W-dRHPswl41I9t",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129690/phoenix/konektid_logo_-_Doherty_Guirand_gqyv0b.png",
  },
  {
    uid: 31,
    title: "Service Robotics & Technologies",
    description:
      "Backend development for software solutions to integrate 3rd party hardware platforms to augment human-driven tasks as performed in the smart home, custodial, hospitality, and food/beverage industries.",
    abstract:
      "In our time with SRT Labs we have been able to develop new API endpoints using node.js and express.js to implement certain functionalities with devices such as device cards and an analytics module. In addition, we were able to redesign the caching process by building a redis application to achieve faster document access. We then moved towards a different technological sphere by integrating new IOT devices through Python wrappers in order to transmit data to our backend server. Throughout this internship, we have been able to work on fascinating projects that allowed us to dive deep into our interests and gain many skills that we will be able to use for the rest of our careers.",
    drive: "https://drive.google.com/open?id=1XK2LjmIXvmZi7SqYhcQa7uPaf6Losry3",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129713/phoenix/0_-_Feng_Hu_wqgchk.jpg",
  },
];

module.exports = projects;
