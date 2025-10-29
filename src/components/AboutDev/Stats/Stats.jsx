import styles from './Stats.module.css';
import { useEffect, useState } from 'react';
import getRepoStats from '../../../utils/getRepoStats.js';

export default function Stats() {
    // State'i sadece toplam satır sayısını tutmak için kullanıyoruz
    const [totalLines, setTotalLines] = useState(null); 

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Veriyi çek
                const data = await getRepoStats();
                
                // State'i sadece totalLines ile güncelle
                setTotalLines(data.totalLines); 
                console.log(data);
            } catch (error) {
                // Hata olduğunda loglama yapıyoruz
                console.error("Error fetching repository stats:", error);
                // Hata durumunda da null kalsın ki ekrana bir şey basılmasın.
            }
        };
    
        fetchStats();
    }, []);

    // totalLines null ise (veri gelmediyse/hata varsa) hiçbir şey gösterme
    if (totalLines === null) {
        return null;
    }

    // Sadece toplam kod satırını göster
    return (
        <div className={styles.statsContainer}>
            <div className={styles.statItem}>
                {/* Büyük Sayı */}
                <span className={styles.statNumber}>{totalLines}</span>
                {/* Açıklama Yazısı */}
                <span className={styles.statLabel}>Total Lines of Code</span>
            </div>
        </div>
    )
}