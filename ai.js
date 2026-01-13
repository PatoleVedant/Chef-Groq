
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients a user has and suggests a recipe
they could make using some or all of those ingredients.
The recipe can include a few extra ingredients if needed.
Format the response in Markdown.
`;

export async function getRecipeFromGroq(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `I have ${ingredientsString}. Suggest a recipe I can make.`,
          },
        ],
        max_tokens: 500,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Groq API error (${response.status}): ${err}`);
    }

    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content || "No recipe found.";
    return message;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Error fetching recipe from Groq.";
  }
}
