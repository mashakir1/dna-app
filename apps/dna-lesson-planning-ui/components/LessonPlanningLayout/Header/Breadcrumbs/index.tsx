import { Breadcrumb } from "./Breadcrumb";

import styles from "./breadcrumbs.module.scss";

interface BreadcrumbType {
  title: string;
  active: boolean;
  completed: boolean;
}

export const Breadcrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: Array<BreadcrumbType>;
}) => (
  <nav className={`${styles.breadcrumbs} flex`}>
    {breadcrumbs.map(({ title, active, completed }) => (
      <Breadcrumb
        key={title}
        title={title}
        active={active}
        completed={completed}
        // TODO:  handle click
        handleClick={() => {
          console.log("Clicked breadcrumb");
        }}
      />
    ))}
  </nav>
);
