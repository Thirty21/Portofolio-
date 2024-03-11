"use client";
import { useState, useEffect } from "react";
import { HoverEffect } from "@/component/ui/card-hover-effect";

interface Project {
  title: string;
  description: string;
  link: string;
  id: number; // Menambahkan properti id
}

export function CardHoverEffectDemo() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: any[]) => {
        // Menentukan bahwa data adalah array dari jenis apa pun
        const transformedData: Project[] = data.map((item) => ({
          title: item.title,
          description: item.body,
          link: `https://jsonplaceholder.typicode.com/posts/${item.id}`,
          id: item.id, // Menambahkan properti id
        }));
        setProjects(transformedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
