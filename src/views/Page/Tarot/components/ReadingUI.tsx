import React from "react";
import { TarotTopic } from "../../../types/tarot";

interface ReadingUIProps {
  isVisible: boolean;
  selectedTopic: TarotTopic | null;
  pickedCount: number;
}

export const ReadingUI: React.FC<ReadingUIProps> = ({
  isVisible,
  selectedTopic,
  pickedCount,
}) => {
  if (!isVisible) return null;

  return (
    <>
      <div id="counter">{pickedCount} / 3</div>
      <div id="guide-text">
        {pickedCount === 3
          ? "Định mệnh đã an bài..."
          : selectedTopic?.title
          ? `Bói về: ${selectedTopic.title}`
          : "Chọn 3 lá bài để xem định mệnh của bạn"}
      </div>
    </>
  );
};
