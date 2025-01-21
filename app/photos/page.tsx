import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Robin Hood 63",
            href: "https://outerzone.co.uk/plan_details.asp?ID=15763",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "World Tailless Record Holder",
            href: "https://outerzone.co.uk/plan_details.asp?ID=3340",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sport Wing",
            href: "https://outerzone.co.uk/plan_details.asp?ID=15746",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Vought Corsair F4U-1",
            href: "https://outerzone.co.uk/plan_details.asp?ID=11559",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Playboy Junior 68",
            href: "https://outerzone.co.uk/plan_details.asp?ID=15691",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Kwik Fly Mk3",
            href: "https://outerzone.co.uk/plan_details.asp?ID=4440",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      />
    </section>
  );
}
