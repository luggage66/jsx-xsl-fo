function MyComponent() {
  return <root xmlns:fo="http://www.w3.org/1999/XSL/Format">
    <layoutMasterSet>
        <simplePageMaster masterName="first" marginRight="0.5cm" marginLeft="0.5cm" marginBottom="0.5cm" marginTop="0.75cm" pageWidth="21cm" pageHeight="29.7cm">
            <regionBody />
        </simplePageMaster>
        


        <pageSequenceMaster masterName="psmA">
          <repeatablePageMasterAlternatives>
            <conditionalPageMasterReference masterReference="first" pagePosition="first" />
            <conditionalPageMasterReference masterReference="rest" pagePosition="rest" />
            COMMENT:  recommended fallback procedure 
            <conditionalPageMasterReference masterReference="rest" />
          </repeatablePageMasterAlternatives>
        </pageSequenceMaster>

                <simplePageMaster masterName="rest" marginRight="2.5cm" marginLeft="2.5cm" marginBottom="2cm" marginTop="1cm" pageWidth="21cm" pageHeight="29.7cm">
            <regionBody />
        </simplePageMaster>
    </layoutMasterSet>
    
    <pageSequence masterReference="psmA">
        <flow flowName="xsl-region-body">
            <blockContainer height="4cm" width="12cm" top="0cm" left="0cm" position="absolute">
                <block textAlign="start" lineHeight="18pt" fontFamily="sans-serif" fontWeight="bold" fontSize="14pt">
          PX7.net
        </block>
                <block textAlign="start" lineHeight="18pt" fontFamily="sans-serif" fontWeight="bold" fontSize="14pt">
          44 Liberty St
        </block>
                <block textAlign="start" lineHeight="18pt" fontFamily="sans-serif" fontWeight="bold" fontSize="14pt">
          Newburyport, MA 01950
        </block>
                <block textAlign="start" lineHeight="18pt" fontFamily="sans-serif" fontWeight="bold" fontSize="14pt">
          978-462-1152
        </block>
            </blockContainer>
            <blockContainer height="1cm" width="6cm" top="0cm" left="14cm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="22pt" fontFamily="sans-serif" fontSize="23pt">
           Sales Receipt
        </block>
            </blockContainer>

            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="2.49cm" top="1.2cm" left="13.8cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
           DATE
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="2.49cm" top="1.87cm" left="13.8cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="10pt">
          01/01/2000
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="2.49cm" top="1.2cm" left="16.46cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
          SALE #
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="2.49cm" top="1.87cm" left="16.46cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="10pt">
          1
        </block>
            </blockContainer>


            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="8.95cm" top="3cm" left="0cm" padding=".6mm" position="absolute">
                <block textAlign="start" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
            SOLD TO
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="3cm" width="8.95cm" top="3.67cm" left="0cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
                </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="8.95cm" top="3cm" left="10cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
          SHIP TO
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="3cm" width="8.95cm" top="3.67cm" left="10cm" padding=".6mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
                </block>
            </blockContainer>


            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="3.96cm" top="7.25cm" left="10.74cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
           PMT METHOD
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="3.96cm" top="8cm" left="10.74cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="10pt">
          Check
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="3.96cm" top="7.25cm" left="14.95cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="12pt">
          CHECK #
        </block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth=".5mm" height="0.5cm" width="3.96cm" top="8cm" left="14.95cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="14pt" fontFamily="sans-serif" fontSize="10pt">
          1234
        </block>
            </blockContainer>


            <blockContainer height="17cm" width="19cm" top="9.4cm" left="0cm" position="absolute">
                <table borderCollapse="separate" height="17cm" borderColor="yellow" borderStyle="solid" borderWidth=".6mm" tableLayout="fixed" width="100%">
                    <tableColumn columnWidth="2.5cm" />
                    <tableColumn columnWidth="11.5cm" />
                    <tableColumn columnWidth="2.5cm" />
                    <tableColumn columnWidth="2.5cm" />
                    <tableBody fontFamily="sans-serif" fontWeight="normal" fontSize="10pt">
                        <tableRow lineHeight="12pt">
                            <tableCell borderWidth="1pt" borderColor="green" borderStyle="solid" padding="1mm">
                                <block textAlign="end">QUANTITY</block>
                            </tableCell>
                            <tableCell borderWidth="1pt" borderColor="red" borderStyle="solid" padding="1mm">
                                <block textAlign="start">DESCRIPTION</block>
                            </tableCell>
                            <tableCell borderColor="blue" borderStyle="solid" padding="1mm">
                                <block textAlign="center">RATE</block>
                            </tableCell>
                            <tableCell borderColor="orange" borderStyle="solid" padding="1mm">
                                <block textAlign="center">AMOUNT</block>
                            </tableCell>

                        </tableRow>
                        <tableRow lineHeight="12pt">
                            <tableCell padding="2pt">
                                <block textAlign="end">1</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="start">Wide Widget</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">$22.23</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">22.31</block>
                            </tableCell>
                        </tableRow>
                        <tableRow lineHeight="12pt">
                            <tableCell padding="2pt">
                                <block textAlign="end">1</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="start">Widget</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">$22.23</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">22.31</block>
                            </tableCell>
                        </tableRow>
                        <tableRow lineHeight="12pt">
                            <tableCell padding="2pt">
                                <block textAlign="end">3</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="start">Nuts</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">$12.00</block>
                            </tableCell>
                            <tableCell padding="2pt">
                                <block textAlign="end">36.00</block>
                            </tableCell>
                        </tableRow>
                    </tableBody>
                </table>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth="0.5mm" height="1cm" width="13.31cm" top="26.5cm" left="0cm" padding="1mm" position="absolute">
                <block textAlign="start" lineHeight="15pt" fontFamily="sans-serif" fontSize="12pt">Please remit to the above address</block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth="0.5mm" height="1cm" width="2.5cm" top="26.5cm" left="13.56cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="25pt" fontFamily="sans-serif" fontSize="22pt">Total</block>
            </blockContainer>
            <blockContainer borderColor="black" borderStyle="solid" borderWidth="0.5mm" height="1cm" width="2.5cm" top="26.5cm" left="16.31cm" padding="1mm" position="absolute">
                <block textAlign="start" spaceAfterOptimum="3pt" lineHeight="15pt" fontFamily="sans-serif" fontSize="10pt">$3.00</block>
            </blockContainer>
        </flow>
    </pageSequence>
  </root>;
}
