// create an array with nodes
// id needs to be = to the node's index in the array
let nodes = [
  {
    id: 0,
    course: 'Math 212/222',
    name: 'MULTIVARIABLE CALCULUS',
    description:
      "Partial differentiation, multiple integrals, and topics in differential and integral vector calculus, including Green's theorem, the divergence theorem, and Stokes's theorem. Not open to students who have taken Mathematics 202 or 222. Prerequisite: Mathematics 22, 112L, 122, or 122L.",
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Many',
    prereqs__1: '',
    skills_to: '',
    skills_from: 0,
  },
  {
    id: 1,
    course: 'Math 216/218',
    name: 'LINEAR ALGEBRA & DIFF EQUATION',
    description:
      'Systems of linear equations, matrix operations, vector spaces, linear transformations, orthogonality, determinants, eigenvalues and eigenvectors, diagonalization, linear differential equations, systems of differential equations with constant coefficients, applications, computer simulations. Intended primarily for engineering students. Prospective math majors should take Math 221 instead. Prerequisite: Mathematics 202, 212 or 222. Not open to students who have had Mathematics 218 or 221 or 356',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Many',
    prereqs__1: '',
    skills_to: '',
    skills_from: 1,
  },
  {
    id: 2,
    course: 'Math 221',
    name: 'LINEAR ALGEBRA & APPLICA',
    description:
      'Systems of linear equations and elementary row operations, Euclidean n-space and subspaces, linear transformations and matrix representations, Gram-Schmidt orthogonalization process, determinants, eigenvectors and eigenvalues; applications. Introduction to proofs. A gateway to more advanced math courses. Not open to students who have taken Mathematics 216 or 218. Prerequisite: Mathematics 122, 112L or 122L.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Many',
    prereqs__1: '',
    skills_to: '',
    skills_from: 1,
  },
  {
    id: 3,
    course: 'Math 230',
    name: 'PROBABILITY',
    description:
      'Probability models, random variables with discrete and continuous distributions. Independence, joint distributions, conditional distributions. Expectations, functions of random variables, central limit theorem. Prerequisite: Mathematics 22, 112L, 122, 122L, 202, 212, 222, OR Graduate student; Not open to students who have credit for Mathematics 340.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Many',
    prereqs__1: 0,
    skills_to: '',
    skills_from: 4,
  },
  {
    id: 4,
    course: 'Math 465',
    name: 'INTRO HIGH DIM DATA ANALYSIS',
    description:
      'Geometry of high dimensional data sets. Linear dimension reduction, principal component analysis, kernel methods. Nonlinear dimension reduction, manifold models. Graphs. Random walks on graphs, diffusions, page rank. Clustering, classification and regression in high-dimensions. Sparsity. Computational aspects, randomized algorithms. Prerequisite: Mathematics 218 or 221.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Paul Bendich',
    prereqs__1: '(1|2)',
    skills_to: 1,
    skills_from: '2,3,8,9',
  },
  {
    id: 5,
    course: 'Compsci 671/Stats 671/ECE 590',
    name: 'MACHINE LEARNING',
    description:
      'This is an introductory overview course at an advanced level. Covers standard techniques, such as the perceptron algorithm, decision trees, random forests, boosting, support vector machines and reproducing kernel Hilbert spaces, regression, K-means, Gaussian mixture models and EM, neural networks, and multi-armed bandits. Covers introductory statistical learning theory. Recommended prerequisite: linear algebra, probability, analysis or equivalent.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Cynthia Rudin',
    prereqs__1: '',
    skills_to: '0,1,2,3,5,7,8,9,11,12',
    skills_from: '17,18,19,20,21,22',
  },
  {
    id: 6,
    course: 'ECE 580',
    name: 'INTRO TO MACHINE LEARNING',
    description:
      'Introduction to core concepts in machine learning and statistical pattern recognition, with a focus on discriminative and generative classifiers (nearest-neighbors, Bayes, logistic regression, linear discriminant, support vector machine, and relevance vector machine). Dimensionality reduction and feature selection. Classifier performance evaluation, bias-variance tradeoff, and cross-validation. Prerequisite: (Mathematics 216, Mathematics 218, Mathematics 221, or ECE 586) and (Computer Science 201 or ECE 551D) and ECE 581. Not open to students who have taken Computer Science 671D.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Tantum',
    prereqs__1: '',
    skills_to: '0,1,4,7,10',
    skills_from: '19,20,21,22',
  },
  {
    id: 7,
    course: 'Math 340',
    name: 'ADVANCED INTRO PROBABILITY',
    description:
      "Advanced introduction to basic, non-measure theoretic probability covering topics in more depth and with more rigor than MATH 230. Topics include random variables with discrete and continuous distributions. Independence, joint distributions, conditional distributions, generating functions, Bayes' formula, and Markov chains. Rigorous arguments are presented for the law of large numbers, central limit theorem, and Poisson limit theorems.",
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'James H Nolen',
    prereqs__1: 0,
    skills_to: 1,
    skills_from: 5,
  },
  {
    id: 8,
    course: 'Math 466/766',
    name: 'MATH OF MACHINE LEARNING',
    description:
      'The course will explore mathematics underlying the practice and theory of various machine learning concepts and algorithms. Kernel methods, deep learning, reinforcement learning, generalization error, stochastic gradient descent, and dimension reduction or data embeddings will be introduced. The interplay between the mathematics and real applications will be a component of the course. Students can take both this course and Mathematics 465 for credit. Recommended prerequisite: Mathematics 230/340 and 218/216/221 and some familiarity with programing, preferably Python.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Yitzchak Elchanan Solomon',
    prereqs__1: '(3|7),(1|2)',
    skills_to: '0,1,2,3,12,13,14',
    skills_from: '17,19,20,22',
  },
  {
    id: 9,
    course: 'Math 541',
    name: 'APPLIED STOCHASTIC PROC',
    description:
      'An introduction to stochastic processes without measure theory. Topics selected from: Markov chains in discrete and continuous time, queuing theory, branching processes, martingales, Brownian motion, stochastic calculus. Prerequisite: Mathematics 230 or Mathematics 340 or equivalent.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Tau Shean Lim',
    prereqs__1: '(3|7)',
    skills_to: 5,
    skills_from: 24,
  },
  {
    id: 10,
    course: 'Math 690',
    name: 'TIME SERIES AND DYNAMIC SYSTEM',
    description:
      'Probability tools and theory, geared towards topics of current research interest. Possible additional prerequisites based on course content in a particular semester.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Sayan Mukherjee',
    prereqs__1: '(3|7)',
    skills_to: 5,
    skills_from: 24,
  },
  {
    id: 11,
    course: 'Compsci 201',
    name: 'DATA STRUCTURES AND ALGORITHMS',
    description:
      'Analysis, use, and design of data structures and algorithms using an object-oriented language like Java to solve computational problems. Emphasis on abstraction including interfaces and abstract data types for lists, trees, sets, tables/maps, and graphs. Implementation and evaluation of programming techniques including recursion. Intuitive and rigorous analysis of algorithms.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Astrachan, Forbes, or Rodger',
    prereqs__1: '',
    skills_to: 5,
    skills_from: 10,
  },
  {
    id: 12,
    course: 'Compsci 260',
    name: 'INTRO COMPUTATIONAL GENOMICS',
    description:
      'A computational perspective on the analysis of genomic and genome-scale information. Focus on exploration and analysis of large genomic sequences, but also attention to issues in structural and functional genomics. Topics include genome sequence assembly, local and global alignment, gene and motif finding, protein threading and folding, and the clustering and classification of genes and tissues using gene expression data. Students to learn computational approaches to genomics as well as to develop practical experience with handling, analyzing, and visualizing information at a genome-scale.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Alexander Hartemink',
    prereqs__1: '',
    skills_to: 4,
    skills_from: 11,
  },
  {
    id: 13,
    course: 'Compsci 330',
    name: 'DESIGN/ANALY ALGORITHMS',
    description:
      'Design and analysis of efficient algorithms including sorting, searching, dynamic programming, graph algorithms, fast multiplication, and others; nondeterministic algorithms and computationally hard problems.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Agarwal, Munagala, Panigrahi, or Reif',
    prereqs__1: '(3|7),11',
    skills_to: 4,
    skills_from: 11,
  },
  {
    id: 14,
    course: 'Compsci 371',
    name: 'ELEMENTS OF MACHINE LEARNING',
    description:
      'Fundamental concepts of supervised machine learning, with sample algorithms and applications. Focuses on how to think about machine learning problems and solutions, rather than on a systematic coverage of techniques. Serves as an introduction to the methods of machine learning.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Carlo Tomasi',
    prereqs__1: '0,(1|2),(3|7),11',
    skills_to: '0,1,4',
    skills_from: '7,11,12,15',
  },
  {
    id: 15,
    course: 'Compsci 570',
    name: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Design and analysis of algorithms and representations for artificial intelligence problems. Formal analysis of techniques used for search, planning, decision theory, logic, Bayesian networks, robotics, and machine learning.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Conitzer or Parr',
    prereqs__1: 13,
    skills_to: 11,
    skills_from: 24,
  },
  {
    id: 16,
    course: 'Stats 111',
    name: 'PROBABILITY/STAT INFER',
    description:
      'Basic laws of probability—random events, independence and dependence, expectations, Bayes theorem. Discrete and continuous random variables, density, and distribution functions. Binomial and normal models for observational data. Introduction to maximum likelihood estimation and Bayesian inference. One- and two-sample mean problems, simple linear regression, multiple linear regression with two explanatory variables. Applications in economics, quantitative social sciences, and natural sciences emphasized. Not open to students who have taken 100-level or higher Statistical Science course.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Many',
    prereqs__1: '',
    skills_to: '',
    skills_from: 4,
  },
  {
    id: 17,
    course: 'Stats 210',
    name: 'REGRESSION ANALYSIS',
    description:
      'Extensive study of regression modeling. Multiple regression, weighted least squares, logistic regression, log-linear models, analysis of variance, model diagnostics and selection. Emphasis on applications. Examples drawn from a variety of fields. Prerequisite: 100-level Statistical Science course or Statistical Science 230. Interested students with a different background should discuss and seek permission of instructor or director of undergraduate studies.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Maria A Tackett',
    prereqs__1: 3,
    skills_to: 4,
    skills_from: '7,23',
  },
  {
    id: 18,
    course: 'Stats 325',
    name: 'MACHINE LEARNING & DATA MINING',
    description:
      'The rapid growth of digitalized data and the computer power available to analyze it has created immense opportunities for both machine learning and data mining. This course introduces machine learning and data mining methods. Topics covered include information retrieval, clustering, classification, modern regression, cross validation, boosting and bagging. Course emphasizes selection of appropriate methods and justification of choice, use of programming for implementation of the method, and evaluation and effective communication of results in data analysis reports.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Simon TSZ Fung Mak',
    prereqs__1: '(3|7),17',
    skills_to: '4,7,23',
    skills_from: '18,20,21,24',
  },
  {
    id: 19,
    course: 'ECE 110',
    name: 'FUND OF ELEC AND COMP ENGR',
    description:
      'Students learn core ECE concepts, providing a foundation on which subsequent courses build. Concepts include techniques for analyzing linear circuits, semiconductor and photonic devices, frequency representation, filtering, combinational and sequential logic. Central to the course is an extensive design challenge that requires students to integrate knowledge across topics while honing practical design and project management skills. Course culminates in an exciting competition in which teams of robots race to overcome challenging obstacles using sensor data acquisition and processing.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Daily, Gustafson, Huettel, or Tantum',
    prereqs__1: '',
    skills_to: '',
    skills_from: 6,
  },
  {
    id: 20,
    course: 'ECE 280',
    name: 'INTRO TO SYSTEMS AND SIGNALS',
    description:
      'Continuous and discrete signal representation and classification; system classification and response; transfer functions. Fourier series; Fourier, Laplace, and z transforms. Applications to Integrated Sensing and Information Processing; networks, modulation, sampling, filtering, and digital signal processing. Laboratory projects using digital signal processing hardware and microcontrollers. Computational solutions of problems using Matlab and Maple.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Collins, Gustafson, or Huettel',
    prereqs__1: 19,
    skills_to: 6,
    skills_from: 15,
  },
  {
    id: 21,
    course: 'ECE 495',
    name: 'APPLIED PROB FOR STAT LEARNING',
    description: 'Applying probability to statistical learning methods.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Stacy L Tantum',
    prereqs__1: '(1|2),3',
    skills_to: '1,5',
    skills_from: 24,
  },
  {
    id: 22,
    course: 'ECE 588',
    name: 'IMAGE AND VIDEO PROCESSING',
    description:
      'An introduction to image formation, image compression, image enhancement, and image segmentation. Coverage of both geometric and non-geometric tools, as well as spatial and non-spatial operations. Extension to color images and video. The course addresses recent progress in the area, including image inpainting (how to remove objects from images and video), image processing via sparse modeling and compressed sensing, geometric partial differential equations for image analysis, image processing for HIV and virus research, and image processing for neurosurgery and other medical applications. Prerequisite: Background in signal processing and linear algebra is recommended.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Guillermo Sapiro',
    prereqs__1: '(1|2)',
    skills_to: '1,15',
    skills_from: '16,17,19,24',
  },
  {
    id: 23,
    course: 'ECE 590',
    name: 'INTRO INTO DEEP LEARNING',
    description: 'An introduction to deep learning.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Vahid Tarokh',
    prereqs__1: '',
    skills_to: '5,23',
    skills_from: '16,17,19,24',
  },
  {
    id: 24,
    course: 'ECE 590',
    name: 'Comp Eng ML & Deep Neural Networks',
    description: '',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Yiran Chen',
    prereqs__1: '',
    skills_to: '1,24',
    skills_from: '16,17,19',
  },
  {
    id: 25,
    course: 'ECE 682/Stats 561/Compsci 571',
    name: 'PROBABILISTIC MACHINE LEARNING',
    description:
      'Introduction to concepts in probabilistic machine learning with a focus on discriminative and hierarchical generative models. Topics include directed and undirected graphical models, kernel methods, exact and approximate parameter estimation methods, and structure learning',
    prereqs: '',
    semesters: 'Spring',
    professor: 'Sayan Mukherjee',
    prereqs__1: '(1|2), 30, 31',
    skills_to: '5,12',
    skills_from: '19,20,21,22,24',
  },
  {
    id: 26,
    course: 'Math 565/Compsci 520/Stats 612',
    name: 'NUMERICAL ANALYSIS',
    description:
      'Error analysis, interpolation and spline approximation, numerical differentiation and integration, solutions of linear systems, nonlinear equations, and ordinary differential equations.',
    prereqs: '',
    semesters: 'Spring',
    professor: 'Xiaobai Sun',
    prereqs__1: '',
    skills_to: '0,1,5,12',
    skills_from: '2,3,8,19,24',
  },
  {
    id: 27,
    course: 'Compsci 370',
    name: 'Introduction to Artificial Intelligence',
    description:
      'Algorithms and representations used in artificial intelligence. Introduction and implementation of algorithms for search, planning, decision, theory, logic, Bayesian networks, robotics and machine learning.',
    prereqs: '',
    semesters: 'Fall, Spring',
    professor: 'Conitzer, Parr, or Tomasi',
    prereqs__1: '11,(0|1|2|3)',
    skills_to: '0,1,4,10',
    skills_from: '11,23',
  },
  {
    id: 28,
    course: 'COMPSCI 561/CBB 561',
    name: 'COMPUTATIONAL SEQUENCE BIOLOGY',
    description:
      'Introduction to algorithmic and computational issues in analysis of biological sequences: DNA, RNA, and protein. Emphasizes probabilistic approaches and machine learning methods, e.g. Hidden Markov models. Explores applications in genome sequence assembly, protein and DNA homology detection, gene and promoter finding, motif identification, models of regulatory regions, comparative genomics and phylogenetics, RNA structure prediction, post-transcriptional regulation.',
    prereqs: '',
    semesters: 'Spring',
    professor: 'Gordan or Hartemink',
    prereqs__1: 30,
    skills_to: '5,11,23',
    skills_from: 24,
  },
  {
    id: 29,
    course: 'Stats 613',
    name: 'STAT MTHDS/COMPUTATIONAL BIOLG',
    description:
      'Methods of statistical inference and stochastic modeling with application to functional genomics and computational molecular biology. Topics include: statistical theory underlying sequence analysis and database searching; Markov models; elements of Bayesian and likelihood inference; multivariate high-dimensional regression models, applied linear regress analysis; discrete data models; multivariate data decomposition methods (PCA, clustering, multi-dimensional scaling); software tools for statistical computing.',
    prereqs: '',
    semesters: 'Spring',
    professor: 'Mukherjee or Schmidler',
    prereqs__1: '0,(1,2),30',
    skills_to: '0,1,4,23',
    skills_from: 24,
  },
  {
    id: 30,
    course: 'Stats 611',
    name: 'INTRO TO MATHEMATICAL STAT',
    description:
      "Formal introduction to basic theory and methods of probability and statistics: probability and sample spaces, independence, conditional probability and Bayes' theorem; random variables, distributions, moments and transformations. Parametric families of distributions and central limit theorem. Sampling distributions, traditional methods of estimation and hypothesis testing. Elements of likelihood and Bayesian inference. Basic discrete and continuous statistical models.",
    prereqs: '',
    semesters: 'Fall',
    professor: 'Meimei Liu',
    prereqs__1: '',
    skills_to: 23,
    skills_from: 24,
  },
  {
    id: 31,
    course: 'Stats 250/Math 342',
    name: 'STATISTICS',
    description:
      'An introduction to the concepts, theory, and application of statistical inference, including the structure of statistical problems, probability modeling, data analysis and statistical computing, and linear regression. Inference from the viewpoint of Bayesian statistics, with some discussion of sampling theory methods and comparative inference. Applications to problems in various fields.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Jason Q Xu',
    prereqs__1: '0, (3|7)',
    skills_to: '',
    skills_from: 23,
  },
  {
    id: 32,
    course: 'Stats 340',
    name: 'Introduction to Statistical Decision Analysis',
    description:
      'Quantitative methods for decision making under uncertainty. Probability theory, personal probabilities and utilities, decision trees, ROC curves, sensitivity analysis, dominant strategies, Bayesian networks and influence diagrams, Markov models and time discounting, cost-effectiveness analysis, multi-agent decision making, game theory.',
    prereqs: '',
    semesters: 'Fall',
    professor: 'Mike West',
    prereqs__1: 3,
    skills_to: 4,
    skills_from: '5,24',
  },
];

let skills = [
  {
    id: 0,
    skill: 'Multivariable Calculus',
  },
  {
    id: 1,
    skill: 'Linear Algebra',
  },
  {
    id: 2,
    skill: 'ODEs',
  },
  {
    id: 3,
    skill: 'PDEs',
  },
  {
    id: 4,
    skill: 'Basic Probability',
  },
  {
    id: 5,
    skill: 'Advanced Probability',
  },
  {
    id: 6,
    skill: 'Digital Logic',
  },
  {
    id: 7,
    skill: 'Regression',
  },
  {
    id: 8,
    skill: 'High-Dimensional Data Analysis',
  },
  {
    id: 9,
    skill: 'Gradient Descent',
  },
  {
    id: 10,
    skill: 'Basic Algorithms',
  },
  {
    id: 11,
    skill: 'Advanced Algorithms',
  },
  {
    id: 12,
    skill: 'Python',
  },
  {
    id: 13,
    skill: 'R',
  },
  {
    id: 14,
    skill: 'Matlab',
  },
  {
    id: 15,
    skill: 'Signal Processing',
  },
  {
    id: 16,
    skill: 'Computer Vision',
  },
  {
    id: 17,
    skill: 'Neural Networks',
  },
  {
    id: 18,
    skill: 'Clustering',
  },
  {
    id: 19,
    skill: 'Statistical Learning Theory',
  },
  {
    id: 20,
    skill: 'Boosting',
  },
  {
    id: 21,
    skill: 'Decision Trees',
  },
  {
    id: 22,
    skill: 'Vector Machines',
  },
  {
    id: 23,
    skill: 'Basic Statistics',
  },
  {
    id: 24,
    skill: 'Advanced Statistics',
  },
];

// Make the list of prereqs from the string on each node; treat grouped prereqs as independent for now
const makeArrayFromPrereqs = (prereqs) => {
  let str = prereqs
    .toString()
    .replace(/\|/g, ',')
    .replace(/\(/g, '')
    .replace(/\)/g, '');

  console.log(str);
  if (str === '') return [];
  else return str.split(' ').join('').split(',');
};

// Make the edges from the connections listed on each node
let edges = [];

// First, make connections based on hard prerequisites
let prereqColor = '#BCC4CD';
nodes.forEach((node) => {
  // Treat grouped prereqs (like math 216/math 218) as separate prereqs for now
  let prereqsList = makeArrayFromPrereqs(node.prereqs__1);

  // prereqsFrom - prereqs required by this course
  // prereqsTo - courses for which this course is a prereq
  node.prereqsFrom = [];
  node.prereqsTo = [];
  prereqsList.forEach((prereq, prereqIndex) => {
    if (prereq != '') {
      let edge = {
        id: `prereq-${prereqIndex}-${node.id}`,
        source: parseInt(prereq),
        target: node.id,
        color: prereqColor,
        type: 'prereq',
      };
      edges.push(edge);
    }
  });
});

// Now that we have prereq connections, fill in missing data on each node
// in prereqsFrom and prereqsTo
edges.forEach((edge) => {
  // Double check that we have prereqs only
  if (edge.type === 'prereq') {
    nodes[edge.source].prereqsTo.push(edge.target);
    nodes[edge.target].prereqsFrom.push(edge.source);
  }
});

// Next, make connections based on skills

// First make lists of skills on each node
const skillColor = '#BCC4CD';
const skillNodeColor = '#614dff';

nodes.forEach((node) => {
  node.label = node.course;
  let skillsToList = node.skills_to.toString().split(',');
  let skillsFromList = node.skills_from.toString().split(',');

  node.skillsToList = [];
  for (let i = 0; i < skillsToList.length; i++) {
    let id = parseInt(skillsToList[i]);
    if (id >= 0 && id < skills.length)
      node.skillsToList.push(parseInt(skillsToList[i]));
  }
  node.skillsFromList = [];
  for (let i = 0; i < skillsFromList.length; i++) {
    let id = parseInt(skillsFromList[i]);
    if (id >= 0 && id < skills.length)
      node.skillsFromList.push(parseInt(skillsFromList[i]));
  }

  // skillsFrom - skills this course contributes to
  // prereqsTo - skills this course uses
  node.skillsTo = [];
  node.skillsFrom = [];
});

// Make skills groups
skills.forEach((skill) => {
  // from - course IDs of courses that contribute to this skill
  // to - course IDs of courses that use this skill
  skill.from = [];
  skill.to = [];
  nodes.forEach((node) => {
    if (node.skillsToList.includes(skill.id)) {
      skill.to.push(node.id);
    }

    if (node.skillsFromList.includes(skill.id)) {
      skill.from.push(node.id);
    }
  });
});

// make nodes for each skill

let skillNodes = [];
let skillEdges = [];
let skillNodeIds = [];

const skillNodeStyle = { fontSize: 12, highlightFontSize: 12 };

skills.forEach((skill) => {
  skillNodes.push({
    id: skill.skill,
    index: skillNodes.length,
    label: skill.skill,
    type: 'skill',
    size: 400,
    color: skillNodeColor,
  });
  skill.to.forEach((course) => {
    const edge = {
      id: `${skill.skill}-${course}`,
      source: skill.skill,
      target: course,
      color: skillColor,
    };
    skillEdges.push(edge);
    if (!skillNodeIds.includes(course)) {
      skillNodeIds.push(course);
      skillNodes.push({ ...nodes[course], ...skillNodeStyle });
    }
  });
  skill.from.forEach((course) => {
    const edge = {
      id: `${course}-${skill.skill}`,
      source: course,
      target: skill.skill,
      color: skillColor,
    };
    skillEdges.push(edge);
    if (!skillNodeIds.includes(course)) {
      skillNodeIds.push(course);
      skillNodes.push({ ...nodes[course], index: skillNodes.length });
    }
  });
});

/*
// Now link each course that contributes TO a skill to the courses that USE that skill
// TODO: link courses the other way too? i.e. courses that use a skill -> courses that can provide it
// "consumer" is the course that uses the skill
nodes.forEach(node => {
  node.skillsToList.forEach(skill => {
    skills[skill].from.forEach(consumer => {
      node.skillsTo.push(consumer);
      let edge = {
        id: `skill-${skill.id}-${node.id}-${consumer.id}`,
        source: node.id,
        target: consumer,
        color: skillColor,
        type: "skill"
      };
      edges.push(edge);
    });
  });
});
*/

/*
edges.forEach(edge => {
  nodes[edge.target].prereqsFrom.push(nodes[edge.source]);
  nodes[edge.source].prereqsTo.push(nodes[edge.target]);
});



nodes.forEach(source => {
  adjacencies[source.id] = [];
  nodes.forEach(sink => {
    adjacencies[source.id][sink.id] = source.to.includes(sink.id) ? 1 : 0;
  });
});

*/

let prereqEdges = [];
let prereqNodeIds = [];

//  construct arrays of edges and nodes by type of connection
edges.forEach((edge) => {
  if (edge.type === 'prereq') {
    prereqEdges.push({ ...edge, key: `${edge.id}-prereq` });
    if (!prereqNodeIds.includes[edge.source]) {
      prereqNodeIds.push(edge.source);
    }
    if (!prereqNodeIds.includes[edge.target]) {
      prereqNodeIds.push(edge.target);
    }
  }
});

let prereqNodes = [];

let nodesObject = {};

skills.forEach((skill) => {
  nodesObject[skill.skill] = { ...skill, label: skill.skill, type: 'skill' };
});

nodes.forEach((node) => {
  nodesObject[node.id] = node;
});

prereqNodeIds.forEach((node) => {
  prereqNodes.push(nodes[node]);
});

export const data = {
  nodes: nodes,
  edges: edges,
  skillNodes: skillNodes,
  prereqNodes: prereqNodes,
  skillEdges: skillEdges,
  prereqEdges: prereqEdges,
  nodesObject: nodesObject,
};

console.log(data);

export default { ...data };
