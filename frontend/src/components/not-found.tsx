import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

type NotFoundProps = {
  title?: string;
  description?: string;
};

const NotFound = ({
  title = "Page Not Found",
  description = "Sorry, the page you’re looking for doesn’t exist.",
}: NotFoundProps) => (
  <div className="flex h-full flex-col items-center justify-center bg-background text-foreground">
    <h1 className="text-4xl font-bold">{title}</h1>

    <p className="mt-4 text-lg">{description}</p>

    <Button asChild className="mt-6">
      <Link href="/">
        <Home /> Go to Main Page
      </Link>
    </Button>
  </div>
);

export { NotFound, type NotFoundProps };
