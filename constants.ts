import { Publication, Project, Resume } from './types';

export const RESUME_DATA: Resume = {
  contact: {
    name: "Brandon Doey",
    title: "Senior Data Scientist | ML Engineer | Independent Researcher",
    location: "Orlando, FL",
    phone: "561.459.7801",
    email: "brandon.doey@icloud.com",
    website: "bdoey.github.io",
    websiteUrl: "https://bdoey.github.io",
  },
  summary: "Accomplished and results-driven systems engineer with over 10 years of experience designing, building, and deploying scalable, end-to-end machine learning and business intelligence systems. Proven expertise in developing everything from high-throughput forecasting engines to next-generation agentic AI workflows using Large Language Models (LLMs). A strategic thinker and published researcher with a strong foundation in data engineering and software development, adept at translating cutting-edge academic research into robust, production-ready solutions that drive significant business impact and strategic decision-making.",
  skills: [
    { title: "Languages", points: ["Python", "R", "SQL", "JavaScript", "Go", "Rust", "Solidity"] },
    { title: "AI / ML Frameworks", points: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "XGBoost", "NLP", "BERT", "SpaCy", "NeuralProphet", "Optuna", "MLX", "CUDA"] },
    { title: "Generative & Agentic AI", points: ["LLM Fine-Tuning (Axolotl/Unsloth)", "Retrieval Augmented Generation (RAG)", "Agentic Architectures (PydanticAI/CrewAI)", "Hugging Face Transformers", "Vector Databases (Chroma/Weaviate)", "Ollama", "LangChain"] },
    { title: "MLOps & Business Intelligence", points: ["Google Cloud Platform (GCP)", "VertexAI", "BigQuery", "Kubernetes", "Docker", "Apache Airflow", "REST APIs", "Teradata", "MLflow", "WandB", "Jenkins CI/CD", "Looker", "Qlik Sense", "Tableau"] },
  ],
  experience: [
    {
      title: "Senior Manager - Data Science",
      company: "Verizon",
      dates: "Aug 2024 – Present",
      description: [
        "Led the design and development of a novel multi-agent framework to automate wireless churn analysis and anomaly detection, reducing manual investigation time by 60% and enabling proactive retention strategies.",
        "Architected and implemented a self-optimizing wireless churn forecasting pipeline leveraging Optuna hyperparameter tuning and a customized NeuralProphet model, achieving 15% higher prediction accuracy and extending forecast horizons by 3 months.",
        "Designed an innovative XGBoost-Prophet hybrid ensemble model that increased churn prediction accuracy by 10% while reducing computational overhead by 25%.",
        "Led the end-to-end execution of A/B tests to validate model performance against core business KPIs, presenting findings to stakeholders to iterate on data-driven insights.",
      ]
    },
    {
      title: "Principal Data Engineer",
      company: "Verizon",
      dates: "Jan 2021 – Aug 2024",
      description: [
        "Spearheaded the implementation of the first Qlik powered end-to-end data pipeline combining 120M+ records from 3 disparate systems, enabling product managers to track over $45B in annual revenue.",
        "Developed a Python-based application that automatically generated essential product hierarchy data, reducing turnaround time by 95% and facilitating accurate product revenue tracking.",
        "Engineered scalable JavaScript-based Google Apps Script connecting product delivery to revenue tracking, upholding Verizon's $130B revenue recognition pipeline."
      ]
    },
    {
        title: "Systems Analysis & Programming Supervisor",
        company: "Verizon",
        dates: "Mar 2017 – Jan 2021",
        description: [
            "Successfully integrated Verizon's Finance Corporate Systems organization into their new ServiceNow CMDB platform (15 teams, 150 users) enabling improved stakeholder visibility by increasing ITIL process adoption and increasing customer satisfaction rates by 60%.",
            "Managed a diverse team of systems specialists that supported Verizon's internal ERP Portal infrastructure which incorporated both SAP ERP platforms and Oracle's PeopleSoft systems critical for finance operations.",
            "Implemented process improvements that resulted in 44% faster average resolution time on critical system issues affecting the Verizon Finance and Accounting organizations."
        ]
    },
    {
        title: "Lead Systems Analyst",
        company: "Aon",
        dates: "Jan 2015 – Mar 2017",
        description: [
            "Translated complex business requirements into technical specifications for a new benefits administration platform serving over 150,000 employees.",
            "Collaborated with cross-functional teams to design and implement robust data validation and processing workflows, ensuring high data integrity for downstream analytical processes.",
            "Led the design and delivery of technical training programs, creating thorough documentation to ensure a seamless transition and high proficiency with new systems."
        ]
    },
    {
        title: "Systems Analyst",
        company: "Aon",
        dates: "Apr 2012 – Jan 2015",
        description: [
            "Served as a Subject Matter Expert (SME) on Aon's proprietary web portal, analyzing and debugging complex system issues related to data processing and business logic.",
            "Conducted comprehensive QA testing and data validation to ensure system stability and functionality, preventing critical data-related production issues."
        ]
    },
    {
        title: "Linux Server Analyst",
        company: "HostDime Global Corp",
        dates: "Jul 2008 - Apr 2012",
        description: [
            "Deployed and managed a large fleet of CentOS Linux-based web servers, maintaining 99.95% uptime for mission-critical client applications.",
            "Developed foundational experience in building and optimizing scalable compute infrastructure, a critical skill for deploying large-scale machine learning systems.",
            "Provided 24/7 on-call support, excelling in troubleshooting, debugging, and performance optimization in a high-stakes production environment."
        ]
    }
  ],
  education: [
    {
      degree: "MS, Finance Technology (FinTech)",
      institution: "University of Central Florida",
      description: "Concentration in AI/ML applications for FinTech innovation."
    },
    {
      degree: "BS, Management Information Systems",
      institution: "University of Central Florida",
      description: "Concentration in database management, systems analysis, and project management."
    }
  ],
};

export const PUBLICATIONS: Publication[] = [
  {
    title: 'How negative tones in earnings calls shape media narratives',
    date: 'January 2025',
    journal: 'Review of Behavioral Finance',
    doi: '10.1108/RBF-08-2024-0228',
    doiLink: 'https://doi.org/10.1108/RBF-08-2024-0228',
    authors: 'Brandon Doey, Pieter Johannes De Jong',
    abstract: 'Purpose This study investigates the relationship between earnings call sentiment and subsequent media coverage sentiment. Examining these synergistic effects between executive communication style and resulting news narratives provides novel insights. The unscripted qualitative discussions in earnings calls establish perceptions and outlooks that the media echoes in later coverage. Understanding these intricate connections between information channels aids communication experts and market analysts in shaping strategic messaging and predicting market impacts.'
  },
  {
    title: 'Linguistic complexity and gender in financial analysis: Evidence from earnings call questioning patterns',
    date: 'September 2025',
    journal: 'Journal of Behavioral Finance',
    doi: '10.1080/15427560.2025.2556660',
    doiLink: 'https://doi.org/10.1080/15427560.2025.2556660',
    authors: 'Brandon Doey, Pieter Johannes De Jong, Inga Timmerman Chira',
    abstract: 'This study examines gender-based differences in linguistic complexity during earnings conference calls. Using a comprehensive dataset of 157,968 analyst questions from 2015 to 2023, we analyze variations in syntactic complexity across analyst-CEO interactions. We find that male analysts exhibit greater syntactic variability, but lower lexical complexity compared to female analysts. These patterns are more pronounced when questioning female CEOs and in smaller firms. The linguistic variations have measurable market consequences, with significant associations between communication patterns and post-call market reactions. Our findings suggest that gender diversity in analyst ranks may enhance information extraction during earnings calls through complementary questioning strategies.'
  },
];

export const PROJECT_CATEGORIES: { category: string; intro: string; items: Project[] | null }[] = [
    {
        category: 'Generative AI',
        intro: "I explore the transformative potential of Generative AI, developing innovative applications that push the boundaries of what's possible with Large Language Models.",
        items: [
            { title: 'AI Enabled Financial Literacy Q&A System', imageUrl: 'https://picsum.photos/seed/ai1/400/200', description: 'Leveraging Retrieval Augmented Generation and locally hosted LLMs to combat financial illiteracy.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Financial_Literacy_Local_LLM.ipynb' },
            { title: 'LLM Powered Data Anomaly Detection App', imageUrl: 'https://picsum.photos/seed/ai2/400/200', description: 'An app to identify anomalies in datasets, combining Python\'s analytical strengths with an LLM\'s interpretative power.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Llama3_Powered_Anomaly_Detection.ipynb' },
            { title: 'AI Research Summarizer with LLM Feedback', imageUrl: 'https://picsum.photos/seed/ai3/400/200', description: 'An innovative tool using the arXiv API and Llama 3 to fetch, summarize, and provide feedback on AI research papers.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/AI_Research_Summarizer_LLM_Feedback.ipynb' },
        ]
    },
    {
        category: 'FinTech Apps',
        intro: 'Harnessing data to revolutionize financial services by creating intuitive, scalable solutions that streamline processes, mitigate risk, and enhance user experiences.',
        items: [
            { title: 'BNPL Credit Worthiness App', imageUrl: 'https://picsum.photos/seed/ft1/400/200', description: 'Utilizing a Keras Sequential model to analyze the creditworthiness of potential "Buy Now, Pay Later" borrowers.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_BNPL_CAP5619_Final.ipynb' },
            { title: 'DJIA Analysis using NLP and MACD', imageUrl: 'https://picsum.photos/seed/ft2/400/200', description: 'Leveraging NLP of financial news combined with quantitative trading algorithms (MACD) for trading insights.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_DJIA_Analysis_using_NLP_MACD.ipynb' },
            { title: 'Trading Agent using Q-Learning', imageUrl: 'https://picsum.photos/seed/ft3/400/200', description: 'Developing a reinforcement learning agent that learns optimal trading strategies from historical market data.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_Trading_Agent_using_Q-learning.ipynb' },
        ]
    },
    {
        category: 'Data Science',
        intro: 'Diving deep into complex datasets using advanced statistical techniques and visualization to extract meaningful insights that inform strategic decision-making.',
        items: [
            { title: 'Stock Market Prediction using LSTM', imageUrl: 'https://picsum.photos/seed/ds1/400/200', description: 'Employing Long Short-Term Memory (LSTM) networks to process sequences of data for time-series stock market prediction.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/FT_Stock_Prediction_using_LSTM.ipynb' },
            { title: 'Churn Prediction using RF Classifier', imageUrl: 'https://picsum.photos/seed/ds2/400/200', description: 'Predicting customer churn for a major telecom company and understanding customer value for retention.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/DS_Churn_Prediction_using_Classifier.ipynb' },
            { title: 'Bankruptcy Prediction using Ensemble ML', imageUrl: 'https://picsum.photos/seed/ds3/400/200', description: 'Using an ensemble machine learning approach to predict corporate bankruptcy after a thorough EDA.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/DS_Bankruptcy_Prediction_using_Ensemble.ipynb' },
        ]
    },
    {
        category: 'Machine Learning',
        intro: 'Developing sophisticated ML models to automate processes, improve predictive accuracy, and gain a competitive edge by staying at the forefront of AI advancements.',
        items: [
            { title: 'Customer Segmentation using Clustering', imageUrl: 'https://picsum.photos/seed/ml1/400/200', description: 'Understanding customer behavior segments to assess risk profiles and inform mitigation strategies.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Customer_Segmentation_using_Clustering.ipynb' },
            { title: 'Dropout Prediction using FF Neural Network', imageUrl: 'https://picsum.photos/seed/ml2/400/200', description: 'Applying a Keras-based Feed-Forward Neural Network (FFNN) to predict college student dropouts.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Dropout_Prediction_using_FFNN.ipynb' },
            { title: 'Sentiment Analysis using LDA', imageUrl: 'https://picsum.photos/seed/ml3/400/200', description: 'Using Latent Dirichlet Allocation (LDA) to identify key topics in news and perform weighted sentiment analysis.', link: 'https://github.com/bdoey/bdoey.github.io/blob/main/notebooks/ML_Sentiment_Analysis_using_LDA.ipynb' },
        ]
    },
];
