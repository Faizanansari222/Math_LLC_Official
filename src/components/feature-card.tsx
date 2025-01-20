import { Typography, Card, CardBody } from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({
  icon: Icon,
  mainIcon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-[#b3201d] items-center justify-center p-2.5 text-left text-white">
          {/* <Icon className="h-6 w-6" /> */} {mainIcon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-[#0c406e]"
        >
          {title}
        </Typography>
        <Typography className=" font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
