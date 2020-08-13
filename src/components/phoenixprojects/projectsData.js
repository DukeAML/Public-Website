const projects = [
  {
    uid: 1,
    title: "AI2 - Speech",
    description:
      "The company is developing NLP product, and we are supporting them on both technical and business side.",
    abstract:
      "The technical side of work involves transcribing speech to text in a specific context,  including reproducing the SOTA model and combining it with real-time audio processing. On the business side, the work covers the market research, competitor analysis and product marketing.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596560138/phoenix/image_-_leilei_liu__2_-removebg-preview_fryqzl.png",
  },
  {
    uid: 2,
    title: "AllElements",
    description:
      "How can we use machine learning to help companies work smarter?",
    abstract:
      "In this project, we introduce a system that optimizes HR outcomes by suggesting topics to meeting organizers in a corporate setting. We do this in two parts: a frequency-based recommender system and a natural language model. The frequency system optimizes standard deviations among the amounts of time passed between each occurrence of the topic. The natural language model, however, utilizes a traditional neural network structure and uses attention mechanisms and long short-term memory networks to interpret relationships in semantic structure between sentences and assign a correlation score to the two sentences.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559259/phoenix/Screen_Shot_2020-07-30_at_9-removebg-preview_wqpuz2.png",
  },
  {
    uid: 3,
    title: "Almost Matching Exactly Lab - Matching for Causal Inference",
    description:
      "A study and comparison of various statistical machine learning based algorithms to match upon continuous, discrete and categorical covariate data to obtain close matches of units for obtaining accurate treatment effects.",
    abstract:
      "The AME lab has so far designed four algorithms - DAME, FLAME, MALTS and AHB. The first work was to create a tutorial manual website for the four algorithms, clearly explaining to an user how they should choose an appropriate algorithm and use the various in-built functions. Secondly, data visualization techniques were designed to better showcase the relation within and between marched groups. Thirdly, speed and complexity tests were done to assess the algorithms logistically. Next, the R and Python packages for various algorithms were synced and made comparable in performance. Lastly, we used them on various datasets obtaining useful insights.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596560175/phoenix/logo_-_Angikar_Ghosal__1_-removebg-preview_bk3l1s.png",
  },
  {
    uid: 4,
    title: "Apervita-AWS",
    description:
      "Using AWS to work with Fast Healthcare Interoperability Resources, in order to ingest their data and serve them up to clients",
    abstract:
      "The first part of the project is concerned with providing a way for clients to get Apervita's internal data as FHIR. This works by them requesting the data through an API endpoint (AWS API Gateway), a data shaper converting the data to FHIR (in AWS Lambda) and then returning the FHIR as a response payload. The other part of the project is preparing FHIR data to be profiled internally. An AWS Glue Crawler creates a schema from the FHIR in AWS S3 that allows it to be queried with SQL using AWS Athena.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559398/phoenix/apervita_-_Austin_Odell-removebg-preview_bmwkyw.png",
  },
  {
    uid: 5,
    title: "Aquanta Heater Issue Identification",
    description:
      "Utilizing Aquanta’s large dataset of water heater behavior, we sought to characterize key water heater failure modes and develop models for continuous identification of said failures.",
    abstract:
      "Our first major project involved identifying misinstalled Aquanta units through key characteristics in the water heater data. After conducting extensive exploratory data analysis and producing a preliminary statistical approach, we iteratively developed, evaluated, and operationalized a Random Forest Classifier for identification of multiple misinstallation categories.  For our second major project, we were tasked with developing a method for anomalous temperature data detection, a key aspect in proactively monitoring water heater behavior. Utilizing TensorFlow, we constructed a recurrent neural network to apply to Aquanta’s large set of time-series data to accomplish this goal.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559416/phoenix/171F4A4F-FC8C-4156-A2AC-F692864B4D83_-_Daniel_Feinblatt_yhklmo.png",
  },
  {
    uid: 6,
    title: "ARIX Technologies Data Analytics Dashboard",
    description:
      "This dashboard visualizes and presents a combination of live and historical data collected from robots created by ARIX Technologies.",
    abstract:
      "ARIX Technologies is an early stage, venture-backed robotics & data analytics company. We have been working on a dashboard project this summer that aims to visualize and present a combination of live and historical data collected from robots created by ARIX Technologies. However, the data we use at ARIX is highly proprietary. So, we will use an entirely different dataset and problem statement to showcase a modified and simplified version of dashboard the work we’ve done this summer and the technologies we used to create it.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129224/phoenix/ARIX_NASA_logo_-_Elise_Brown_s8kgq6.png",
  },
  {
    uid: 7,
    title: "Axial Industry Recommender",
    description:
      "A recommender that can predict industry based on description input.",
    abstract:
      "To predict industries from an industry node tree, we built two models to do the text mining and both are based on multi-label classification with Neural Network. One predicts tail - 1 nodes first then use a pre-trained model to recommend tail nodes. Another predicts tail nodes directly.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596560232/phoenix/logo_-_Yi_Mi__1_-removebg-preview_lknl7s.png",
  },
  {
    uid: 8,
    title: "Black Fire Journalism",
    description:
      "Our project was to create a new model for journalism that restores trust by addressing the main problems present in journalism today: a broken economic model, niche programming, and the proliferation of misinformation. Our technical solution for this problem implements cutting-edge technologies such as machine learning, natural language processing, and blockchain technology to facilitate fact-checking, and manifests in a platform that revitalizes local and freelance journalists.",
    abstract:
      "Journalism today is facing multiple crises that have led to an overall feeling of distrust in the industry: a broken economic model, the presence of niche programming, and the rampant spread of misinformation. In order to address these problems at a large scale, especially considering that news today is being produced in 24-hour cycles, a technological and automated solution must be embraced. Our model implements fact-checking for news articles as a service, and does so using machine learning, natural language processing, and blockchain technology to verify statements against databases maintained by official sources. This technical framework is manifested in a service marketplace and media content platform which will connect local news organizations and freelance journalists with readers seeking to consume fact-checked content. In the long term, our idea of fact-checking as a service can be used to not only check news articles, but also podcasts, social media posts, and other forms of media. Overall, this project not only has the power to restore trust in journalism by addressing its multiple crises, but do social good in our society by cultivating informed citizens and maintaining democracy.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129312/phoenix/BFVLogo_-_Arushi_Bhatia_czfrkg.png",
  },
  {
    uid: 9,
    title: "Black Fire Ventures Game",
    description:
      "Black Fire Game is a project designed to shake up the current casino game industry. We are working to design a MVP that will capture the attention and business of Millennial and Generation Z consumers and drive foot traffic to casinos.",
    abstract:
      "Through our work with industry professionals, we have identified and targeted key drivers of repeat gameplay and are working to adapt this model to a more modern gaming aesthetic and design. Our plan to deploy this game will provide multiple routes to traditional video game monetization - loot boxes, skins, etc. - in addition to casino specific house controlled betting (similar to slot machines). We plan to demonstrate our current MVP and create a white paper to long term adoption and deployment and a break down of the potential market niche this product could fill",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129312/phoenix/BFVLogo_-_Arushi_Bhatia_czfrkg.png",
  },
  {
    uid: 10,
    title: "Blackfire Ventures VC",
    description:
      "Working with Blackfire Ventures to develop a business model for their Venture Capital fund.",
    abstract:
      "We are the Blackfire Venutures Venture Capital team, and we are working closely with the BFV partners to aid in all matters directly relevant to the development of the VC fund. On a high level, our main objective is to develop an operating model that will be used to effectively build and stand up the fund. On a more granular, day-to-day level, we analyze potential investment opportunities and present our recommendations to the partners, we consult with startups as part of the mandate of active investing, and we provide insight into the broader goals of the fund. BFV is working closely with the Pheonix Project to enact social impact and spearhead social innovation, so our team is currently working on a plan to leverage this work to give BFV credibility when approaching potential Limited Partners and fundraising targets. We believe that this commitment to social change will enable a smooth transition into the impact investing sector, and we hope that our future investing will align with the ideals that we are following right now via Phoenix Project. Our work pivots frequently and our tasks change every week, but we know that the work we are doing is laying the groundwork for the ultimate construction of the BFV VC fund.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129312/phoenix/BFVLogo_-_Arushi_Bhatia_czfrkg.png",
  },
  {
    uid: 11,
    title: "Collins Lab- Precision Warfarin Dosing",
    description:
      "Warfarin is the most commonly prescribed blood thinner by clinicians, and dosing can vary widely per patient. In this project, we use machine learning models to achieve more accurate and precise warfarin dosing.",
    abstract:
      "Warfarin is an anticoagulant taken by 20 million Americans, and another 2 million start taking the drug each year. The appropriate dose of warfarin is difficult to establish because it can vary greatly from patient to patient. Using two large publicly available datasets, we applied conventional machine learning techniques to regress the proper daily dose of warfarin from a set of clinical variables such as age, weight, and race. Our initiation dose model delivered results that were 0.5-1.0 mg/week more accurate than the current precision-based standard for warfarin dose initiation algorithms. We are currently exploring an update dose algorithm to refine the estimation of the proper daily dose.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Duke_University_logo.svg/1024px-Duke_University_logo.svg.png",
  },
  {
    uid: 12,
    title: "Copperwire Systems",
    description:
      "Copperwire Systems specializes in providing technology, application and middleware services to enterprises to improve blockchain conductivity.",
    abstract:
      "This project is focused on the visualization of complex business flows and processes using graph databases as an alternative to relational databases. The data layer involves the use of Neo4j for entities, documents exchanged and schemas. Then, REST APIs (functions and calls) can be used for the business logic layer. The aim is to build an end-to-end application using Javascript, and more broadly, to enable businesses to use blockchain's capabilities to the fullest.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559360/phoenix/copperwire_logo_-_Ananya_Vohra-removebg-preview_xrj113.png",
  },
  {
    uid: 13,
    title: "Course Insight",
    description:
      "Using explicit feedback and learner behavior, produce a report about what aspects of an online course correlate with high course ratings (across a variety of dimensions).",
    abstract: "EDA, Predictive models,Predicting rating",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596302360/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 14,
    title: "Course-insight",
    description:
      "Our goal is to find out what aspects of an online course correlate with high course ratings by using explicit feedback and learner behavior, and provide recommendations to instructors on how to improve their online courses.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596302360/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 15,
    title: "Coursera Support Ticket Classification",
    description:
      "Using a dataset of user support tickets (in the form of chat transcripts and emails) tagged to specific support issues (e.g., “payments”, “assignments”, “registration”), we worked to improve, extend, and evaluate a classifier that can be used to group and triage incoming support tickets.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596302360/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 16,
    title: "Department of Defense - NC National Guard Website",
    description:
      "The NC National Guard's public-facing website was created years ago. The goal of this project was to design and implement a modernized version of the NC National Guard's public website.",
    abstract:
      "Due to funding and limited skillsets, the NC National Guard's public-facing website has not been modernized in years. The goal was to design and implement a new version of the website, but still use SharePoint 2013. We created a new design for the website using Invision, implemented it using the React framework, and deployed it using SharePoint Online. For the last few weeks, we've been working on deployment using SharePoint 2013 on a Windows virtual machine.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/c_scale,w_613/v1596559642/phoenix/logo_-_Isabella_Wang_1_beyzxb.png",
  },
  {
    uid: 17,
    title: "DoD- 4th Medical Group Mobile App Development",
    description:
      "The team was tasked to modernize the 4th Medical Group Thomas Koritz Clinic mobile app to improve the user experience.",
    abstract:
      "In order to create a more functional and pleasant mobile app, the team was inspired by the simplistic and intuitive user interfaces of other hospital apps. The team implemented some of these design features and also integrated the new app to other parts of the clinic's ecosystem including the clinic's online portals, news feed, and directory. The result is a more meaningful avenue of communication and information between patients and healthcare workers.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129086/phoenix/download_-_Joe_choo_pa85jn.jpg",
  },
  {
    uid: 18,
    title: "Eagle - ISEEU",
    description:
      "Development of a scheduling webapp used to coordinate radiation testing for the Missile Defense Agency under the US Department of Defense.",
    abstract:
      "Radiation testing is a necessary step in validating the stability of electrical components for eventual deployment in space, with applications in fields such as avionics, high energy physics, and the automotive industry. Current radiation testing methods and facilities require long travel and setup times, expensive service fees, and reservations up to a year in advance partly due to outdated and uncoordinated scheduling tools. As one of the largest coordinators of radiation testing in the United States, the Missile Defense Agency aims to integrate the scheduling process between the four US testing facilities through the development a user-friendly and responsive webapp, potentially reducing service fees, unused testing hours, and scheduling errors. The webapp, termed Integrated Single Event Effects Utility (ISEEU), was developed using React and Python.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129193/phoenix/ISEEULogo_-_Jiwoo_Song_plyff2.png",
  },
  {
    uid: 19,
    title: "Epochal Technologies",
    description:
      "A framework for stock price prediction is realized and is able to predict closing prices of several stocks on a daily basis.",
    abstract:
      "Stock price prediction has long been a hot-spot area. A number of frameworks have been raised, especially those in the field of machine learning. Besides, twitter data are found effective in reflecting people's sentiment on the stock market. This has been incorporated in the prediction model and reasonable results are achieved.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559228/phoenix/Epochal-Logo_10.11_-_Bo_Liu_fw54vp.png",
  },
  {
    uid: 20,
    title: "Extracting Insights from Free-Text Course Feedback",
    description:
      "This project aims to produce automated tagging and insight extraction from free-text reviews to provide useful insights for each course.",
    abstract:
      "Learners have the opportunity to provide ratings and reviews for courses in which they have enrolled. Although these reviews are publicly available, there are limited options for instructors or learners to quickly glean insights from them. By defining useful aspects that learners would want to filter for and tag reviews by for each course, we are able to determine the polarity of user opinion at a more granular level to help both learners and instructors gain useful insights.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596302360/phoenix/Screen_Shot_2020-07-30_at_12.07.52_AM_-_Yixin_Wen_lvfozu.png",
  },
  {
    uid: 21,
    title: "EzTrain",
    description:
      "EZTrain offers an intuitive software platform that assists section chiefs and traditional reservists by eliminating wasted time.",
    abstract:
      "With an Air Force endorsement, EZTrain organizes, prioritizes, and tracks requirements for squadron training. EZTrain facilitates the planning process of these training events, relieving the pain of manually preparing in the current system.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129122/phoenix/Logo_-_Xie_Jingyi_xuujpm.png",
  },
  {
    uid: 22,
    title: "FatTail",
    description:
      "FatTail is focused on redefining the business of advertising by allowing ad publishers to increase monetization, control, and scale. For FatTail, we completed two machine learning projects: one which aimed to develop a pricing model for publishers and another that created a refined taxonomy for news articles.",
    abstract:
      "Unlike the world of finance, where price discovery is standard and prices are driven by supply and demand, the forward market for advertising is still based on archaic practices like “rate cards” (e.g. list price) and indiscriminate pricing. The first project aimed at providing a more flexible pricing approach: using historical data from actual ad sales teams, we built a solution that used ML to determine which attributes about the buyer, the website, placement, etc. had an impact (positive or negative) on price. For our second project, we focused on contextual ad buying: \ncontextual (topical) ad buying is returning to favor due to the increased scrutiny around consumer privacy and tracking. Unlike audience targeting, which relies on identifiers to locate a person, contextual targeting uses the topics of a web page as the mechanism to group and target consumers. We built a tool that can crawl web pages for a given set of root domains and classify each page into a target taxonomy. The taxonomy values will be used to inform “key values” that can eventually be communicated to the publisher’s ad server (which is needed to sell and deliver ads for any topic).",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129262/phoenix/Screen_Shot_2020-07-29_at_8.18.17_PM_-_Shreya_Shubhangi_zybjgx.png",
  },
  {
    uid: 23,
    title: "Finance Machine Learning",
    description:
      "FML is a web application that algorithmically manages how to best invest a user's assets by applying machine learning to market trading.",
    abstract:
      "Similar to an actual trader, FML's algorithm looks over a variety of technical indicators (e.g. Moving Average Convergence Divergence (MACD)) to determine if a security needs to be purchased or sold. Each technical indicator is a \"weak learner\" ML model (most are RBF Kernel SVMs) trained on ~200 days of stock data that outputs a 0/1 corresponding to a buy/sell signal. From there, the FML algorithm checks the outputs from all the individual models and votes on whether to buy, sell, or hold the security. The model is able to achieve high predictive power and based on some backtests actually beat human traders thanks to this Bagging and Boosting approach. Once FML gains brokerage status, it'll allow for users to not only start trading, but also even create their own ML trading models.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129604/phoenix/FML_-_Tommy_Hessel_ffgfr1.png",
  },
  {
    uid: 24,
    title: "Hey Mirza",
    description:
      "Mirza is a startup creating an educational tool for future parents to understand and budget for the costs that often prevent parents from returning to the workforce and participating fully postpartum. Their long-term vision is to change the structures that shape parental leave, childcare, eldercare, and other policies that exert control over women’s lives.",
    abstract:
      "This summer the Phoenix project engineers primarily worked on back-end development to calculate the salary and income loss projections of parents. Additionally, they implemented socioeconomic research to build out a decision tree in collaboration with the co-founders and CTO. Finally, they collaborated with UX developers to guide MVP development and the integration of frontend and backend.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559196/phoenix/mirza-logo_-_Ana_Martinez_p5z9rw.png",
  },
  {
    uid: 25,
    title: "Hypershot",
    description:
      "Pager provides a platform for group chats to be organized by topics. This summer, we built a core feature called Hypershot which uses optical character recognition and web scraping to extract source URL's from screenshots shared by users.",
    abstract:
      "Hypershot was envisioned as a way to unlock the potential of screenshots as a medium for sharing content. Our surveys have indicated that many users prefer to share screenshots in lieu of copying links directly from content sources because of convenience and the inconsistency of link previews. Hypershot would allow users to directly interact with the original source of a screenshot with a simple click.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129653/phoenix/Pager_Logo_1_-_Vincent_Peng_ljmjfw.png",
  },
  {
    uid: 26,
    title: "IBM Hyper Protect Accelerator",
    description:
      "IBM Hyper Protect Accelerator is a new tech startup program designed to build and scale the next generation with solutions engineered to keep their sensitive data highly secure. We the interns have been working with a series of these tech startups ranging across the fintech and healthtech spheres.",
    abstract:
      "We have been working across four international startups:\n- Home Lending Pal is an AI-powered mortgage advisor that allows potential borrowers to see mortgage approval odds without applying for a mortgage\n- myAllergy helps consumers regain their freedom from food allergies while reducing risk exposure for businesses\n- Privakey streamlines the way people authenticate their identities & authorize anything by delivering secure, interactive content\n - Wayapay enables people to send money securely, efficiently, and affordably from any country in the world to and within sub-Saharan Africa",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596128978/phoenix/Screen_Shot_2020-07-29_at_5.01.49_PM_-_Jacob_Rubin_khbggx.png",
  },
  {
    uid: 27,
    title: "iNirv",
    description:
      "The iNirv team worked on improving the iOS application that enables the management of iNirv’s Smart Knob device. This included developing a suite of Unit Tests/UI Tests for various features of the application, restructuring code, and debugging the existing code within the project.",
    abstract:
      "iNirv is an IoT startup building smart devices that bring safety and automation to the kitchen. iNirv is working to develop a connected device that turns any gas or electric stove into a smart one by the simple replacement of existing stove knobs with one of iNirv’s smart knobs. The smart knobs are wifi-connected and have built-in motors, so they can automatically adjust burner temperature at the necessary time. During the Phoenix Project, the iNirv team worked on improving the iOS application that enables the management of iNirv’s Smart Knob device. This included developing a suite of Unit Tests/UI Tests for various features of the application, restructuring code, and debugging the existing code within the project.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559474/phoenix/Inirv_Logo_Official-01-1024x568_-_Amrita_Lakhanpal_en9upp.png",
  },
  {
    uid: 28,
    title: "Invoice Data Ingest Pipeline - ARCO/Murray",
    description:
      "To digitize company invoices and store the data, and provide a way to analyze aggregate data.",
    abstract:
      "Currently, thousands of invoices are being stored as PDFs without an automated way to digitize and store the information. ARCO/Murray wants to be able to view this data via web application in a simpler way and to sort it in order to detect different outliers and trends. We utilized several online services including AWS, Heroku, and Microsoft Sharepoint.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129360/phoenix/arcomurray_-_Jeffrey_Liu_dhkrqo.jpg",
  },
  {
    uid: 29,
    title: "JUSTFAIR",
    description:
      "Working with the nonprofit organization QSIDE, we have compiled a data set including around 600,000 federal level judicial cases from across the internet for data analysis.",
    abstract:
      "In the Unites States, the public has a constitutional right to access criminal trial proceedings. In practice, it can be difficult or impossible for the public to exercise this right. We present JUSTFAIR: Judicial System Transparency through Federal Archive Inferred Records, a database of criminal sentencing decisions made in federal district courts. We have compiled this data set from public sources including the United States Sentencing Commission, the Federal Judicial Center, the Public Access to Court Electronic Records system, and Wikipedia. With nearly 600,000 records from the years 2001 - 2018, JUSTFAIR is the first large scale, free, public database that links information about defendants and their demographic characteristics with information about their federal crimes, their sentences, and, crucially, the identity of the sentencing judge.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559088/phoenix/qside_-_Adam_Hufstetler_su0w4e.png",
  },
  {
    uid: 30,
    title: "Konektid",
    description:
      "We are exploring how AI/ML can reduce overhead costs for humanitarian aid organizations, primarily in their business development processes, so the organizations can direct more funding to delivering sustainable impact in the communities where they work.",
    abstract:
      "Konektid is building a new platform AidKonekt, which will automate much of the monitoring process involved in this industry and will ease this business development burden by condensing, centralizing, and making more accessible, key USAID procurement data from numerous government databases. AidKonekt will show changes to procurement data in real time paired with historical data on awards to expedite the work of Business Development teams and allow small businesses to compete in the market. As interns, we have been aiding in the automation process for AidKonekt. We are exploring how AI/ML can reduce overhead costs for humanitarian aid organizations, primarily in their business development processes, so the organizations can direct more funding to delivering sustainable impact in the communities where they work.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129690/phoenix/konektid_logo_-_Doherty_Guirand_gqyv0b.png",
  },
  {
    uid: 31,
    title: "Levels.fyi",
    description:
      "The main goal of this project is to build an internal website that helps the Offer letter reviewing process. The main functions include pdf extraction, ML on fraud data detection and full-stack software engineering.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129027/phoenix/Screen_Shot_2020-07-29_at_6.25.37_PM_-_Y_F_trxmzv.png",
  },
  {
    uid: 32,
    title: "Mobius Materials",
    description:
      "In order to assist with Mobius' goal of recycling electronic components, the intern developed a part database building web app and built out back-end functionality for the website and online store.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559315/phoenix/android-chrome-512x512_-_Will_Inigo_exydxb.png",
  },
  {
    uid: 33,
    title: "myDrugCosts",
    description:
      "myDrugCosts is a software platform that helps self-insured companies and their employees reduce their prescription drug costs. \nOur team built two dashboards and an automated savings reporting system to help the company communicate its value to customers, identify potential low-cost drugs, and identify savings trends.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129588/phoenix/LOGO_-_Joseph_Krinke_gz7p8h.jpg",
  },
  {
    uid: 34,
    title: "Nama Water",
    description:
      "A company dedicated to creating a sustainable alternative to single use plastic items.",
    abstract:
      "50% of the 300 million tonnes produced is attributed to one-time use plastic products – namely, plastic water bottles. Nama Water’s mission is to create planet-first, consumer products that are safe and  sustainable for use without compromising on convenience or quality for our customers. Although we are relatively new and still in the planning stage, it doesn’t mean that we don’t have big plans!",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559179/phoenix/Screen_Shot_2020-07-30_at_11-removebg-preview_ueop53.png",
  },
  {
    uid: 35,
    title: "OfficePro",
    description:
      "OfficePro sought to expand their suite of training and licensing services for their clients with the addition of a chatbot to help with user queries related to the Microsoft 365 applications. The Phoenix Project team built a chatbot using Microsoft’s QnA Maker Service and Microsoft Azure, along with a knowledge base that includes a wealth of content encompassing the Microsoft Word, Excel, and Powerpoint applications.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129340/phoenix/office-pro-logo_-_William_Hayward_fcjgm5.png",
  },
  {
    uid: 36,
    title: "Peer Medical",
    description:
      "Peer Medical is a patient empowerment tool to help lung cancer patients compare verified anonymous medical records so that they can optimize their treatment plans. We were tasked with building an NLP web application that recognizes relevant information from anecdotal treatment stories in order to build new patient profiles.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129246/phoenix/Peer_Medical_logo_-_Caleb_Woo_lgzgtz.jpg",
  },
  {
    uid: 37,
    title: "PolarisQB",
    description: "A dashboard web application developed in Django and Vue.js.",
    abstract:
      "•\tCreated a dashboard web application from scratch, based on Django and Vue.js, as a full-stack developer.\n•\tDynamically addressed user-uploaded files to different storage ends with an intermediate data access layer.\n•\tContributed in an energetic start-up environment with daily stand-up, sprint meetings and Agile development.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129393/phoenix/polarisqb_-_Yuanrui_Zhang_zgkl0t.png",
  },
  {
    uid: 38,
    title: "Polarization Lab",
    description:
      "A web app evaluates polarization scores based on Twitter handle",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129379/phoenix/lab_logo_-_charlie_ksncy1.png",
  },
  {
    uid: 39,
    title: "Predicting battery cycle life using data-driven methods",
    description:
      "Working with Cuberg, a company developing next-generation battery technologies and their partner Aionics, whose platform supports AI-driven materials science research, we developed models for the prediction of battery cycle life using early cycle data.",
    abstract:
      "Lithium ion batteries are widely used for consumer applications, and improving their energy density, lifespan, and safety is an active area of research. Testing new battery materials and manufacturing methods is difficult however, due to the long lifespans of lithium batteries.\nWorking with Cuberg, a company developing next-generation battery technologies and their partner Aionics, whose platform supports AI-driven materials science research, regularized linear models were developed that can accurately predict battery life using early cycle data. These models allow for the classification of battery cells based on predicted performance before they reach consumers, improving cell reliability and guiding future development.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129445/phoenix/cuberg2_-_Yoav_Kargon_u5ochr.png",
  },
  {
    uid: 40,
    title: "Queen City Fintech (Fintech Finches)",
    description:
      "QC Fintech provides fintech startups access to world-class mentors, capital and leading financial services organizations, all in the heart of the global banking hub at Charlotte, North Carolina.",
    abstract:
      "In order to extend both regional and global impact, Queen City Fintech has developed two web-based initiatives offering the ability for startups, investors, and accelerators to connect, grow, and learn together. The first initiative is a Global Fintech Platform that provides international partners with the ability to access resources, attend meetings, promote events, and discover investment opportunities. The second initiative is the Carolinas Healthcare Innovation platform that provides regional partners throughout the Carolinas with the ability to  establish relationships with accelerators, medical institutions, and startups by combining professional expertise and strategy, physical resources, capital, and partnerships. Throughout the summer, we have implemented web-based prototypes to inform the design and implementation for both of these initiatives.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/c_scale,w_536/v1596559111/phoenix/qcf_-_Connor_Wells_hlsiog.png",
  },
  {
    uid: 41,
    title: "Rakkkasans (101st Airborne Division DoD)",
    description:
      "We are working with members of the 101st Airborne Division to build a mobile application geared towards consolidating relevant training/administrative information in an easy to use mobile interface.",
    abstract:
      "We have worked with our correspondents in the 101st Airborne Division to design a user interface and then build out those designs using React Native. The app includes a news section where soldiers can find relevant news articles, information about their commanding officers and the division itself, as well as more administrative information about individual battalions and their histories (and many other features, including a game). All of this information has been compiled from multiple bodies within the DoD to reduce the hassle of finding information which has been traditionally stored in cumbersome, physical formats. All of the decisions have worked to build an app that is both easy to update (in house) and can change according to new necessary features which may be desired in the future.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129041/phoenix/200px-US_101st_Airborne_Division_patch.svg_-_Matt_Dillabough_w0r3ap.png",
  },
  {
    uid: 42,
    title: "Service Robotics & Technologies",
    description:
      "Backend development for software solutions to integrate 3rd party hardware platforms to augment human-driven tasks as performed in the smart home, custodial, hospitality, and food/beverage industries.",
    abstract:
      "In our time with SRT Labs we have been able to develop new API endpoints using node.js and express.js to implement certain functionalities with devices such as device cards and an analytics module. In addition, we were able to redesign the caching process by building a redis application to achieve faster document access. We then moved towards a different technological sphere by integrating new IOT devices through Python wrappers in order to transmit data to our backend server. Throughout this internship, we have been able to work on fascinating projects that allowed us to dive deep into our interests and gain many skills that we will be able to use for the rest of our careers.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129713/phoenix/0_-_Feng_Hu_wqgchk.jpg",
  },
  {
    uid: 43,
    title: "Start-IQ",
    description:
      "Improved Documentation for Users and future Software Engineers. Testing of Slack Bot and creation of membership tracking for Student Founders Program.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596558952/phoenix/Screenshot_2020-07-30_at_1.20.10_PM_-_Muazzam_Khan_emzomr.png",
  },
  {
    uid: 44,
    title: "SuperNova",
    description:
      "Determining predictive power of advertisement features using an ML model. Pulling structure and unstructured data from websites to automatically update a living database.",
    abstract: "",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559042/phoenix/Screen_Shot_2020-08-04_at_9-removebg-preview_m6nwvq.png",
  },
  {
    uid: 45,
    title:
      "Synthesizing Taxi Trajectories Using Generative Adversarial Networks",
    description:
      "This project aims at exploring the possibility of applying generative adversarial networks to synthesize realistic taxi trajectory data for data privacy protection.",
    abstract:
      "In today’s environment with exploding information, we can be identified more easily than we expected through multiple sources where our information is collected anonymously. With the advancement of mobile devices with GPS, better internet accessibility, and increasing demand for location-dependent services such as finding nearest restaurants or the shortest route to a destination, geolocation data, more specifically trajectory data, becomes valuable for marketing and academic research and is collected more frequently. We've showed a succesfull application of GANs to generate synthetic taxi trajectories. However, GANs are still evolving within this area of application, and they are massively impacted by the preprocessing chosen, leading to some drawbacks and issues to be solved, such as mode collapse, which suggests further research in this area.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129461/phoenix/Logo_YD_600x600_-_Shiyi_Jiang_weu6pz.png",
  },
  {
    uid: 46,
    title: "TechEd",
    description:
      "Building a recommender system for an online learning platform's chapter tests.",
    abstract:
      'Upon the student successfully answering a question, our recommender system takes in consideration of the question\'s difficulty (reflected by the success rate of students attempting the question) and similarity (calculated by running textual analysis between two questions) and recommends the next "most similar question".',
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559457/phoenix/1596297149_1__-_Allen_Zhao-removebg-preview_rrtk5d.png",
  },
  {
    uid: 47,
    title: "Woto",
    description:
      'Woto, short for "working together", is a student-founded app that allows professors to manage virtual office hours for their courses.',
    abstract:
      "Our founding team consistently experienced 1-2 hour-long wait times for office hours in our CS courses at Duke. When these wait times increases to 2-4 hours during virtual courses this past Spring, we knew we needed to design a solution that works for students, teaching assistants, and professors.\n\nWe offer a platform for hosting virtual (and later in-person) office hours sessions, a comprehensive dashboard for professors to understand the data analytics behind their courses, and a room for students to work together on problems with their peers.\n\nWe began user research and designing wireframes in May and have since developed a production React/Node/MongoDB app that will be in Duke CS courses in the fall.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596129621/phoenix/logo-square_-_Jaidha_Rosenblatt_ukl0hj.png",
  },
  {
    uid: 48,
    title: "Zogo Finance Leaderboard",
    description:
      "The goal of this project was the optimization of local, regional, and global leaderboards for Zogo Finance, a financial literacy education app. As a result, the was measured in loading time based on various test user databases.",
    abstract:
      "Before beginning work on the improvement of the leaderboard, it took approximately 30 seconds to load the leaderboards for a user with around 100,000 users in the test database. Using a combination of database queries through Sequelize, trimmed down models, and more efficient functions to handle the data, the loading time has improved by over 5300%. This translates to a new load time of around 5 seconds for a user with around 900,000 users in the test database. This time continues to improve as new methods for querying the database and caching data are attempted.",
    imageLink:
      "https://res.cloudinary.com/dwgqvt5ng/image/upload/v1596559335/phoenix/zogo-logo-blue-emblem_1_-_Brandon_Lindsey_zzewbu.png",
  },
];

module.exports = projects;
