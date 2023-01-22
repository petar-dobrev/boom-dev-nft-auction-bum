import { useRouter } from "next/router";
import classNames from "classnames";

import { Container, ImageList, ImageListItem } from "@mui/material";

import styles from "./Featured.module.scss";

// function srcset(image, size = 500, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

export default function Featured({ items = [] }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.dataset.href);
  };

  return (
    <Container maxWidth="xl">
      <ImageList variant="quilted" cols={6} rowHeight={226} gap={20}>
        {items.map((item) => (
          <ImageListItem
            key={item.image}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={handleClick}
          >
            <img
              src={item.image}
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
