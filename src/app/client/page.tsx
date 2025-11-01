import React from "react";
import Banner from "@/components/home/Banner";
import CategoryList from "@/components/home/CategoryList";
import ProductHighlight from "@/components/home/ProductHighlight";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <CategoryList />
      <ProductHighlight />
      <BlogSection />
    </div>
  );
}
