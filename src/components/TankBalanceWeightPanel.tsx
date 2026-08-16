import React from "react";
import { useSessionStore } from "@store/sessionStore";
import { useTheme } from "@hooks/useTheme";

/**
 * TankBalanceWeightPanel
 * Small control bubble shown on the Draft page above Constraints.
 * Matches surrounding bubble styling used elsewhere in the app.
 */
export function TankBalanceWeightPanel() {
  const value = useSessionStore((s) => s.tankBalanceEmphasisPercent);
  const setValue = useSessionStore((s) => s.setTankBalanceEmphasis);
  const theme = useTheme();

  return (
    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
      <h2 className="text-lg font-semibold mb-2">Tank balance Weight</h2>

      <div className="flex items-center gap-4">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1"
        />
        <div className="text-sm text-gray-400 w-14 text-right">{value}%</div>
      </div>

      <p className="text-xs text-gray-500 mt-2">0% = off, 100% = tanks must match as closely as possible</p>
    </div>
  );
}
