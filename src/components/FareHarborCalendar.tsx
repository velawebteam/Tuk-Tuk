import React from 'react';

interface FareHarborCalendarProps {
  itemId: number;
}

export const FareHarborCalendar: React.FC<FareHarborCalendarProps> = ({ itemId }) => {
  const url = `https://fareharbor.com/embeds/calendar/mariastuktuk/items/${itemId}/?full-items=yes&flow=1007986&fallback=simple`;

  return (
    <div className="bg-white rounded-3xl p-2 md:p-4 border border-brand-brown/10 overflow-hidden shadow-inner">
      <iframe 
        src={url}
        width="100%"
        height="750"
        frameBorder="0"
        className="w-full rounded-2xl"
        style={{ border: 'none' }}
        title="FareHarbor Calendar"
      />
    </div>
  );
};
