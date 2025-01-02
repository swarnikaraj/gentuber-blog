"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
  isPriority?: boolean;
}> = ({ post, isPriority = false }) => {
  const publishedDate = post.publishedAt || post.updatedAt;
  const isoDate = new Date(publishedDate).toISOString();

  return (
    <article
      className="break-words"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* Image Section */}
      <Link href={`/blog/${post.slug}`} passHref>
        <div className="aspect-[16/9] relative">
          <Image
            alt={post.title}
            className="object-cover rounded-lg"
            src={post.image || "/images/placeholder.webp"}
            fill
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        {/* Blog Title */}
        <h2
          className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl"
          itemProp="headline"
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* Date Published */}
        <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
          <time dateTime={isoDate} itemProp="datePublished">
            {format(new Date(publishedDate), "dd MMMM yyyy")}
          </time>
        </div>

        {/* Description */}
        <div
          className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground"
          itemProp="description"
        >
          {post.description}
        </div>

        {/* Tags */}
        <div className="text-sm text-muted-foreground">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
        className
      )}
      itemScope
      itemType="https://schema.org/Blog"
    >
      {posts.map((post, index) => (
        <BlogPostPreview
          key={post.id}
          post={post}
          isPriority={index === 0}
        />
      ))}
    </section>
  );
};
