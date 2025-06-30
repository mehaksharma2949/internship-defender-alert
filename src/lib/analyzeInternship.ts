export async function fetchAIResult({ internshipText, internshipUrl }) {
  try {
    const response = await fetch("https://mehaksharma2949.app.n8n.cloud/webhook/internshield-scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ internshipText, internshipUrl }),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error hitting webhook:", err);
    return { error: true };
  }
}
