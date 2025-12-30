import React from "react";
import { CardData, TarotTopic } from "../../../types/tarot";
import { READING_CONTEXTS } from "../constants";

interface ResultModalProps {
  selectedTopic: TarotTopic | null;
  cards: CardData[];
  onRestart: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  selectedTopic,
  cards,
  onRestart,
}) => {
  return (
    <div id="result-modal" style={{ display: "block" }}>
      <div className="modal-header">
        <span className="sparkle">✦</span>
        <h2>Lời Tiên Tri</h2>
        <span className="sparkle">✦</span>
      </div>

      <div className="reading-context">
        <strong>Chủ đề:</strong> {selectedTopic?.title}
      </div>

      <div id="final-reading">
        {cards.map((card, i) => (
          <div key={card.name + i} className="reading-section">
            <span className="reading-label">✦ {READING_CONTEXTS[i]}</span>
            <div className="reading-body">
              <img src={card.url} className="reading-img" alt={card.name} />
              <div className="reading-content">
                <h3>{card.name}</h3>
                <div className="reading-desc">
                  {selectedTopic &&
                  card.topicMeanings &&
                  card.topicMeanings[selectedTopic.id]
                    ? card.topicMeanings[selectedTopic.id]
                    : "Hãy chọn một chủ đề để xem lời giải."}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Trải Bài Mới
      </button>
    </div>
  );
};
