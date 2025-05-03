import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ErrorCard = ({ title }: { title: string }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex-grow">
        <p>An error occurred while loading the data. Please try again later.</p>
      </CardFooter>
    </Card>
  );
};
