import React from 'react';
import styles from './Menu.module.css';

import * as Dialog from '@radix-ui/react-dialog';
import MenuIcon from '../../../assets/Icons/menu.svg?react';
import { Drawer } from '../../Drawer/Drawer';

export default function Menu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.navigationBtn}>
          <MenuIcon width={24} height={24} />
        </button>
      </Dialog.Trigger>
      <DialogContent className={styles.dialogContent}>
        <Dialog.Close asChild>
          <a href="#projects" className={styles.navBtn}>
            <span className={styles.name}>Projects</span>
          </a>
        </Dialog.Close>
        <Dialog.Close asChild>
          <a href="#experience" className={styles.navBtn}>
            <span className={styles.name}>Experience</span>
          </a>
        </Dialog.Close>
        <Dialog.Close asChild>
          <a href="#skills" className={styles.navBtn}>
            <span className={styles.name}>Skills</span>
          </a>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Root>
  );
}

type ContentProps = React.ComponentPropsWithoutRef<
  typeof Dialog.Content
>;

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  ContentProps
>(({ children, ...props }, forwardedRef) => (
  <Dialog.Portal>
    <Dialog.Overlay asChild>
      <Drawer>
        <Dialog.Content {...props} ref={forwardedRef}>
          {children}
        </Dialog.Content>
      </Drawer>
    </Dialog.Overlay>
  </Dialog.Portal>
));
