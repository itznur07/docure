import { Button } from "@/components/ui/button";
import CommmonLayout from "./withCommonLayout/layout";

export default function Home() {
  return (
    <CommmonLayout>
      <h1>Hello World</h1>
      <Button variant='secondary'>Primary</Button>
    </CommmonLayout>
  );
}
