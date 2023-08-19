/** @jsx XSLFO.createElement */
import { faker } from '@faker-js/faker';
import { renderToStream } from '@jsx-xsl-fo/core';
import { Report, PageSequence, PageContent, PageHeader, PageFooter } from '@jsx-xsl-fo/reporting';

const styles = {
  document: {
    fontFamily: 'serif'
  },
  title: {
    fontSize: '30pt',
    borderBottom: "0.75pt solid black"
  }
};

interface AddressBlockProps {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

// define components as functions.
function AddressBlock(props: AddressBlockProps) {
  return <block spaceBefore="1em" keepTogetherWithinPage="always">
        <block fontWeight="bold">{props.lastName}, {props.firstName}</block>
        <block>{props.streetAddress}</block>
        <block>{props.city}, {props.state} {props.zipCode}</block>
    </block>;
}

// Main report function.
// We use a couple of the helper components that deal with some XSL-FO structures.
export default function ContactReport({ contacts }: { contacts: AddressBlockProps[] }) {
  return <Report {...styles.document}>
        <PageSequence>
            <PageHeader>
                <block textAlign="end">Page <pageNumber /></block>
            </PageHeader>
            <PageContent>
                <block {...styles.title}>Contacts</block>
                {contacts.map(contact => <AddressBlock {...contact} />)}
            </PageContent>
        </PageSequence>
    </Report>;
}

// Make some Test Data
export const sampleData = new Array(100).fill(undefined).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    streetAddress: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode()
}));

renderToStream(
  <ContactReport contacts={sampleData} />,
  process.stdout
);
