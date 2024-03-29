import {Body, Heading, Container, Head, Html, Preview, Section, Text, Tailwind} from "@react-email/components";
import * as React from "react";

export default function Email({ message, name, email}: { message: string, name: string, email: string }) {
    return (
        <Html lang="de-DE">
            <Preview>Neue Projektanfrage erhalten!</Preview>
            <Body>
                <Tailwind>
                <Container>
                    <Heading>Neue Projektanfrage!</Heading>
                    <Section>
                        <Text>{name} - {email}</Text>
                        <Text>
                            {message}
                        </Text>
                    </Section>
                </Container>
                </Tailwind>
            </Body>
        </Html>
    );
}
