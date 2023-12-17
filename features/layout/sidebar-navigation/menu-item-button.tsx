import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
  iconRotation?: string;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  iconRotation, // new prop
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.icon}
          src={iconSrc}
          alt={`${text} icon`}
          style={{ transform: iconRotation }}
        />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
