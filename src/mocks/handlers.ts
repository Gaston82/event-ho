import { rest } from "msw";

const apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
const url = `${process.env.REACT_APP_URL_API!}${apiKey}`;

export const handlers = [
  rest.get(`${url}`, (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        _embedded: {
          events: {
            name: "SuperBowl",
            id: "0",
            type: "",
            images: [{ url: "" }],
            _embedded: {
              venues: [
                {
                  name: "",
                  city: { name: "Phoenix" },
                  country: { name: "" },
                  address: { line1: "" },
                },
              ],
            },
            priceRanges: [{ min: 0 }],
            dates: { start: { localDate: "", localTime: "" } },
          },
        },
      })
    );
  }),
];
