export const resultMetrics = [
  {
    value: '33.74%',
    label: 'Official AVG Top-1 on reproduced DoTA VAR',
    title: 'dKFD Research Benchmark',
    description:
      'Built a phase-aware evidence selection framework and reproduced official-protocol evaluation with matched ablations and diagnostics.',
    tags: ['AI Research', 'Video Understanding', 'Evaluation'],
  },
  {
    value: '0.5308 tIoU',
    label: 'Temporal overlap on DoTA VAR',
    title: 'Temporal Grounding Quality',
    description:
      'Evaluated temporal grounding quality alongside recognition metrics to understand whether the system selected useful event evidence.',
    tags: ['Grounding', 'Metrics', 'Diagnosis'],
  },
  {
    value: '0.8179 Frame AUC',
    label: 'Frame-level evidence quality',
    title: 'Evidence Alignment',
    description:
      'Measured how well selected evidence aligned with event-relevant frames, supporting stronger interpretability and diagnostic analysis.',
    tags: ['Frame AUC', 'Interpretability', 'Evidence'],
  },
  {
    value: '96.4%',
    label: 'Recall on fracture detection/localization workflow',
    title: 'Medical AI Recall',
    description:
      'Developed medical imaging models for wrist and hand X-rays where high recall is critical for clinical workflow support.',
    tags: ['Medical AI', 'Radiology', 'Computer Vision'],
  },
  {
    value: '91.07%',
    label: 'Multi-class classification accuracy',
    title: 'Medical Classification',
    description:
      'Built and evaluated radiology AI workflows for abnormality detection and fracture classification.',
    tags: ['Classification', 'PyTorch', 'Deployment'],
  },
  {
    value: '98%',
    label: 'Test accuracy on ILA fault prediction',
    title: 'Optical Network ML',
    description:
      'Built machine learning pipelines for optical-network fault prediction using real-world network data.',
    tags: ['Optical Networks', 'Fault Prediction', 'ML'],
  },
  {
    value: 'AIR 63',
    label: 'Amazon ML Challenge 2025',
    title: 'Amazon ML Challenge',
    description:
      'Ranked AIR 63 in the Smart Product Price Prediction task with a SMAPE score of 42.778.',
    tags: ['Machine Learning', 'Competition', 'Prediction'],
  },
  {
    value: 'Speaker',
    label: 'Google DeepMind Open Models Meet-up',
    title: 'Research Visibility',
    description: 'Invited to present research work on PaliGemma in medical imaging.',
    tags: ['Research Talk', 'Medical AI', 'Communication'],
  },
  {
    value: 'arXiv',
    label: 'Fracture detection and localization paper',
    title: 'Research Publication',
    description:
      'Published research work on fracture detection and localization in wrist and hand radiographs using Detection Transformer variants.',
    tags: ['Research Writing', 'Detection', 'Medical Imaging'],
  },
  {
    value: 'NatWest',
    label: 'Software Engineering role',
    title: 'Engineering Direction',
    description:
      'Placed as a Software Engineer, extending my profile from AI research into production software engineering.',
    tags: ['Software Engineering', 'Systems', 'Production'],
  },
]

export const resultInterpretation = {
  title: 'Result Interpretation',
  content:
    'My results sit across three kinds of evidence: model performance, system reliability, and communication impact. The AI research metrics show my ability to run controlled evaluations and ablations. The medical AI and optical-network results show applied ML performance in domain-specific settings. The competition, publication, and speaking outcomes show that I can communicate technical work beyond code.',
}
