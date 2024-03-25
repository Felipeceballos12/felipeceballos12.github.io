import React from 'react';
import './Drawer.css';

import * as Dialog from '@radix-ui/react-dialog';

export const Drawer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ children, ...props }, forwardRef) => {
  return (
    <div {...props} ref={forwardRef}>
      <div className="drawerWrapper">
        <div className="backdrop" />
        <div className="drawer">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
});

/* export function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawerWrapper">
      <div className="backdrop" />
      <div className="drawer">
        <div>{children}</div>
      </div>
    </div>
  );
}
 */
