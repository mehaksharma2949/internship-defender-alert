// src/lib/analyzeInternship.ts

export interface AnalysisResult {
  risk: string;
  verdict: string;
  redFlags: string[];
  analysis: string;
  trustScore: number;
}

export const analyzeInternship = async (text: string): Promise<AnalysisResult> => {
  try {
    const response = await fetch("https://mehaksharma2949.app.n8n.cloud/webhook-test/internshield-scan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ internshipText: text })
    });

    const data = await response.json();

    return {
      risk: data.risk || "Medium",
      verdict: data.verdict || "⚠️ Suspicious",
      redFlags: data.redFlags || [],
      analysis: data.analysis || "AI could not analyze this internship.",
      trustScore: data.trustScore || 50
    };
  } catch (error) {
    console.error("Analysis failed:", error);
    return {
      risk: "Unknown",
      verdict: "❌ Error",
      redFlags: [],
      analysis: "There was an error analyzing the internship.",
      trustScore: 0
    };
  }
};
