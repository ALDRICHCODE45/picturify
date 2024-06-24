import { PricingCardProps } from "@/components/pricing/PricingCard";

export const cardsInformation: PricingCardProps[] = [
  {
    description: "cubre las caracteristicas basicas",
    options: [
      {
        available: true,
        text: "10 usuarios",
      },
      {
        available: true,
        text: "2GB almacenamiento",
      },
      {
        available: true,
        text: "Envio de correos",
      },
      {
        available: false,
        text: "Centro de control",
      },
      {
        available: false,
        text: "Soporte por telefono",
      },
      {
        available: false,
        text: "Acceso a la comunidad",
      },
    ],
    price: 20,
    title: "Basico",
  },
  {
    description: "Cubre necesidades mas especificas",
    options: [
      {
        available: true,
        text: "20 usuarios",
      },
      {
        available: true,
        text: "5GB almacenamiento",
      },
      {
        available: true,
        text: "Envio de correos",
      },
      {
        available: true,
        text: "Centro de control",
      },
      {
        available: false,
        text: "Soporte por telefono",
      },
      {
        available: false,
        text: "Acceso a la comunidad",
      },
    ],
    price: 30,
    title: "Avanzado",
  },
  {
    description: "Servicio completamente personalizado",
    options: [
      {
        available: true,
        text: "50 usuarios",
      },
      {
        available: true,
        text: "20GB almacenamiento",
      },
      {
        available: true,
        text: "Envio de correos",
      },
      {
        available: true,
        text: "Centro de control",
      },
      {
        available: true,
        text: "Soporte por telefono",
      },
      {
        available: true,
        text: "Acceso a la comunidad",
      },
    ],
    price: 100,
    title: "Empresarial",
  },
];
