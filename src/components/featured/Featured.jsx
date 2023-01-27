import { useRouter } from "next/router";
import classNames from "classnames";

import { Container, ImageList, ImageListItem } from "@mui/material";

import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {
  const router = useRouter();
  const handleClick = (id, e) => {
    e.preventDefault();
    router.push(`/product/${id}`);
  };

  return (
    <Container maxWidth="xl">
      <ImageList variant="quilted" cols={6} rowHeight={226} gap={20}>
        {items.map((item, index) => (
          <ImageListItem
            key={Math.floor(Math.random() * Date.now()).toString(16)}
            cols={index === 0 ? 3 : 1}
            rows={index === 0 ? 2 : 1}
            onClick={(e) => handleClick(item.id, e)}
          >
            <img
              src={item.source.url}
              alt={item.title}
              loading="lazy"
              className={classNames(styles.image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
