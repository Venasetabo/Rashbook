import { useEffect, useState } from "react";
import MainLayout from "../components/shared/main-layout";

export default function Posts() {
  console.log("EXECUTION DE LA PAGE POST");

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text)] capitalize mb-6 leading-tight">
          Tous les posts
        </h1>
      </div>
    </MainLayout>
  );
}
