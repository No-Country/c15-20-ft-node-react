import {
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
export default function Faq() {
  return (
    <div className=' min-h-full '>
      <Card className='shadow-lg w-[550px]' maxW='lg'>
        <CardHeader>
          <h2 className='text-2xl font-title-primary font-semibold'>
            Preguntas Frecuentes
          </h2>
        </CardHeader>
        <CardBody className='pb-6 font-common-font items-start'>
          <Accordion className='w-full mt-4' collapsible='' allowToggle>
            <AccordionItem value='item-1'>
              <AccordionButton className=' self-start'>
                ¿Qué tipo de sitios web diseña Web Kong?
              </AccordionButton>
              <AccordionPanel>
                Web Kong diseña una amplia gama de sitios web, que incluyen
                sitios web de comercio electrónico, sitios web de empresas,
                sitios web de organizaciones sin fines de lucro y sitios web
                personales.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionButton className='hover:underline-none'>
                ¿Cuánto cuesta un sitio web de Web Kong?
              </AccordionButton>
              <AccordionPanel>
                El precio de un sitio web de Web Kong puede variar según las
                características y funcionalidades pretendidas. Los sitios web
                más simples comienzan en $1,000, mientras que los sitios web más
                complejos pueden costar varios miles de dólares.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionButton className='hover:underline-none'>
                ¿Cuánto tiempo tarda Web Kong en crear un sitio web?
              </AccordionButton>
              <AccordionPanel>
                El tiempo que tarda Web Kong en crear un sitio web depende de la
                complejidad del sitio web. Los sitios web simples pueden tardar
                unas pocas semanas en crearse, mientras que los sitios web más
                complejos pueden tardar varios meses.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionButton>
                ¿Qué tipo de apoyo ofrece Web Kong después del lanzamiento del
                sitio web?
              </AccordionButton>
              <AccordionPanel>
                Web Kong ofrece soporte completo después del lanzamiento del
                sitio web. Esto incluye capacitación, asistencia técnica y
                actualizaciones del sitio web.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className='border-b-0' value='item-5'>
              <AccordionButton className='hover:underline-none'>
                ¿Qué garantías ofrece Web Kong?
              </AccordionButton>
              <AccordionPanel>
                Web Kong ofrece una garantía de satisfacción del 100% en todos
                sus sitios web. Si no está satisfecho con su sitio web, puede
                solicitar un reembolso completo.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </CardBody>
      </Card>
    </div>
  );
}
