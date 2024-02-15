import { useState, useEffect } from "react";
import Notice from "../interface/Notice";
import { Container, Row } from "react-bootstrap";
import ArticlecardComponent from "./ArticlecardComponent";

function Mainarticle() {
  const [notice, setNotice] = useState<Notice[]>([]);

  useEffect(() => {
    const fecthdata = async () => {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const data = await response.json();
      console.log(data);
      setNotice(data.results);
    };
    fecthdata();
  }, []);
  console.log(notice);
  return (
    <Container>
      <Row>
        {notice.map((notice) => (
          <ArticlecardComponent key={notice.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Mainarticle;
