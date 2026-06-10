export const experiments = [
  {
    number: '01',
    title: 'ResearchOS - Read. Synthesize. Present.',
    category: 'Agentic LLM Systems / Research Tools',
    problem:
      'Reading papers, synthesizing evidence, preparing presentations, and maintaining research notes are repetitive workflows that require structure, citations, revision, and traceability.',
    method:
      'Built an agentic CLI that converts arXiv papers, PDFs, PDF URLs, Markdown files, and topic prompts into Beamer slide decks, structured notes, research briefs, viva prep, reproduction checklists, and chat-style RAG over papers.',
    dataset:
      'arXiv papers, local PDFs, PDF URLs, Markdown files, topic-only prompts, web-sourced citations, and persistent local paper memory.',
    result:
      'Created a research operating system with query-guided synthesis, optional web search, source approval, slide-title approval, retry logic, organized run directories, resume support, figure insertion, and Graphviz diagram generation.',
    techStack: [
      'Python',
      'LLMs',
      'LangChain',
      'RAG',
      'PyMuPDF',
      'Graphviz',
      'Beamer',
      'NVIDIA NIM',
    ],
    github: 'https://github.com/adityabagrii/ResearchOS-Read-Synthesize-Present',
    appendix:
      'This project is a strong representation of my agentic AI direction: systems that read, synthesize, cite, revise, and produce reusable research artifacts rather than one-off summaries.',
  },
  {
    number: '02',
    title: 'ClassroomScout',
    category: 'Agentic Automation / Education Systems',
    problem:
      'Students often need to track announcements, quizzes, assignments, materials, and deadlines across multiple Google Classroom courses, which creates avoidable cognitive overhead.',
    method:
      'Built a production-style automation system that monitors active courses, routes classroom events through modular agent workflows, generates quiz study packs, creates assignment plans, scaffolds starter code, persists state in SQLite, and supports Telegram-based human feedback loops.',
    dataset:
      'Google Classroom course activity including announcements, coursework, materials, quiz events, assignment events, and user feedback signals.',
    result:
      'Created an always-running academic companion with CLI controls, scheduled polling, duplicate-event tracking, local artifact caching, PDF generation support, and multi-agent orchestration.',
    techStack: [
      'Python',
      'Google Classroom API',
      'LangGraph',
      'SQLite',
      'Telegram Bot',
      'CLI',
      'Pandoc',
    ],
    github: 'https://github.com/adityabagrii/ClassroomScout',
    appendix:
      'This project shows my interest in agentic workflows that turn messy academic activity into structured, useful artifacts while preserving reliability, state, and human review.',
  },
  {
    number: '03',
    title: 'Price Prediction via Fine-tuning DeBERTa Large',
    category: 'NLP / Regression / Competition ML',
    problem:
      'Smart product price prediction from catalog text requires handling skewed price distributions, outliers, textual leakage, and stable optimization under a competition metric.',
    method:
      'Fine-tuned DeBERTa-v3 Large with a gated multi-head regressor, Yeo-Johnson and RobustScaler target normalization, mixed precision, gradient checkpointing, and a blended Huber, L1, and SMAPE-surrogate training objective.',
    dataset:
      'Amazon ML Challenge 2025 product catalog text with title and description fields used for text-only price prediction.',
    result:
      'Reached approximately 42.254 SMAPE and ranked 47 among 6500+ submissions during the challenge run.',
    techStack: [
      'Python',
      'PyTorch',
      'DeBERTa-v3 Large',
      'Transformers',
      'Huber Loss',
      'SMAPE',
      'Regression',
    ],
    github: 'https://github.com/adityabagrii/Price-Prediction-via-Fine-tuning-DeBERTa-Large',
    appendix:
      'This project highlights strong text-model fine-tuning practice: metric-aware validation, leakage handling, target normalization, and robust regression design.',
  },
  {
    number: '04',
    title: 'Image-Text Fusion Model for Product Price Prediction',
    category: 'Multimodal ML / Product Price Prediction',
    problem:
      'Product price prediction requires reasoning over heterogeneous inputs, where catalog text provides strong semantic cues and product images add visual signals such as packaging, material, and form factor.',
    method:
      'Built a multimodal regression pipeline that fuses a frozen DeBERTa text encoder with a trainable image backbone, projection layers, a fusion MLP, image sanity filtering, target scaling, and a learnable mixture weight.',
    dataset:
      'Amazon ML Challenge product data with catalog text, product images, train/validation splits, and image paths filtered for corrupt or missing inputs.',
    result:
      'Improved validation SMAPE from a text-only DeBERTa baseline of 44.112% to 43.451% using text-image fusion.',
    techStack: [
      'Python',
      'PyTorch',
      'DeBERTa',
      'ViT',
      'Swin',
      'timm',
      'Multimodal Fusion',
      'Regression',
    ],
    github: 'https://github.com/adityabagrii/Image-Text-Fusion-Model-for-Product-Price-Prediction',
    appendix:
      'This project connects multimodal learning with practical competition constraints: leakage checks, frozen text encoders, robust image handling, and price-aware regression.',
  },
  {
    number: '05',
    title: 'SGD Variants Federated Learning Simulation',
    category: 'Federated Learning / Distributed ML',
    problem:
      'Federated learning performance depends on client-side optimization behavior, non-IID data splits, and communication-round dynamics.',
    method:
      'Built a FEMNIST federated learning simulation with a centralized server, multiple clients, FedAvg aggregation, Dirichlet non-IID partitioning, and optimizer variants including SGD, Adam, RMSProp, and Adagrad.',
    dataset:
      'FEMNIST character recognition data loaded through HuggingFace and partitioned into server-side test data plus multiple client subsets.',
    result:
      'Created a simulation framework that logs train/test loss and generates optimizer comparison plots across communication rounds.',
    techStack: [
      'Python',
      'PyTorch',
      'Federated Learning',
      'FedAvg',
      'FEMNIST',
      'CNNs',
      'Jupyter Notebook',
    ],
    github: 'https://github.com/adityabagrii/SGD-Variants-Federated-Learning-Simulation',
    appendix:
      'This project shows my interest in distributed ML systems, optimizer behavior, non-IID client data, and experiment comparison workflows.',
  },
  {
    number: '06',
    title: 'Hybrid Neighborhood-Based Collaborative Filtering',
    category: 'Recommender Systems / Machine Learning',
    problem:
      'Classical user-based and item-based collaborative filtering can be noisy when ratings are sparse and similarities are computed directly on raw rating values.',
    method:
      'Implemented a hybrid neighborhood-based recommender on MovieLens-100K using user-based and item-based collaborative filtering, Pearson similarity, baseline bias modeling, residual-based similarity, shrinkage, and cross-validation over predefined train-test splits.',
    dataset:
      'MovieLens-100K with 100,000 ratings, 943 users, 1,682 movies, and five predefined 80/20 train-test splits.',
    result:
      'Built a reproducible recommendation experiment pipeline using NMAE as the evaluation metric, comparing baseline neighborhood models with a hybrid residual-based approach.',
    techStack: [
      'Python',
      'Recommender Systems',
      'Collaborative Filtering',
      'MovieLens',
      'Pearson Similarity',
      'NMAE',
    ],
    github: 'https://github.com/adityabagrii/Hybrid-Neighborhood-Based-Collaborative-Filtering',
    appendix:
      'This project demonstrates core ML experimentation: formal metrics, baselines, model variants, bias correction, and careful evaluation over repeated splits.',
  },
]
