function GlossaryEntry({ name, definition }: { name: string; definition: string }) {
  return <block textAlign="start" fontSize="12pt" fontFamily="sans-serif">
    <block color="blue" spaceBeforeOptimum="3pt">
      <marker markerClassName="term">{name}</marker>{name}
    </block>
    <block textAlign="start" startIndent="2em">
      {definition}
    </block>
  </block>;
}

export function Glossary({ entries }: { entries: Record<string, string> }) {
  return (
    <root xmlns:fo="http://www.w3.org/1999/XSL/Format">
      <layoutMasterSet>
        <simplePageMaster
          masterName="all"
          pageHeight="11.5in"
          pageWidth="8.5in"
          marginTop="1in"
          marginBottom="1in"
          marginLeft="0.75in"
          marginRight="0.75in"
        >
          <regionBody marginTop="1in" marginBottom="0.75in" />
          <regionBefore extent="0.75in" />
          <regionAfter extent="0.5in" />
        </simplePageMaster>
      </layoutMasterSet>
      <pageSequence masterReference="all" format="i">
        <staticContent flowName="xsl-region-before">
          <block
            textAlign="start"
            fontSize="10pt"
            fontFamily="serif"
            lineHeight="1em + 2pt"
          >
            <retrieveMarker
              retrieveClassName="term"
              retrieveBoundary="page"
              retrievePosition="first-starting-within-page"
            />
            <leader
              leaderAlignment="reference-area"
              leaderPattern="dots"
              leaderLength="4in"
            />
            <retrieveMarker
              retrieveClassName="term"
              retrieveBoundary="page"
              retrievePosition="last-ending-within-page"
            />
          </block>
        </staticContent>
        <staticContent flowName="xsl-region-after">
          <block
            textAlign="start"
            fontSize="10pt"
            fontFamily="serif"
            lineHeight="1em + 2pt"
          >
            Page (<pageNumber />)
          </block>
        </staticContent>
        <flow flowName="xsl-region-body">
          {Object.entries(entries).map(([name, definition]) => <GlossaryEntry name={name} definition={definition} />)}
        </flow>
      </pageSequence>
    </root>
  );
}
