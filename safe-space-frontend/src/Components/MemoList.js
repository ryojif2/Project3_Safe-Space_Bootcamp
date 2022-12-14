import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { Button, Card, Text, Container } from "@mantine/core";

export default function PatientList() {
  const [clientId, setClientId] = useState();
  const navigate = useNavigate();
  const [memoList, setMemoList] = useState([]);
  const [clientDetails, setClientDetails] = useState("");

  let finalList;

  useEffect(() => {
    if (clientId) {
      axios.get(`${BACKEND_URL}/memos/${clientId}`).then((response) => {
        setMemoList(response.data);
      });
    }

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
      });
    }
  }, []);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  if (memoList && memoList.length !== 0) {
    finalList = memoList.map((memoInfo) => {
      return (
        <div>
          <Container size="xs" px="xs">
            <Link
              to={`/therapist/patients/${clientId}/memos/${memoInfo.id}`}
              key={memoInfo.id}
            >
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Text size="sm">
                  ID:
                  {memoInfo.id}
                </Text>
                <Text>
                  {clientDetails.firstName}

                  {clientDetails.lastName}
                </Text>
                <Text>details:{memoInfo.generalInput}</Text>
                <Text size="sm" color="dimmed">
                  memo created:
                  {new Date(memoInfo.updatedAt).toLocaleDateString()}
                </Text>
              </Card>
            </Link>
          </Container>
        </div>
      );
    });
  }
  return (
    <div>
      <h2>Memo List</h2>

      {memoList && memoList.length !== 0 ? <ul>{finalList}</ul> : null}
      <br />
      <br />
      <Button
        variant="light"
        onClick={(e) => navigate(`/therapist/patients/${clientId}`)}
      >
        Back to Patient Profile
      </Button>
    </div>
  );
}
