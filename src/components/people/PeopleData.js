import { getMembers } from "../../api/api";

export const getMemberData = async () => {
  const members = await getMembers();

  let CRM = [];
  let DS = [];
  let PS = [];

  members.forEach(member => {
    switch (member.team) {
      case "CRM":
        CRM.push(member);
        break;
      case "DS":
        DS.push(member);
        break;
      case "PS":
        PS.push(member);
        break;
    }
  });

  return { CRM, DS, PS };
};

// DS = data science
// CRM = client management
// PS = implementation

export const CRM = [
  {
    name: "Mary	Gooneratne",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "CRM",
    email: "mary.gooneratne@duke.edu",
    linkedin: "https://www.linkedin.com/in/marygooneratne/",
    img: "Gooneratne.jpg",
    github: "https://github.com/marygooneratne/"
  },
  {
    name: "Ben	Levy",
    school: "Fuqua School of Business",
    study: "QM",
    team: "CRM",
    email: "ben.levy@duke.edu",
    linkedin: "https://www.linkedin.com/in/ben-levy1/",
    img: "Levy.jpg"
  },
  {
    name: "Luke	Truitt",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "CRM",
    email: "luke.truitt@duke.edu",
    linkedin: "https://www.linkedin.com/in/luke-truitt/",
    github: "https://github.com/luke-truitt/"
  },
  {
    name: "Jaidha	Rosenblatt",
    school: "Undergraduate",
    study: "Computer Science",
    email: "jrr59@duke.edu",
    img: ""
  }
];

export const DS = [
  {
    name: "Tima	Alqabandi",
    school: "Ph.D.",
    study: "Sociology",
    team: "VR Sickness",
    email: "fa83@duke.edu",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Alqabandi.jpg"
  },
  {
    name: "Alina Barnett",
    school: "Ph.D.",
    study: "Computer Science",
    team: "VR Sickness",
    email: "alina.barnett@duke.edu",
    linkedin: "https://www.linkedin.com/in/alina-jade-barnett-ab703582/",
    img: "Barnett.jpg"
  },
  {
    name: "Suchir Bhatt",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Restaurant",
    email: "suchir.bhatt@duke.edu",
    img: ""
  },
  {
    name: "Olivier Binette",
    school: "Ph.D.",
    study: "Statistics",
    team: "Visualization",
    email: "olivier.binette@duke.edu",
    linkedin: "https://www.linkedin.com/in/olivier-binette/",
    img: "Binette.jpg"
  },
  {
    name: "Jia Rong	Chua",
    school: "Masters",
    study: "Economics",
    team: "Fidget",
    email: "jiarong.chua@duke.edu",
    linkedin: "https://www.linkedin.com/in/jiarongchua/",
    img: "Chua.jpg"
  },
  {
    name: "Ram Gallopudy",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Human Connectome",
    email: "ram.gallopudy@duke.edu",
    linkedin: "https://www.linkedin.com/in/ram-gollapudy-08a334aa/",
    img: ""
  },
  {
    name: "Niko Hobart",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Restaurant",
    email: "niko.hobart@duke.edu",
    linkedin: "https://www.linkedin.com/in/niko-hobart-562826195/",
    img: ""
  },

  {
    name: "Jaiveer Katariya",
    school: "Undergraduate",
    study: "Computer Science, Statistics",
    team: "Fidget",
    email: "jaiveer.katariya@duke.edu",
    linkedin: "https://www.linkedin.com/in/jaiveer-katariya-900865166/",
    img: "Katariya.jpg",
    github: "https://github.com/jaiveerk/"
  },
  {
    name: "Phoebe	Klett",
    school: "Undergraduate",
    study: "Mathematics",
    team: "Fidget",
    email: "phoebe.klett@duke.edu",
    linkedin: "https://www.linkedin.com/in/phoebe-klett-644009134/",
    img: "Klett.jpg"
  },
  {
    name: "Varun Nair",
    school: "Undergraduate",
    study: "CS, Math",
    team: "Human Connectome",
    email: "varun.nair.1@duke.edu",
    linkedin: "https://www.linkedin.com/in/varunnair18/",
    img: "Nair.jpg",
    github: "https://github.com/varunnair18/"
  },
  {
    name: "Daniel	Tao",
    school: "Undergraduate",
    study: "Computer Science",
    team: "VR Sickness",
    email: "chaofan.tao@duke.edu",
    linkedin: "https://www.linkedin.com/in/chaofan-daniel-tao/",
    github: "https://github.com/danieltao/",
    img: "Tao.jpg"
  },
  {
    name: "Anna	Yanchencko",
    school: "Ph.D.",
    study: "Statistics",
    team: "Timeseries",
    email: "anna.yanchenko@duke.edu",
    linkedin: "https://www.linkedin.com/in/anna-yanchenko/",
    github: "https://github.com/aky4wn/",
    img: "Yanchencko.jpg"
  },
  {
    name: "Hang	Yang",
    school: "Post-graduate",
    study: "Mathematics",
    team: "Hman Connectome",
    email: "hang.yang@duke.edu",
    linkedin: "https://www.linkedin.com/in/hang-yang/",
    img: "Yang.jpg"
  },
  {
    name: "Raj Mehta",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    email: "raj.mehta918@duke.edu",
    img: ""
  },
  {
    name: "Kush Gulati",
    school: "Undergraduate",
    study: "Computer Science",
    email: "kush.gulati@duke.edu",
    img: ""
  },
  {
    name: "Jason Lee",
    school: "Undergraduate",
    study: "Computer Science",
    email: "choonghwan.lee@duke.edu",
    img: ""
  },
  {
    name: "Vishal Dubey",
    school: "Undergraduate",
    study: "Computer Science",
    email: "vishal.dubey@duke.edu",
    img: ""
  },
  {
    name: "Muthu Arivoli",
    school: "Undergraduate",
    study: "Electrical and  Computer Engineering",
    email: "ma381@duke.edu",
    img: ""
  },
  {
    name: "Angikar Gosel",
    school: "Undergraduate",
    study: "Computer Science",
    email: "angikar.ghosal@duke.edu",
    img: ""
  },
  {
    name: "Geoff Gaugler",
    school: "Undergraduate",
    study: "Computer Science",
    email: "geoffrey.gaugler@duke.edu",
    img: ""
  },
  {
    name: "Aman Ibrahim",
    school: "Undergraduate",
    study: "Computer Science",
    email: "aman.ibrahim@duke.edu",
    img: ""
  },
  {
    name: "Ziyi	Wang",
    school: "Undergraduate",
    study: "Computer Science",
    email: "zw119@duke.edu",
    img: ""
  },
  {
    name: "Emily 	Mittleman",
    school: "Undergraduate",
    study: "Computer Science",
    email: "emily.mittleman@duke.edu",
    img: ""
  },
  {
    name: "Aneesh	Gupta",
    school: "Undergraduate",
    study: "Statistics",
    email: "aneesh.gupta@duke.edu",
    img: ""
  },
  {
    name: "David	Chester",
    school: "Post-graduate",
    study: "Statistics",
    email: "david.chester@duke.edu",
    img: ""
  },
  {
    name: "Jack	Moody",
    school: "Undergraduate",
    study: "Economics",
    email: "jack.moody@live.unc.edu",
    img: ""
  },
  {
    name: "Himanshu Jain",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    email: "himanshu.jain@duke.edu",
    img: ""
  }
];

export const PS = [
  {
    name: "Yasa	Baig",
    school: "Undergraduate",
    study: "Physics, Computer Science",
    team: "Software",
    email: "yasa.baig@duke.edu",
    linkedin: "https://www.linkedin.com/in/yasab/",
    img: "Baig.jpg",
    github: "https://github.com/yasab27/"
  },
  {
    name: "Anabella Buckvar",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "anabella.buckvar@duke.edu",
    linkedin: "https://www.linkedin.com/in/anabella-buckvar-818614162/",
    img: "",
    github: "https://github.com/anabellab/"
  },
  {
    name: "Madeline Cuozzo",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "madeline.cuozzo@duke.edu",
    linkedin: "https://www.linkedin.com/in/madeline-cuozzo/",
    img: "Cuozzo.jpg",
    github: "https://github.com/mcuozzo19/"
  },
  {
    name: "Wyatt Focht",
    school: "Undergraduate",
    study: "Computer Science, Electrical and Computer Engineering",
    team: "Software",
    email: "wyatt.focht@duke.edu",
    linkedin: "https://www.linkedin.com/in/wyattfocht/",
    img: "Focht.jpg",
    github: "https://github.com/wyattgf/"
  },

  {
    name: "Russell Llave",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "russell.llave@duke.edu",
    linkedin: "https://www.linkedin.com/in/russell-llave-999236102/",
    img: "",
    github: "https://github.com/russellave/"
  },
  {
    name: "Raj Mehta",
    school: "Undergraduate",
    study: "Neuroscience, Computer Science",
    team: "Hardware",
    email: "rm359@duke.edu",
    linkedin: "https://www.linkedin.com/in/rmehta010/",
    img: "",
    github: "https://github.com/rmehta010/"
  },
  {
    name: "Ryan	Middlemiss",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "Software",
    email: "ryan.middlemiss@duke.edu",
    linkedin: "https://www.linkedin.com/in/ryan-middlemiss-732541192/",
    img: "Middlemiss.png",
    github: "https://github.com/ryanmiddlemiss/"
  },
  {
    name: "Nicole	Moiseyev",
    school: "Undergraduate",
    study: "Neuroscience, Computer Science",
    team: "Software",
    email: "nicole.moiseyev@duke.edu",
    linkedin: "https://www.linkedin.com/in/nicole-m-184123b4/",
    img: "Moiseyev.jpg",
    github: "https://github.com/nicolemoiseyev/"
  },
  {
    name: "Luiza Wolf",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Hardware",
    email: "luiza.wolf@duke.edu",
    linkedin: "https://www.linkedin.com/in/luiza-wolf/",
    img: "",
    github: "https://github.com/luizaawwolf/"
  },
  {
    name: "Cady Zhou",
    school: "Undergraduate",
    study: "Computer Science, Electrical and Computer Engineering",
    team: "Hardware",
    email: "cady.zhou@duke.edu",
    linkedin: "https://www.linkedin.com/in/cadyzhou/",
    img: "Zhou.jpg",
    github: "https://github.com/candyzq/"
  },
  {
    name: "Harish Yerra",
    school: "Undergraduate",
    study: "Computer Science",
    email: "harish.yerra@duke.edu",
    img: ""
  }
];

export default { CRM, DS, PS };
