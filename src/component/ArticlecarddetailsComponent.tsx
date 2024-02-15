import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Notice } from "../interface/Notice";
import { useState, useEffect } from "react";

function ArticlecardComponent() {
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
  return (
    <>
      <h1 className="text-center mt-5">Articoli trovati:</h1>
      <Col
        md={12}
        className="d-flex justify-content-center align-items-center m-2 "
      >
        <Card className="m-3 h-100 w-100">
          <Card.Body>
            <Card.Title>{notice.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {notice.published_at}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {notice.news_site}
            </Card.Subtitle>
            <Card.Text>{notice.summary}</Card.Text>
            <Card.Link href={notice.url}>Vai all'articolo</Card.Link>
            <Card.Link href="#">Dettagli articolo</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ArticlecardComponent;
