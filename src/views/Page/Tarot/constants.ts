import { CardData, TarotConfig } from "../../types/tarot";

export const TAROT_DATA: CardData[] = [
  // Major Arcana (0-21)
  {
    name: "The Fool",
    url: require("../../../assets/png/tarot/00_fool.jpg"),
    meaning: "Khởi đầu mới, tự phát.",
  },
  {
    name: "The Magician",
    url: require("../../../assets/png/tarot/01_magician.jpg"),
    meaning: "Kỹ năng, hành động.",
  },
  {
    name: "The High Priestess",
    url: require("../../../assets/png/tarot/02_high_priestess.jpg"),
    meaning: "Trực giác, bí ẩn.",
  },
  {
    name: "The Empress",
    url: require("../../../assets/png/tarot/03_empress.jpg"),
    meaning: "Trù phú, sáng tạo.",
  },
  {
    name: "The Emperor",
    url: require("../../../assets/png/tarot/04_emperor.jpg"),
    meaning: "Quyền lực, cấu trúc.",
  },
  {
    name: "The Hierophant",
    url: require("../../../assets/png/tarot/05_hierophant.jpg"),
    meaning: "Truyền thống, giáo hoàng.",
  },
  {
    name: "The Lovers",
    url: require("../../../assets/png/tarot/06_lovers.jpg"),
    meaning: "Tình yêu, lựa chọn.",
  },
  {
    name: "The Chariot",
    url: require("../../../assets/png/tarot/07_chariot.jpg"),
    meaning: "Ý chí, chiến thắng.",
  },
  {
    name: "Strength",
    url: require("../../../assets/png/tarot/08_strength.jpg"),
    meaning: "Sức mạnh, lòng dũng cảm.",
  },
  {
    name: "The Hermit",
    url: require("../../../assets/png/tarot/09_hermit.jpg"),
    meaning: "Suy ngẫm, cô độc.",
  },
  {
    name: "Wheel of Fortune",
    url: require("../../../assets/png/tarot/10_wheel.jpg"),
    meaning: "Vận may, thay đổi.",
  },
  {
    name: "Justice",
    url: require("../../../assets/png/tarot/11_justice.jpg"),
    meaning: "Công lý, cân bằng.",
  },
  {
    name: "The Hanged Man",
    url: require("../../../assets/png/tarot/12_hanged_man.jpg"),
    meaning: "Hy sinh, buông bỏ.",
  },
  {
    name: "Death",
    url: require("../../../assets/png/tarot/13_death.jpg"),
    meaning: "Kết thúc, tái sinh.",
  },
  {
    name: "Temperance",
    url: require("../../../assets/png/tarot/14_temperance.jpg"),
    meaning: "Tiết chế, hòa hợp.",
  },
  {
    name: "The Devil",
    url: require("../../../assets/png/tarot/15_devil.jpg"),
    meaning: "Cám dỗ, trói buộc.",
  },
  {
    name: "The Tower",
    url: require("../../../assets/png/tarot/16_tower.jpg"),
    meaning: "Sụp đổ đột ngột.",
  },
  {
    name: "The Star",
    url: require("../../../assets/png/tarot/17_star.jpg"),
    meaning: "Hy vọng, niềm tin.",
  },
  {
    name: "The Moon",
    url: require("../../../assets/png/tarot/18_moon.jpg"),
    meaning: "Ảo tưởng, sợ hãi.",
  },
  {
    name: "The Sun",
    url: require("../../../assets/png/tarot/19_sun.jpg"),
    meaning: "Thành công, niềm vui.",
  },
  {
    name: "Judgement",
    url: require("../../../assets/png/tarot/20_judgement.jpg"),
    meaning: "Phán xét, tái sinh.",
  },
  {
    name: "The World",
    url: require("../../../assets/png/tarot/21_world.jpg"),
    meaning: "Hoàn thành, trọn vẹn.",
  },

  // Wands
  {
    name: "Ace of Wands",
    url: require("../../../assets/png/tarot/wands_01.jpg"),
    meaning: "Cảm hứng, khởi đầu mới tiềm năng.",
  },
  {
    name: "Two of Wands",
    url: require("../../../assets/png/tarot/wands_02.jpg"),
    meaning: "Lập kế hoạch, tiến về phía trước.",
  },
  {
    name: "Three of Wands",
    url: require("../../../assets/png/tarot/wands_03.jpg"),
    meaning: "Mở rộng, nhìn ra xa.",
  },
  {
    name: "Four of Wands",
    url: require("../../../assets/png/tarot/wands_04.jpg"),
    meaning: "Ăn mừng, hài lòng.",
  },
  {
    name: "Five of Wands",
    url: require("../../../assets/png/tarot/wands_05.jpg"),
    meaning: "Cạnh tranh, xung đột nhỏ.",
  },
  {
    name: "Six of Wands",
    url: require("../../../assets/png/tarot/wands_06.jpg"),
    meaning: "Chiến thắng, sự công nhận.",
  },
  {
    name: "Seven of Wands",
    url: require("../../../assets/png/tarot/wands_07.jpg"),
    meaning: "Kiên trì, bảo vệ ý kiến.",
  },
  {
    name: "Eight of Wands",
    url: require("../../../assets/png/tarot/wands_08.jpg"),
    meaning: "Tốc độ, hành động nhanh.",
  },
  {
    name: "Nine of Wands",
    url: require("../../../assets/png/tarot/00_fool.jpg"),
    meaning: "Kiên cường, đứng vững sau thử thách.",
  }, // Placeholder
  {
    name: "Ten of Wands",
    url: require("../../../assets/png/tarot/wands_10.jpg"),
    meaning: "Gánh nặng, trách nhiệm.",
  },
  {
    name: "Page of Wands",
    url: require("../../../assets/png/tarot/wands_11.jpg"),
    meaning: "Khám phá, tin tức mới.",
  },
  {
    name: "Knight of Wands",
    url: require("../../../assets/png/tarot/00_fool.jpg"),
    meaning: "Đam mê, hành động bốc đồng.",
  }, // Placeholder
  {
    name: "Queen of Wands",
    url: require("../../../assets/png/tarot/wands_13.jpg"),
    meaning: "Tự tin, quyết đoán.",
  },
  {
    name: "King of Wands",
    url: require("../../../assets/png/tarot/wands_14.jpg"),
    meaning: "Lãnh đạo, tầm nhìn.",
  },

  // Cups
  {
    name: "Ace of Cups",
    url: require("../../../assets/png/tarot/cups_01.jpg"),
    meaning: "Tình yêu mới, tràn đầy cảm xúc.",
  },
  {
    name: "Two of Cups",
    url: require("../../../assets/png/tarot/cups_02.jpg"),
    meaning: "Kết nối, sự hòa hợp.",
  },
  {
    name: "Three of Cups",
    url: require("../../../assets/png/tarot/cups_03.jpg"),
    meaning: "Tiệc tùng, tình bạn.",
  },
  {
    name: "Four of Cups",
    url: require("../../../assets/png/tarot/cups_04.jpg"),
    meaning: "Thờ ơ, suy ngẫm nội tâm.",
  },
  {
    name: "Five of Cups",
    url: require("../../../assets/png/tarot/cups_05.jpg"),
    meaning: "Mất mát, nỗi buồn.",
  },
  {
    name: "Six of Cups",
    url: require("../../../assets/png/tarot/cups_06.jpg"),
    meaning: "Hoài niệm, tuổi thơ.",
  },
  {
    name: "Seven of Cups",
    url: require("../../../assets/png/tarot/cups_07.jpg"),
    meaning: "Quá nhiều lựa chọn, ảo tưởng.",
  },
  {
    name: "Eight of Cups",
    url: require("../../../assets/png/tarot/cups_08.jpg"),
    meaning: "Bỏ lại phía sau, tìm kiếm ý nghĩa.",
  },
  {
    name: "Nine of Cups",
    url: require("../../../assets/png/tarot/cups_09.jpg"),
    meaning: "Sự mong muốn được toại nguyện.",
  },
  {
    name: "Ten of Cups",
    url: require("../../../assets/png/tarot/cups_10.jpg"),
    meaning: "Hạnh phúc gia đình.",
  },
  {
    name: "Page of Cups",
    url: require("../../../assets/png/tarot/cups_11.jpg"),
    meaning: "Tin tức tình cảm, nhạy cảm.",
  },
  {
    name: "Knight of Cups",
    url: require("../../../assets/png/tarot/cups_12.jpg"),
    meaning: "Lãng mạn, theo đuổi ước mơ.",
  },
  {
    name: "Queen of Cups",
    url: require("../../../assets/png/tarot/cups_13.jpg"),
    meaning: "Trực giác, lòng trắc ẩn.",
  },
  {
    name: "King of Cups",
    url: require("../../../assets/png/tarot/cups_14.jpg"),
    meaning: "Cân bằng cảm xúc, điềm tĩnh.",
  },

  // Swords
  {
    name: "Ace of Swords",
    url: require("../../../assets/png/tarot/swords_01.jpg"),
    meaning: "Sự rõ ràng, ý tưởng mới.",
  },
  {
    name: "Two of Swords",
    url: require("../../../assets/png/tarot/swords_02.jpg"),
    meaning: "Bế tắc, lựa chọn khó khăn.",
  },
  {
    name: "Three of Swords",
    url: require("../../../assets/png/tarot/swords_03.jpg"),
    meaning: "Đau lòng, sự thật phũ phàng.",
  },
  {
    name: "Four of Swords",
    url: require("../../../assets/png/tarot/swords_04.jpg"),
    meaning: "Nghỉ ngơi, hồi phục.",
  },
  {
    name: "Five of Swords",
    url: require("../../../assets/png/tarot/swords_05.jpg"),
    meaning: "Chiến thắng vô nghĩa, xung đột.",
  },
  {
    name: "Six of Swords",
    url: require("../../../assets/png/tarot/swords_06.jpg"),
    meaning: "Vượt qua giai đoạn khó khăn.",
  },
  {
    name: "Seven of Swords",
    url: require("../../../assets/png/tarot/swords_07.jpg"),
    meaning: "Sự lén lút, né tránh.",
  },
  {
    name: "Eight of Swords",
    url: require("../../../assets/png/tarot/swords_08.jpg"),
    meaning: "Bị mắc kẹt, tự giới hạn.",
  },
  {
    name: "Nine of Swords",
    url: require("../../../assets/png/tarot/swords_09.jpg"),
    meaning: "Lo lắng, ác mộng.",
  },
  {
    name: "Ten of Swords",
    url: require("../../../assets/png/tarot/swords_10.jpg"),
    meaning: "Sụp đổ hoàn toàn, bắt đầu lại.",
  },
  {
    name: "Page of Swords",
    url: require("../../../assets/png/tarot/swords_11.jpg"),
    meaning: "Tò mò, tư duy nhạy bén.",
  },
  {
    name: "Knight of Swords",
    url: require("../../../assets/png/tarot/swords_12.jpg"),
    meaning: "Hành động quyết liệt, vội vã.",
  },
  {
    name: "Queen of Swords",
    url: require("../../../assets/png/tarot/swords_13.jpg"),
    meaning: "Trực diện, trung thực.",
  },
  {
    name: "King of Swords",
    url: require("../../../assets/png/tarot/swords_14.jpg"),
    meaning: "Công lý, tư duy logic.",
  },

  // Pentacles
  {
    name: "Ace of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_01.jpg"),
    meaning: "Cơ hội tài chính, ổn định.",
  },
  {
    name: "Two of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_02.jpg"),
    meaning: "Cân bằng, đa nhiệm.",
  },
  {
    name: "Three of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_03.jpg"),
    meaning: "Hợp tác, kỹ năng chuyên môn.",
  },
  {
    name: "Four of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_04.jpg"),
    meaning: "Sự bảo thủ, tích trữ tài sản.",
  },
  {
    name: "Five of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_05.jpg"),
    meaning: "Khó khăn tài chính, cô độc.",
  },
  {
    name: "Six of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_06.jpg"),
    meaning: "Sự hào phóng, cho và nhận.",
  },
  {
    name: "Seven of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_07.jpg"),
    meaning: "Kiên nhẫn chờ đợi kết quả.",
  },
  {
    name: "Eight of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_08.jpg"),
    meaning: "Lao động miệt mài, rèn luyện.",
  },
  {
    name: "Nine of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_09.jpg"),
    meaning: "Tự chủ tài chính, sang trọng.",
  },
  {
    name: "Ten of Pentacles",
    url: require("../../../assets/png/tarot/00_fool.jpg"),
    meaning: "Di sản, giàu có bền vững.",
  }, // Placeholder
  {
    name: "Page of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_11.jpg"),
    meaning: "Học hỏi, cơ hội kinh doanh.",
  },
  {
    name: "Knight of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_12.jpg"),
    meaning: "Kiên trì, tin cậy.",
  },
  {
    name: "Queen of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_13.jpg"),
    meaning: "Nuôi dưỡng, sung túc.",
  },
  {
    name: "King of Pentacles",
    url: require("../../../assets/png/tarot/pentacles_14.jpg"),
    meaning: "Thịnh vượng, lãnh đạo tài ba.",
  },
];

export const TAROT_CONFIG: TarotConfig = {
  cardCount: TAROT_DATA.length,
  radius: 0, // Not used in spread layout
  cardWidth: 1.2,
  cardHeight: 2.0,
  inspectPos: { x: 0, y: 0, z: 8.5 }, // Brought forward for better view
  inspectScale: 0.75, // Increased scale
  storageScale: 0.15,
  storageZ: 9.0, // Closer to camera (z: 12)
  storeMarginX: 0.15,
  storeMarginTop: 1.5,
  storeGapY: 0.35,
  // Spread layout config
  spreadLayout: {
    cardsPerRow: 16, // More rows, less width
    cardSpacing: 1.3,
    rowSpacing: 2.2,
    startZ: -4,
    arcHeight: 0.2,
  },
};

export const READING_CONTEXTS = ["QUÁ KHỨ", "HIỆN TẠI", "TƯƠNG LAI"];

export const SCENE_CONFIG = {
  fog: { color: 0x050505, density: 0.02 },
  camera: { fov: 60, near: 0.1, far: 100, position: { x: 0, y: 0, z: 12 } },
  lighting: {
    ambient: { color: 0xffffff, intensity: 0.6 },
    spot: { color: 0xffffff, intensity: 2.0, position: { x: 0, y: 10, z: 10 } },
  },
  stars: { count: 1200, size: 0.8, opacity: 0.9 },
};
