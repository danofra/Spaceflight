import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Notice } from "../interface/Notice";
import { Link } from "react-router-dom";

interface Noticeattribute {
  notice: Notice;
}

function ArticlecardComponent({ notice }: Noticeattribute) {
  return (
    <>
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
            <Link to="/articlecarddetails" className="card-link">
              Dettagli articolo
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ArticlecardComponent;
