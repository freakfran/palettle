import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExploreCard, { ExploreCardProps } from "./explore-card";
import { CarouselItem } from "@/components/ui/carousel";

interface TabsPanelProps {
  items: ExploreCardProps[];
}

export default function TabsPanel({ items }: TabsPanelProps) {
  return (
    <Tabs defaultValue="ALL" className="w-[400px]">
      <TabsList>
        <TabsTrigger className="" value="ALL">
          ALL
        </TabsTrigger>
        <TabsTrigger value="GAMES">GAMES</TabsTrigger>
        <TabsTrigger value="ART">ART</TabsTrigger>
        <TabsTrigger value="MEMES">MEMES</TabsTrigger>
        <TabsTrigger value="COLLECTION">COLLECTION</TabsTrigger>
      </TabsList>
      <TabsContent value="ALL">
        {items.map((ex) => (
          <ExploreCard
            key={ex.title}
            author={ex.author}
            authorImg={ex.authorImg}
            image={ex.image}
            title={ex.title}
            stock={ex.stock}
            price={ex.price}
          />
        ))}
      </TabsContent>
      <TabsContent value="GAMES">
        {items.map((ex) => (
          <ExploreCard
            key={ex.title}
            author={ex.author}
            authorImg={ex.authorImg}
            image={ex.image}
            title={ex.title}
            stock={ex.stock}
            price={ex.price}
          />
        ))}
      </TabsContent>
      <TabsContent value="ART">Make changes to your account here.</TabsContent>
      <TabsContent value="MEMES">Change your password here.</TabsContent>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="COLLECTION">Change your password here.</TabsContent>
    </Tabs>
  );
}
