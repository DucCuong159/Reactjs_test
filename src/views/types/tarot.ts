export interface CardData {
  name: string;
  url: string;
  meaning: string;
}

export interface TarotConfig {
  cardCount: number;
  radius: number;
  cardWidth: number;
  cardHeight: number;
  inspectPos: { x: number; y: number; z: number };
  inspectScale: number;
  storageScale: number;
  storageZ: number;
  storeMarginX: number;
  storeMarginTop: number;
  storeGapY: number;
  spreadLayout?: {
    cardsPerRow: number;
    cardSpacing: number;
    rowSpacing: number;
    startZ: number;
    arcHeight: number;
  };
}
