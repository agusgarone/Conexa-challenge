import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

const mockCharacter = {
  id: 169,
  name: "Jacob",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/15",
  ],
  url: "https://rickandmortyapi.com/api/character/169",
  created: "2017-12-29T17:20:52.037Z",
};

describe("CharacterCard Component", () => {
  it("renders character name, species and status correctly", () => {
    render(<CharacterCard character={mockCharacter} selected={false} />);
    expect(screen.getByText("Jacob")).toBeInTheDocument();
    expect(screen.getByText("Species: Human")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    const image = screen.getByAltText("Jacob");
    expect(image).toBeInTheDocument();
  });

  it("applies red border when selected is true", () => {
    const { container, rerender } = render(
      <CharacterCard character={mockCharacter} selected={false} />
    );
    expect(container.firstChild).toHaveClass("border-transparent");
    rerender(<CharacterCard character={mockCharacter} selected={true} />);
    expect(container.firstChild).toHaveClass("border-[#f7e14b]");
  });
});
