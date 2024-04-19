import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Body, Font, Column, Row, Section, Tailwind, Text, Heading, Link, Hr } from "@react-email/components";

const EmailHeader = ({ label }: { label?: string }) => (
    <Section className="h-24 w-full bg-primary-500 p-4">
        {/*<Img src={RhetoricanLogo} alt={"Rhetorican Logo"} />*/}
        <Row>
            <Column></Column>
            {label && <Column className="text-white w-fit text-lg">{label}</Column>}
        </Row>
    </Section>
);

const InfoEmailContent = ({ name }: { name: string }) => {
    return (
        <>
            <Text className="mb-6 text-2xl font-semibold">Hallo {name},</Text>
            <Text className="text-lg font-extralight">
                vielen Dank für deine Registrierung auf{" "}
                <Link href="https://www.rhetorican.de" className="text-secondary-500">
                    rhetorican.de
                </Link>
            </Text>
            <Text className="border-b-1 text-lg">
                Damit hast du dir Zugang zu vielen tollen kostenlosen Kursen verschafft, die du sofort ausprobieren kannst.
            </Text>
        </>
    );
};

const MoreInterestingCourses = () => {
    return (
        <Section className="mt-4 px-4">
            <Text className="text-2xl font-semibold">Eventuell weitere Interessante Kurse für dich</Text>
        </Section>
    );
};

const EmailFooter = () => {
    return (
        <Section className="text-white bg-primary-500 px-4 py-8">
            <Row className="mb-8">
                <Text className="m-0 text-lg opacity-80">
                    rhetorican.de ist ein Service der Rhetorican GmbH, Unternehmsstraße 22, 80808 Stadt, Amtsgericht Amt, HRB
                    808080, USt-ID: DE 123 123 123, Vorstand: Max Mustermann (Vorsitzender), Martina Musterfrau, Vorsitzender des
                    Aufsichtsrats: Dieter Kenntmichnicht
                </Text>
            </Row>
            <Row className="mb-8">
                <Text className="m-0 text-lg opacity-80">
                    Sie erhalten diese Nachricht, da Sie mit usermail@server bei rhetorican.de angemeldet sind. Wenn sie künftig
                    {/* Todo: Wohin soll abmelden verlinken? */}
                    keine Newsletter oder spezielle Angebote per E-Mail erhalten möchten, können Sie sich jederzeit{" "}
                    <Link href="" className="text-secondary-500">
                        hier abmelden
                    </Link>
                    .
                </Text>
            </Row>
            <Row className="mb-8">
                <Text className="m-0 text-lg opacity-80">
                    Bitte antworten Sie nicht auf diese E-Mail. Wenn Sie uns kontaktieren möchten, nutzen Sie bitte unser{" "}
                    {/* Todo: Wohin soll Kontaktformular verlinken? */}
                    <Link href={""} className="text-secondary-500">
                        Kontaktformular
                    </Link>
                    .
                </Text>
            </Row>
            <Row className="mb-2 ml-0 mt-12 w-fit opacity-80">
                <Column>
                    <Link href="" className="mr-8 w-fit text-secondary-500">
                        Mein Konto
                    </Link>
                </Column>
                <Column className="mr-8 w-fit">
                    <Link href="" className="mr-8 w-fit text-secondary-500">
                        Hilfe
                    </Link>
                </Column>
                <Column className="mr-8 w-fit">
                    <Link href="" className="mr-8 w-fit text-secondary-500">
                        Kontakt
                    </Link>
                </Column>
                <Column className="mr-8 w-fit">
                    <Link href="https://www.rhetorican.de/de-DE/privacy-policy" className="mr-8 w-fit text-secondary-500">
                        Datenschutz
                    </Link>
                </Column>
            </Row>
        </Section>
    );
};

export default function RegistrationEmail() {
    const headerLabel = "Newsletter Januar 2024";
    return (
        <Html lang="de-DE" className="hyphens-auto">
            <Font fontFamily="Rubik" fallbackFontFamily="Verdana" fontStyle="normal" fontWeight="400" />
            <Preview>Registrierung erfolgreich!</Preview>
            <Body style={{ margin: "0", minWidth: "0" }}>
                <Tailwind
                    config={{
                        theme: {
                            extend: {
                                colors: {
                                    primary: {
                                        500: "#23436C",
                                    },
                                    secondary: {
                                        500: "#ECAE13",
                                    },
                                },
                            },
                        },
                    }}
                >
                    <EmailHeader label={headerLabel} />
                    <Section className="px-4 py-8">
                        <InfoEmailContent name="Tobias" />
                    </Section>
                    <Section className="px-4">
                        <Hr className="border-gray-[#EDEDED] w-full rounded-full border-4" />
                    </Section>
                    <MoreInterestingCourses />
                    <EmailFooter />
                </Tailwind>
            </Body>
        </Html>
    );
}
