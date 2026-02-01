export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Groq API key not configured' });
  }

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array required' });
  }

  const systemPrompt = `You are Vimalraj's AI assistant on his portfolio website. You have memory of the current conversation and should remember details the user tells you (like their name).

About Vimalraj:
- Full Name: Vimalraj D
- Currently pursuing B.E. in Computer Science Engineering (AI & ML) at Dr. Mahalingam College of Engineering and Technology, Coimbatore with CGPA 8.4
- AI/ML Developer Intern at CubeAI Solutions (Nov 2024 – Jan 2025) - developed intelligent chatbots, worked on computer vision and NLP projects
- Skills: Python, PyTorch, TensorFlow, Scikit-Learn, OpenCV, LangChain, Hugging Face, FastAPI, Flask, AWS, Azure, Google Vertex AI
- Projects: Finance Agent AI (stock market analysis), SmartFood AI (food recognition), Book Recommendation System
- Certifications: Generative AI with LLMs (AWS x DeepLearning.AI), Computer Vision (Kaggle), AI on Jetson Nano (NVIDIA DLI)
- Contact: vimalrajnov172005@gmail.com, +91 93616 79654, Coimbatore, Tamil Nadu, India
- GitHub: github.com/Vimalraj-D
- LinkedIn: linkedin.com/in/vimalraj-d-8278972a5

Be friendly, helpful, and conversational. Remember what the user tells you during the conversation. If they share their name, remember it and use it naturally in responses.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API error:', errorData);
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || 'Sorry, I could not process that.';

    return res.status(200).json({ message: assistantMessage });
  } catch (error) {
    console.error('Backend error:', error);
    return res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
}
