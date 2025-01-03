import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Pricing

pricing,

`;

export async function generateMetadata() {
  return {
    title: "Gentuber Pricing",
    description: "pricing",
    openGraph: {
      title: "pricing",
      description: "pricing",
      images: [
        signOgImageUrl({
          title: "pricing",
          label: "pricing of gentuber",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
