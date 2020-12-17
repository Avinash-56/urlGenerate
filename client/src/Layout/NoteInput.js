import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { getNote, generateUrl, clearArea } from "../actions/note";

const NoteInput = ({ getNote, generateUrl, response, clearArea }) => {
  const [form, setForm] = useState({
    note: "",
    urlBody: "",
    url: "",
  });
  const { note, url, urlBody } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitNote = (e) => {
    e.preventDefault();
    generateUrl(note);
  };
  const onSubmitClear = (e) => {
    e.preventDefault();
    clearArea();
  };

  const onSubmitUrl = (e) => {
    e.preventDefault();
    getNote(url);
  };
  return (
    <div>
      <Form onSubmit={(e) => onSubmitNote(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            cols={2}
            onChange={(e) => onChange(e)}
            name="note"
            value={note}
            placeholder="Write your note here"
            required
          />
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <Form onSubmit={(e) => onSubmitClear(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={2}
            cols={2}
            name="urlBody"
            value={response}
            placeholder="URL and Note will be shown here"
          />
          <br />
          <Button variant="secondary" type="submit">
            Clear area
          </Button>
        </Form.Group>
      </Form>
      <Form onSubmit={(e) => onSubmitUrl(e)}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            cols={2}
            onChange={(e) => onChange(e)}
            name="url"
            value={url}
            placeholder="Enter the URL here"
            required
          />
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>

      <h5>
        For testing purposes input
        'http://secretmessage/33b6fb16-265b-4db7-a14c-17b591beec14' as the url
        or enter 'Can you see me' in the note filed
      </h5>
      <p>You can always generate your URL and test it out.</p>
      <h6>This is a secure messaging service with url </h6>
    </div>
  );
};

const mapStateToProps = (state) => ({
  response: state.note.response,
});

export default connect(mapStateToProps, { generateUrl, getNote, clearArea })(
  NoteInput
);
