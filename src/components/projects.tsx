import { Text, VStack } from "@chakra-ui/react";
import { Project } from "./project";

export function Projects() {
  return (
    <VStack gap="6">
      <Text as="h2" textStyle="4xl" fontWeight="bold" className="playful-text">
        Fun Stuff I Built
      </Text>
      <VStack gap="6">
        <Project
          title="Guess the TV Show!"
          description="A simple quiz where you guess TV shows based on short soundtrack clips from YouTube."
          url="https://tvshowsoundtrackquizz.netlify.app/"
          githubUrl="https://github.com/davidballester/soundtrack-quizz"
          tags={["game", "next.js"]}
          imgSrc="/guessthetvshow.png"
        />
        <Project
          title="ASCII Shader"
          description="Applies an ASCII shader to your webcam feed or an uploaded video, all in your browser."
          url="https://asciishader.netlify.app/"
          githubUrl="https://github.com/davidballester/ascii-web-shader"
          tags={["proof-of-concept"]}
          imgSrc="/asciishader.png"
        />
        <Project
          title="EWF Dots Map"
          description="A project from a small freelance collaboration with the design team at the Energy Web Foundation."
          url="https://ewf-dots-map.netlify.app/"
          tags={["freelance", "react"]}
          imgSrc="/ewfdotsmap.png"
        />
        <Project
          title="A Dirty Trail"
          description="A choose-your-own-adventure game with RPG elements and turn-based combat, featuring a narration inspired by the weird west subgenre."
          url="https://adirtytrail.netlify.app/"
          githubUrl="https://github.com/davidballester/a-dirty-trail-webapp"
          tags={["game", "next.js"]}
          imgSrc="/adirtytrail.png"
        />
        <Project
          title="Grapher"
          description="A force graph website with a twist: it uses a custom grammar to define graphs in pseudocode."
          url="https://grapher.tech/"
          githubUrl="https://github.com/davidballester/grapher"
          tags={["productivity", "react"]}
          imgSrc="/grapher.png"
        />
        <Project
          title="Jumping Game"
          description="The simplest 2D platformer ever—just a fun learning project to get to know Godot."
          url="https://davidballestermena.itch.io/jumping-game"
          githubUrl="https://github.com/davidballester/MyPlatformer"
          tags={["game", "godot"]}
          imgSrc="/jumpinggame.png"
        />
      </VStack>
    </VStack>
  );
}
