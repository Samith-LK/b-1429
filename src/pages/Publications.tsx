const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches in Healthcare: A Comprehensive Review",
      journal: "Nature Machine Intelligence",
      year: 2023,
      authors: "Johnson, S., Smith, P., Williams, R.",
      abstract: "This paper presents a systematic review of deep learning applications in healthcare, focusing on diagnostic accuracy and patient outcome prediction.",
      doi: "10.1038/s42256-023-00001-x"
    },
    {
      title: "Transformer Models for Medical Image Analysis",
      journal: "IEEE Transactions on Medical Imaging",
      year: 2023,
      authors: "Johnson, S., Chen, L., Davis, M.",
      abstract: "An innovative approach to medical image analysis using transformer architectures, demonstrating superior performance in tumor detection.",
      doi: "10.1109/TMI.2023.1234567"
    },
    {
      title: "Ethical Considerations in AI-Driven Healthcare Solutions",
      journal: "AI Ethics",
      year: 2022,
      authors: "Johnson, S., Brown, K.",
      abstract: "A discussion of ethical implications and guidelines for implementing AI solutions in healthcare settings.",
      doi: "10.1007/s43681-022-00123-x"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{pub.title}</h2>
            <p className="text-gray-400 mb-2">{pub.authors}</p>
            <p className="text-gray-300 mb-4">{pub.journal} • {pub.year}</p>
            <p className="text-gray-300 mb-4">{pub.abstract}</p>
            <p className="text-sm text-gray-400">DOI: {pub.doi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;