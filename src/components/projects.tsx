import { VStack } from "@chakra-ui/react";
import { Project } from "./project";

export function Projects() {
  return (
    <VStack gap="6">
      <Project
        title="Guess the TV Show!"
        description="This is a simple quizz where you have to guess the TV shows based on a few seconds of its soundtrack. The soundtracks come from YouTube, and the entire video is revealed when you guess the TV show."
        url="https://tvshowsoundtrackquizz.netlify.app/"
        githubUrl="https://github.com/davidballester/soundtrack-quizz"
        tags={["game", "next.js"]}
        imgSrc="/guessthetvshow.png"
      />
      <Project
        title="ASCII Shader"
        description="An ASCII shader applied to your webcam feed or a video uploaded to your browser."
        url="https://asciishader.netlify.app/"
        githubUrl="https://github.com/davidballester/ascii-web-shader"
        tags={["proof-of-concept"]}
        imgSrc="/asciishader.png"
      />
      <Project
        title="EWF Dots Map"
        description="This was the result of a small freelance collaboration with the Energy Web Foundation. I took care of the implementation."
        url="https://ewf-dots-map.netlify.app/"
        tags={["freelance", "react"]}
        imgSrc="/ewfdotsmap.png"
      />
      <Project
        title="A Dirty Trail"
        description="A choose your own adventure game, with RPG elements and turn-based combat, featuring a unique dark and funny narration inspired by the weird west subgenre."
        url="https://adirtytrail.netlify.app/"
        githubUrl="https://github.com/davidballester/a-dirty-trail-webapp"
        tags={["game", "next.js"]}
        imgSrc="/adirtytrail.png"
      />
      <Project
        title="Grapher"
        description="The mandatory force graph website. The twist here is the definition of a grammar to write down graphs in pseudocode."
        url="https://grapher.tech/"
        githubUrl="https://github.com/davidballester/grapher"
        tags={["productivity", "react"]}
        imgSrc="/grapher.png"
      />
      <Project
        title="Jumping Game"
        description="The simplest 2D platformer ever. A fun learning exercise to get to know Godot."
        url="https://davidballestermena.itch.io/jumping-game"
        githubUrl="https://github.com/davidballester/MyPlatformer"
        tags={["game", "godot"]}
        imgSrc="/jumpinggame.png"
      />
    </VStack>
  );
}
