import { type ReactElement } from "react";
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  Accordion,
} from "../ui/accordion";
import { Card } from "../ui/card";
import Link from "next/link";

export interface AccordionProps {}

export function AccordionComponent({}: AccordionProps): ReactElement {
  return (
    <>
      <div className="mx-auto mb-5 flex justify-center items-center w-[700px]">
        <h1 className="text-6xl font-bold">Q&A</h1>
      </div>
      <Card className=" mx-auto mb-10 w-[300px] md:w-[700px] ">
        <div className="p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Cuantos GB gratuitos tengo?</AccordionTrigger>
              <AccordionContent className="font-mono text-lg">
                Gratuitamente tienes derecho a 4gb.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Mis datos estan protegidos?</AccordionTrigger>
              <AccordionContent className=" font-mono text-lg">
                Tus datos se guardan y se encriptan de la forma mas segura
                posible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Puedo pedir todo tipo de imagenes?
              </AccordionTrigger>
              <AccordionContent className=" font-mono text-lg">
                Casi todo tipo de imagenes, puedes leer nuestros{" "}
                <Link href="/terms" className="underline hover:text-blue-300">
                  terminos y condiciones
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Puedo compartir mi cuenta?</AccordionTrigger>
              <AccordionContent className=" font-mono text-lg">
                Si, tu cuenta puede ser compartida, sin embargo asumiras los
                gastos totales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Que pasa si acepto las cookies?
              </AccordionTrigger>
              <AccordionContent className=" font-mono text-lg">
                Las cookies almacenan informacion no sencible y se usan para
                brindarte una mejor experiencia de usuario
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </>
  );
}
