import React from "react";
import Episodes from "./Episodes";
import { render } from "@testing-library/react";

const episodeData = [
  {
    id: 1,
    url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
    name: "Pilot",
    season: 1,
    number: 1,
    airdate: "2013-07-01",
    airtime: "",
    airstamp: "2013-07-02T02:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
    },
    summary:
      "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/1",
      },
    },
  },
  {
    id: 2,
    url: "http://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire",
    name: "The Fire",
    season: 1,
    number: 2,
    airdate: "2013-07-01",
    airtime: "",
    airstamp: "2013-07-02T02:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg",
    },
    summary:
      "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/2",
      },
    },
  },
];

test("Testing to see if Episodes render", () => {
  const { queryAllByTestId, rerender, queryByTestId } = render(
    <Episodes error="" episodes={[]} />
  );
  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);

  rerender(<Episodes error="" episodes={episodeData} />);
  expect(queryAllByTestId("episode")).toHaveLength(2);

  rerender(<Episodes error="Error re-rendering Episodes" episodes={[]} />);
  expect(queryByTestId("episode-error")).toBeInTheDocument(
    "Error re-rendering Episodes"
  );
});
