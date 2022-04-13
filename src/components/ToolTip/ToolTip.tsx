import { FC } from 'react';

interface ToolTipProps {
    id: string,
    children: any,
}

export const ToolTip: FC<ToolTipProps> = ({id, children}) => {
    return (
      <>
        <div
          id={id}
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          {children}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </>
    );
}