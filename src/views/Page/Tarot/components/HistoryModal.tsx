import React from "react";
import { TarotHistoryItem } from "../../../types/tarot";
import { READING_CONTEXTS } from "../constants";

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: TarotHistoryItem[];
  onClear: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onClear,
}) => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="history-modal-overlay">
      <div className="history-modal-content">
        <div className="history-header">
          <h2>📜 Nhật Ký Tiên Tri</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {history.length === 0 ? (
          <div className="history-empty">
            <p>Chưa có lần trải bài nào được ghi lại.</p>
          </div>
        ) : (
          <div className="history-list">
            {history.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-item-header">
                  <span className="history-date">
                    {new Date(item.timestamp).toLocaleString("vi-VN")}
                  </span>
                  <span className="history-topic">{item.topic.title}</span>
                </div>
                <div className="history-cards-mini">
                  {item.cards.map((card, i) => (
                    <div key={i} className="mini-card">
                      <img src={card.url} alt={card.name} />
                      <span className="mini-label">{READING_CONTEXTS[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {history.length > 0 && (
          <div className="history-footer">
            <button className="clear-btn" onClick={() => setShowConfirm(true)}>
              Xóa Lịch Sử
            </button>
          </div>
        )}
      </div>

      {showConfirm && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal">
            <h3>Xác nhận xóa</h3>
            <p>Bạn có chắc chắn muốn xóa toàn bộ nhật ký bói bài không?</p>
            <div className="confirm-actions">
              <button
                className="btn-cancel"
                onClick={() => setShowConfirm(false)}
              >
                Hủy bỏ
              </button>
              <button
                className="btn-confirm"
                onClick={() => {
                  onClear();
                  setShowConfirm(false);
                }}
              >
                Đồng ý Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
