import Content from "@/components/layout/Content"
import TechStack from "@/components/pages/main/TechStack"
import { FC } from "react"

const MainPage: FC = () => {
  return <Content className="prose dark:prose-invert prose-stone
    prose-lg max-w-screen-lg mx-auto"
  >
    <h1 className="text-3xl font-semibold">
      It&apos;s Me, Furkan Baytekin
    </h1>

    <p>
      I&apos;m a self-taught software developer with a passion for coding,
      blogging, music, bass guitar, teaching, and creating content. My
      curiosity for software began at 12, and despite graduating from an
      Education Faculty, I transitioned into tech, blending technical skills
      with the ability to explain concepts to non-technical audiences. As a fan
      of open-source, I contribute to the community as an &quot;open sourcerer
      &quot;, running a Linux-focused YouTube channel and publishing a Vim
      course on Udemy to share my knowledge.
    </p>

    <h2>
      My Tech Stack Over the Years
    </h2>

    <TechStack />
  </Content>
}

export default MainPage