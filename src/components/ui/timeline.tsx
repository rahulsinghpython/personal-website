"use client";
import { Divider, Flex, Image, List, Typography } from "antd";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CarousellView } from "../web/CarousellView";
import { BackgroundGradient } from "./background-gradient";

interface TimelineEntry {
  title: string;
  name: string;
  content?: React.ReactNode;
  logo?: string;
  dates: string;
  position: string;
  pointers: string[];
  images?: boolean;
  extra?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  console.log(data[0].images);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <BackgroundGradient className="rounded-[22px]  bg-slate-950 dark:bg-zinc-900">
      <div
        className="w-full font-sans md:px-8"
        style={{
          background: "rgb(21 16 48 / var(--tw-bg-opacity))",
          borderRadius: "1rem",
        }}
        ref={containerRef}
      >
        <div
          className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10 "
          style={{
            borderRadius: "1rem",
          }}
        >
          <h2 className="text-lg md:text-4xl pt-5 text-white  dark:text-white ">
            Work Experience
          </h2>
          <h3 className="text-lg md:text-lg  text-white  dark:text-white">
            <div>Singaporean</div>
            <br></br>
            Python | React | Next.js | Vue.Js | Node.js | Java | AWS | GCP |
            Docker | Kubernetes | Git |
          </h3>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-8 md:pt-8 md:gap-2"
            >
              <div className="h-10 absolute left-3 md:left-3.5 w-10  rounded-full bg-black dark:bg-black flex items-center justify-center mt-24">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="sticky flex flex-col xs:flex-row md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <Flex vertical>
                  <div
                    style={{
                      width: "90%",
                    }}
                  >
                    <Divider />
                  </div>
                  <h3 className="hidden md:block pr-20 pl-20  font-bold text-neutral-500 dark:text-neutral-500 ">
                    {/* {item.title} */}

                    {item.logo ? (
                      <div
                        className="w-full max-w-xs rounded-md mx-auto pr-10 pl-10"
                        // style={{
                        //   marginRight: "7rem",
                        //   // padding: "3rem",

                        //   padding: "2rem",
                        // }}
                      >
                        <Image src={item.logo} preview={false} />
                      </div>
                    ) : (
                      <Typography.Text
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.name}
                      </Typography.Text>
                    )}
                  </h3>
                  <Typography.Text className="font-bold text-sm md:text-base sm:text-xs lg:text-lg">
                    {item.dates}
                  </Typography.Text>
                  <Typography.Text className="font-bold text-lg md:text-xl lg:text-2xl sm:text-xs text-green-600">
                    {item.position}
                  </Typography.Text>
                  <div
                    style={{
                      width: "90%",
                    }}
                  >
                    <Divider dashed>
                      {/* <Typography.Title level={5}>Showcase</Typography.Title> */}
                    </Divider>
                  </div>
                  {item.images && (
                    <div
                      style={{
                        // height: "20rem",
                        width: "25rem",
                        // scale: 0.5,
                      }}
                    >
                      <CarousellView
                        name={item.name.toLowerCase()}
                      ></CarousellView>
                    </div>
                  )}
                </Flex>
              </div>

              <div className="relative w-full  ">
                {/* {item.content}{" "} */}
                <div>
                  <List
                    size="small"
                    style={
                      {
                        // paddingRight: "8rem",
                      }
                    }
                    dataSource={item.pointers}
                    renderItem={(item) => (
                      <div>
                        <Divider></Divider>

                        <List.Item
                          style={{
                            justifyContent: "center",

                            // textAlign: "center",
                          }}
                        >
                          <Typography.Text className="xs:text-xs sm:text-sm md:text-md lg:text-xm xl:text-xm ">
                            {"-"} {item}
                          </Typography.Text>
                        </List.Item>
                      </div>
                    )}
                  ></List>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};
