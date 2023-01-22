import { useRouter } from "next/router";
import classNames from "classnames";

import { Container, ImageList, ImageListItem } from "@mui/material";

import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.dataset.href);
  };

  return (
    <Container maxWidth="xl">
      <ImageList variant="quilted" cols={6} rowHeight={226} gap={20}>
        {items.map((item, index) => (
          <ImageListItem
            key={item.image}
            cols={index === 0 ? 3 : 1}
            rows={index === 0 ? 2 : 1}
            onClick={handleClick}
          >
            <img
              src={item.source.url}
              alt={item.title}
              data-href={item.href}
              loading="lazy"
              className={classNames(styles.image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
