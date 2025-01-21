import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheese",
  description: "Cheese",
};

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cheese by Category</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
            <img
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Montgomerys_cheddar_cheese.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                     New arrivals
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  A bit smelly
                </p>
              </div>
            </div>
          </div>
          <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
            <img
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cheese%2C_wine_and_bread_in_a_sidewalk_cafe_in_Paris%2C_June_2015.jpg/1280px-Cheese%2C_wine_and_bread_in_a_sidewalk_cafe_in_Paris%2C_June_2015.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Foreign cheese
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  if you like that kind of thing
                </p>
              </div>
            </div>
          </div>
          <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Brie_Cheese_from_The_Verandah.jpg/1024px-Brie_Cheese_from_The_Verandah.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Soft cheese
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  for girls
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all cheese
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
