import { TarotHistoryItem, TarotTopic, CardData } from "../../../types/tarot";

const STORAGE_KEY = "tarot_reading_history";
const MAX_HISTORY_ITEMS = 50; // Limit to last 50 readings

export const saveReading = (
  topic: TarotTopic,
  cards: CardData[]
): TarotHistoryItem => {
  const newItem: TarotHistoryItem = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    timestamp: Date.now(),
    topic,
    cards,
  };

  const currentHistory = getHistory();
  const updatedHistory = [newItem, ...currentHistory].slice(
    0,
    MAX_HISTORY_ITEMS
  );

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error("Failed to save tarot history:", error);
  }

  return newItem;
};

export const getHistory = (): TarotHistoryItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to load tarot history:", error);
    return [];
  }
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};
