export async function generatePlan(data: any) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          // 🔥 HARDCODE KEY HERE
          Authorization: "Bearer sk-or-v1-PASTE-YOUR-KEY-HERE",
        },
        body: JSON.stringify({
          model: "openchat/openchat-3.5",
          messages: [
            {
              role: "user",
              content: `
Create a simple fitness plan.

Goal: ${data.goal}
Focus: ${data.focus}
Energy: ${data.energy}
Symptoms: ${data.symptoms}

Workout:
Exercises:
Tips:
Precautions:
              `,
            },
          ],
        }),
      }
    );

    const text = await response.text(); // 🔥 important change

    console.log("RAW RESPONSE:", text);

    const json = JSON.parse(text);

    if (!response.ok) {
      return "API Error: " + text;
    }

    return json.choices?.[0]?.message?.content || "No response";
  } catch (error) {
    console.log("ERROR:", error);
    return "Error generating plan";
  }
}