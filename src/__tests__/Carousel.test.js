import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Carousel from "../Components/Carousel";

test("let user change hero by click", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const carousel = render(<Carousel images={images} />);

  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);

  images.forEach(async (img, idx) => {
    const thumb = await carousel.findByTestId(`thubnail${idx}`);
    act(() => thumb.click());
    expect(hero.src).toContain(img);
  });
});
