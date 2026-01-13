import React from "react";
import ReactMarkdown from "react-markdown";
export default function claudeRecipe(props) {
    return (
        <section className="suggested-recipe-container ">
          <h2>Your Recipe</h2>
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}