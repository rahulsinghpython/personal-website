import { Card } from "antd";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export const IntroView: React.FC = () => {
  return (
    <Card
      style={{
        borderRadius: "22px",
        height: "30%",
      }}
    >
      <HeroHighlight>
        <div className="text-xl px-4 md:text-xl lg:text-2xl font-bold dark:text-white text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto ">
          I am a{" "}
          <Highlight className=" dark:text-white text-white">
            {" "}
            Software Engineer
          </Highlight>{" "}
          and{" "}
          <Highlight className=" dark:text-white text-white">
            Data Engineer
          </Highlight>{" "}
          with a solid grasp of development processes, skilled in{" "}
          <Highlight className=" dark:text-white text-white">Python</Highlight>,{" "}
          <Highlight className=" dark:text-white text-white">React</Highlight>,{" "}
          <Highlight className=" dark:text-white text-white">
            TypeScript
          </Highlight>
          , and{" "}
          <Highlight className=" dark:text-white text-white">Java</Highlight>.
          <div
            style={{
              padding: "0.5rem",
            }}
          />
          I focus on writing clean, efficient code and building reliable,
          scalable solutions. With experience across both data engineering and
          software development, I aim to create practical, impactful products.
        </div>
      </HeroHighlight>

      <Card.Meta
        description={<div>Scroll down for more information</div>}
      ></Card.Meta>
    </Card>
  );
};

export default IntroView;
