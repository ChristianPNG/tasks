import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="editMode"
                    checked={edit}
                    onChange={updateEdit}
                />
                <div>
                    <Form.Group hidden={!edit} controlId="editorName">
                        <Form.Label> Name?</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    {/* <Form.Group hidden={!edit}>
                        <Form.Label>Student?</Form.Label>
                    </Form.Group> */}
                    <Form.Check
                        hidden={!edit}
                        type="checkbox"
                        id="Student"
                        label="student"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
                {name} is {student ? "" : "not"} a student
            </div>
        </div>
    );
}
