import { render } from "@testing-library/react";
import { FavoriteButton } from "./FavoriteButton";

describe("FavoriteButton", () => {
  const defaultProps = {
    isFavorite: false,
    onSetFavorite: jest.fn(),
    onRemoveFavorite: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the svg icon within the button", () => {
    const { container } = render(<FavoriteButton {...defaultProps} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });
});
