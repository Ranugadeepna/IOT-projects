import React, { useEffect, useState } from 'react';
import './Dustbincardstyles.css'; // Import your CSS file for styles

// Define the props type
interface BinCardProps {
    id: string;  // Specify the type for id
    level: number; // Specify the type for level
}

const Dustbincard: React.FC<BinCardProps> = ({ id, level }) => {
    const [binLevel, setBinLevel] = useState<number>(level);
    const [binStatus, setBinStatus] = useState<string>('');
    const [binLiquidColor, setBinLiquidColor] = useState<string>('gradient-color-green');
    const [binPercentage, setBinPercentage] = useState<string>('');

    useEffect(() => {
        updateDustbinStatus();
    }, [binLevel]);

    const updateDustbinStatus = () => {
        setBinPercentage(`${binLevel}%`);

        if (binLevel === 100) {
            setBinStatus(`Full bin <i class="ri-delete-bin-3-line animated-red"></i>`);
            setBinLiquidColor('gradient-color-red');
        } else if (binLevel > 35 && binLevel <= 60) {
            setBinStatus(`Low bin <i class="ri-delete-bin-3-line animated-green"></i>`);
            setBinLiquidColor('gradient-color-orange');
        } else if (binLevel <= 35) {
            setBinStatus(`Very Low <i class="ri-delete-bin-3-line green-color"></i>`);
            setBinLiquidColor('gradient-color-green');
        } else {
            setBinStatus('');
        }

        // Change bin liquid color based on the level
        if (binLevel >= 80) {
            setBinLiquidColor('gradient-color-red');
        } else if (binLevel >= 60) {
            setBinLiquidColor('gradient-color-orange');
        } else if (binLevel >= 40) {
            setBinLiquidColor('gradient-color-yellow');
        } else {
            setBinLiquidColor('gradient-color-green');
        }
    };

    return (
        <section className="bin">
            <div className="bin-card" id={id}>
                <div className="bin-data">
                    <p className="bin-text">{id}</p>
                    <h1 className="bin-percentage">{binPercentage}</h1>
                    <p className="bin-status" dangerouslySetInnerHTML={{ __html: binStatus }} />
                </div>

                <div className="bin-pill">
                    <div className="bin-level">
                        <div className={`bin-liquid ${binLiquidColor}`} style={{ height: binPercentage }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dustbincard;
