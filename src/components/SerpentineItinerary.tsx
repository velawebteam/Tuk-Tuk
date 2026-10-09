import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

interface SerpentineItineraryProps {
  itinerary: { time?: string; activity: string }[];
  desktopItemsPerRow?: number;
}

export function SerpentineItinerary({
  itinerary,
  desktopItemsPerRow = 4
}: SerpentineItineraryProps) {
  const { t } = useTranslation();

  if (!itinerary || itinerary.length === 0) return null;

  const renderGrid = (itemsPerRow: number, gridColsClass: string, isMobile = false) => {
    const totalItems = itinerary.length;
    const numRows = Math.ceil(totalItems / itemsPerRow);

    const rows = [];
    for (let r = 0; r < numRows; r++) {
      const rowItems = [];
      for (let c = 0; c < itemsPerRow; c++) {
        const originalIndex =
          r % 2 === 0
            ? r * itemsPerRow + c
            : r * itemsPerRow + (itemsPerRow - 1 - c);

        if (originalIndex < totalItems) {
          rowItems.push({
            step: itinerary[originalIndex],
            originalIndex
          });
        } else {
          rowItems.push(null);
        }
      }
      rows.push(rowItems);
    }

    return (
      <div className={isMobile ? "space-y-2 py-1" : "space-y-4 py-2"}>
        {rows.map((rowCells, r) => {
          const isEvenRow = r % 2 === 0;
          const isLastRow = r === numRows - 1;

          return (
            <div key={r} className={isMobile ? "space-y-2" : "space-y-4"}>
              {/* Row Grid */}
              <div className={`grid ${gridColsClass} ${isMobile ? "gap-1 items-start" : "gap-3 sm:gap-4 items-start"}`}>
                {rowCells.map((cell, c) => {
                  if (!cell) {
                    return <div key={c} aria-hidden="true" />;
                  }

                  const { step, originalIndex } = cell;
                  const isNextStepInSameRow =
                    isEvenRow
                      ? c < itemsPerRow - 1 && originalIndex + 1 < totalItems
                      : c > 0 && originalIndex + 1 < totalItems;

                  return (
                    <div
                      key={originalIndex}
                      className="flex items-center justify-between gap-0.5 relative"
                    >
                      {/* Arrow on LEFT for Odd Rows (pointing left to next step) */}
                      {!isEvenRow && isNextStepInSameRow && (
                        <div className={`shrink-0 flex items-center text-brand-brown/70 z-10 ${isMobile ? "-ml-1.5" : "-ml-2"}`}>
                          <ChevronLeft size={isMobile ? 13 : 18} className="text-brand-brown" />
                        </div>
                      )}

                      {/* Step Item */}
                      <div className={`flex flex-col items-center text-center w-full group ${isMobile ? "px-0.5" : "px-1"}`}>
                        <div className={`${
                          isMobile 
                            ? "w-6 h-6 rounded-full bg-brand-brown text-white font-black text-[10px] flex items-center justify-center shadow-sm mb-1 border border-white" 
                            : "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-brown text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-md shadow-brand-brown/20 mb-2 border-2 border-white group-hover:scale-110 transition-transform"
                        }`}>
                          {originalIndex + 1}
                        </div>
                        {step.time && (
                          <span className={`${isMobile ? "text-[8px] mb-0.5" : "text-[10px] mb-1"} font-black text-brand-brown uppercase tracking-wider block`}>
                            {step.time}
                          </span>
                        )}
                        <p className={`${
                          isMobile 
                            ? "text-[9px] font-bold text-brand-black uppercase tracking-tight leading-tight line-clamp-3" 
                            : "text-xs sm:text-sm font-bold text-brand-black uppercase tracking-wide leading-snug"
                        }`}>
                          {t(step.activity)}
                        </p>
                      </div>

                      {/* Arrow on RIGHT for Even Rows (pointing right to next step) */}
                      {isEvenRow && isNextStepInSameRow && (
                        <div className={`shrink-0 flex items-center text-brand-brown/70 z-10 ${isMobile ? "-mr-1.5" : "-mr-2"}`}>
                          <ChevronRight size={isMobile ? 13 : 18} className="text-brand-brown" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Downward Connector Arrow between rows */}
              {!isLastRow && (
                <div className={`grid ${gridColsClass} ${isMobile ? "gap-1 my-0.5" : "gap-3 sm:gap-4 my-1"}`}>
                  {isEvenRow ? (
                    <>
                      {Array.from({ length: itemsPerRow - 1 }).map((_, i) => (
                        <div key={i} aria-hidden="true" />
                      ))}
                      <div className="flex justify-center items-center py-0.5">
                        <ChevronDown size={isMobile ? 14 : 18} className="text-brand-brown" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center items-center py-0.5">
                        <ChevronDown size={isMobile ? 14 : 18} className="text-brand-brown" />
                      </div>
                      {Array.from({ length: itemsPerRow - 1 }).map((_, i) => (
                        <div key={i} aria-hidden="true" />
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const desktopGridClass =
    desktopItemsPerRow === 5
      ? 'grid-cols-5'
      : desktopItemsPerRow === 3
      ? 'grid-cols-3'
      : 'grid-cols-4';

  return (
    <>
      {/* Mobile: 3 items per row (3x3 grid) with compact spacing */}
      <div className="block sm:hidden">
        {renderGrid(3, 'grid-cols-3', true)}
      </div>

      {/* Desktop: multi-column serpentine */}
      <div className="hidden sm:block">
        {renderGrid(desktopItemsPerRow, desktopGridClass, false)}
      </div>
    </>
  );
}
