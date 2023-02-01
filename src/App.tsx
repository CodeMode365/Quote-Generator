import { useState, useEffect } from "react";

interface Quote {
  quote: string;
  author: string;
}

const App = () => {
  const [bg, setBg] = useState<string>("#de6633");
  const [color, setColor] = useState<string>("#eee");
  const [quote, setQuote] = useState<Quote>({
    quote: "Loading...",
    author: "...",
  });
  const [requestCount, setRequesetCount] = useState<number>(0);

  const handleRequests = () => {
    if (requestCount >= 40) {
      alert("Max request limit reached");
    } else {
      setRequesetCount(requestCount + 1);
      if (requestCount % 3 == 0)
        setBg(
          `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
          )},${Math.floor(Math.random() * 255)})`
        );
    }
  };

  useEffect(() => {
    // console.log(process.env.TZ)
    fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      //my process.env.api_key was not working so i have to put the whole key(So please donot misuse)
      headers: {
        "x-api-key":"F+N8cgwANtLlSyFyYszajg==2IhM8EBLLspCWw5w",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setQuote({ quote: response[0].quote, author: response[0].author });
      })
      .catch((error) => console.log(error));
  }, [requestCount]);

  return (
    <div
      id="main-container"
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ background: bg, color: color }}
    >
      <div
        id="quote-box"
        className="border d-flex flex-column justify-content-evenly bg-light border-top-2 text-center rounded rounded-3 position-relative"
        style={{ color: bg }}
      >
        <div id="quote-section" className="">
          <h3 id="text" className="m-4 mx-auto h-25 w-75 text-center">
            <i className="fa-sharp fa-solid fa-quote-left quote"></i>{" "}
            {quote.quote}{" "}
            <i className="fa-sharp fa-solid fa-quote-right quote"></i>
          </h3>
        </div>
        <h5 id="author" className="d-block text-end me-4 ">
          -- {quote.author}{" "}
        </h5>
        <div
          id="quote-box-footer"
          className="d-flex justify-content-between my-3 mx-4"
        >
          <div className="socials">
            <button
              id="new-quote"
              className="btn border hover align-items-flexend mx-2"
              style={{ background: bg, color: color }}
            >
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
              >
                <i
                  className="fa-brands fa-twitter"
                  style={{ color: "white" }}
                ></i>
              </a>
            </button>
          </div>
          <button
            className="btn border hover align-items-flexend mx-2"
            style={{ background: bg, color: color }}
            onClick={() => handleRequests()}
          >
            New Quote
          </button>
        </div>
      </div>
      <span className="mt-3 fs-4" id="creator">
        CodeMode365 (Pabin)
      </span>
    </div>
  );
};

export default App;
