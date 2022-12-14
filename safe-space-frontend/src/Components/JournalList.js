import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";

import { Card, Text, Container } from "@mantine/core";

export default function JournalList() {
  const [journalList, setJournalList] = useState([]);


  const { user } = useAuth0();


  useEffect(() => {
    axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
      setJournalList(response.data.journalentries);
    });
  }, []);

  let finalList;
  if (journalList && journalList.length !== 0) {
    finalList = journalList.map((journalInfo) => {
      return (
        <div>
          <Container size="xs" px="xs">
            <Link
              to={`/client/journals/${journalInfo.id}`}
              key={journalInfo.id}
            >
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Text>Journal ID: {journalInfo.id}</Text>
                <Text size="sm" color="dimmed">
                  DUE DATE: <br />
                  {new Date(journalInfo.dueBy).toLocaleDateString()}
                </Text>
                <br />
                <Text size="sm" color="dimmed">
                  UPDATED AT:
                  <br />
                  {new Date(journalInfo.updatedAt).toLocaleDateString()}
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
      {journalList && journalList.length !== 0 ? <ul>{finalList}</ul> : null}
    </div>
  );
}
