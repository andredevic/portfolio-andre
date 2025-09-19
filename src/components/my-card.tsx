import { Card, CardContent } from "@/components/ui/card";
import TabsAbout from "./tabs-about-me";

const CardTabs = () => {
  return (
    <Card className="  bg-white/5 backdrop-blur-xl p-4  border-white/0 rounded-xl shadow-xl text-white ">
      <CardContent className="flex align-">
        <TabsAbout />
      </CardContent>
    </Card>
  );
};

export default CardTabs;
