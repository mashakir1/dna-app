import type { NextApiHandler } from "next";

interface GETYear {
  years: Array<string>
}

const yearHandler: NextApiHandler = (request, response) => {
  const availableYears: GETYear = { years: ["Year 3", "Year 4"] };
  switch (request.method) {
    case "GET":
      response.status(200).json(availableYears);
      break;
  }
};

export default yearHandler
