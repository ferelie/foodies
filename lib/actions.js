"use server";
import { redirect } from "next/navigation";
import { insertMeal } from "./meals";

const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await insertMeal(meal);
  redirect("/meals");
};

export { shareMeal };
