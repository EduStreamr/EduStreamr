import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NotebookPen } from "lucide-react";
import Link from "next/link";

export const RegisterCard = ({ title }: { title: string }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          You need to register your username to use this feature.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-grow">
        <Link href="/settings">
          <Button>
            <NotebookPen />
            <span>Register</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
