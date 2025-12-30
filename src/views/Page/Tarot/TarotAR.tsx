import React, { useEffect, useRef, useState } from "react";
import { CardData, TarotTopic } from "../../types/tarot";
import { TarotSceneManager } from "./TarotScene";
import { TopicOverlay } from "./components/TopicOverlay";
import { ReadingUI } from "./components/ReadingUI";
import { ResultModal } from "./components/ResultModal";
import { Loader } from "./components/Loader";
import "./TarotAR.scss";

// Load Google Fonts for premium look
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const TarotAR: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneManager = useRef<TarotSceneManager | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState<"TOPIC" | "PICKING" | "RESULT">("TOPIC");
  const [selectedTopic, setSelectedTopic] = useState<TarotTopic | null>(null);
  const [pickedCount, setPickedCount] = useState(0);
  const [finalCards, setFinalCards] = useState<CardData[]>([]);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement("script");
        script.src = src;
        script.crossOrigin = "anonymous";
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const setupScene = async () => {
      try {
        await Promise.all([
          loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          ),
          loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js"
          ),
        ]);

        if (containerRef.current) {
          sceneManager.current = new TarotSceneManager(containerRef.current, {
            onLoadingComplete: () => setIsLoading(false),
            onCardPicked: (count) => setPickedCount(count),
            onSelectionComplete: (cards) => {
              setFinalCards(cards);
              setStep("RESULT");
            },
          });
        }
      } catch (error) {
        console.error("Failed to initialize Tarot Scene:", error);
      }
    };

    setupScene();

    return () => {
      sceneManager.current?.cleanup();
    };
  }, []);

  const handleTopicSelect = (topic: TarotTopic) => {
    setSelectedTopic(topic);
    setStep("PICKING");
    sceneManager.current?.startGame();
  };

  const handleRestart = () => {
    setStep("TOPIC");
    setSelectedTopic(null);
    setPickedCount(0);
    setFinalCards([]);
    sceneManager.current?.reset();
  };

  return (
    <div className="tarot-container">
      {/* 3D Canvas Layer */}
      <div ref={containerRef} id="canvas-container" />

      {/* UI Overlay Layer */}
      <div id="ui-layer">
        {step === "TOPIC" && <TopicOverlay onSelect={handleTopicSelect} />}

        {step === "PICKING" && (
          <ReadingUI
            isVisible={true}
            selectedTopic={selectedTopic}
            pickedCount={pickedCount}
          />
        )}

        {step === "RESULT" && (
          <ResultModal
            selectedTopic={selectedTopic}
            cards={finalCards}
            onRestart={handleRestart}
          />
        )}
      </div>

      <Loader isLoading={isLoading} />
    </div>
  );
};

export default TarotAR;
