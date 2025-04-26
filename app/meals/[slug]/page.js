import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal, getMeals } from "@/lib/meals";
import { notFound } from "next/navigation";

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

// 🚀 This will tell Next.js to pre-build all meal pages
export async function generateStaticParams() {
  const meals = await getMeals(); // use getMeals() here

  return meals.map((meal) => ({
    slug: meal.slug,
  }));
}

const MealDetails = async ({ params }) => {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal?.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal?.creator}</a>
          </p>
          <p className={classes.summary}>{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal?.instructions }}></p>
      </main>
    </>
  );
};

export default MealDetails;
