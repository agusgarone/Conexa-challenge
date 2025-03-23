import { render, screen, fireEvent } from "@testing-library/react";
import CharacterList from "./CharacterList";

const mockCharacters = [
  {
    id: 1,
    name: "Rick",
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
    image: "https://rickandmortyapi.com/api/character/avatar/img1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/15",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-12-29T17:20:52.037Z",
  },
  {
    id: 2,
    name: "Morty",
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
    image: "https://rickandmortyapi.com/api/character/avatar/img2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/15",
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-12-29T17:20:52.037Z",
  },
  {
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
  },
];

describe("CharacterList Component", () => {
  const mockOnSelect = jest.fn();
  const mockNextPage = jest.fn();
  const mockPrevPage = jest.fn();

  beforeEach(() => {
    render(
      <CharacterList
        title="Test Characters"
        data={mockCharacters}
        selectedId={2}
        onSelect={mockOnSelect}
        currentPage={2}
        totalPages={5}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
  });

  it("renders the title correctly", () => {
    expect(screen.getByText("Test Characters")).toBeInTheDocument();
  });
  it("renders all provided character cards", () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });

  it("calls onSelect when a character card is clicked", () => {
    const mortyCard = screen.getByText("Morty");
    fireEvent.click(mortyCard);

    expect(mockOnSelect).toHaveBeenCalledWith(mockCharacters[1]);
  });

  it("renders pagination component correctly", () => {
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("handles pagination callbacks correctly", () => {
    const nextButton = screen.getByText("Next");
    const prevButton = screen.getByText("Previous");

    fireEvent.click(nextButton);
    expect(mockNextPage).toHaveBeenCalled();

    fireEvent.click(prevButton);
    expect(mockPrevPage).toHaveBeenCalled();
  });
});
