import data from "../../dataexample/journalentries.json";
import styles from "./RecentEntries.module.css";
import { FaSmile, FaFrown, FaAngry, FaBed, FaQuestionCircle, FaRocket } from "react-icons/fa";
import { GiGhost } from "react-icons/gi";
import { MdSpa } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FiLink } from "react-icons/fi";

// Mood -> Icon eşleşmesi
const moodIcons = {
  Mutlu: FaSmile,
  Mutsuz: FaFrown,
  Korkulu: GiGhost,
  Kızgın: FaAngry,
  Sakin: MdSpa,
  Motive: FaRocket,
  Memnun: AiOutlineLike,
  Yorgun: FaBed,
  Meraklı: FaQuestionCircle,
  Bağlı: FiLink,
};

// Mood -> Renk eşleşmesi
const moodColors = {
  Mutlu: "#FFD43B",
  Mutsuz: "#9CA3AF",
  Korkulu: "#8B5CF6",
  Kızgın: "#EF4444",
  Sakin: "#10B981",
  Motive: "#3B82F6",
  Memnun: "#F59E0B",
  Yorgun: "#6B7280",
  Meraklı: "#A855F7",
  Bağlı: "#14B8A6",
};

export default function RecentEntries() {
  const entries = data.entries;

  return (
    <div className={styles.recentEntries}>
      <h2 className={styles.heading}>Recent Journal Entries</h2>

      {entries.slice(0, 3).map((entry) => {
        const Icon = moodIcons[entry.mood];
        const color = moodColors[entry.mood] || "#9CA3AF";

        return (
          <div key={entry.id} className={styles.entryCard}>
            <div className={styles.entryHeader}>
              <div className={styles.entryDateWrapper}>
                <p className={styles.entryDate}>
                  {new Date(entry.date)
                    .toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .replace(/ /g, "\n")}
                </p>
              </div>



            </div>
            <div className={styles.entryContentWrapper}>
            <h3 className={styles.entryTitle}>{entry.title}</h3>
            <p className={styles.entryContent}>{entry.text_content}</p>
            </div>
              {/* --- sadece ikon --- */}
            <div className={styles.moodIconWrapper}>
              {Icon && <Icon size={28} color={color} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
