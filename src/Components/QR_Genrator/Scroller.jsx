import { useEffect, useState } from "react";
import "../Scroller/Scroller.css";

function Scroller({ url }) {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrollerRatio, setScrollerRatio] = useState(0);

  const fetchUrl = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const result = await res.json();

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      } else {
        setErrorMsg("No products found");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
   
    const target = e.target;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollerRatio(Math.min(100, Math.max(0, scrolled)));
  };

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return (
    <div className="scroller">
      <div
        className="scroller_header"
        style={{
          background: `linear-gradient(to right, orange ${scrollerRatio}%, #f0f0f0 ${scrollerRatio}%)`,
          color: "#000",
        }}
      >
        <div className="heading"> Custom Scroller</div>
        <div className="scroller_ratio">
          <span>Scroller Ratio: {Math.floor(scrollerRatio)}%</span>
        </div>
      </div>

      <div className="scoller_content" onScroll={handleScroll}>
        {loading && <div className="loading">Loading...</div>}
        {errorMsg && <div className="error">{errorMsg}</div>}
        {data.length > 0 &&
          data.map((item, index) => (
            <ScollerCard items={item} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Scroller;

const ScollerCard = ({ items }) => {
  return (
    <div className="scoller_card">
      <div className="scoller_card_content">
        <h3>{items.title}</h3>
        <p>{items.description}</p>
      </div>
    </div>
  );
};
