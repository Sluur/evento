import { EventForm } from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";

import { auth } from "@clerk/nextjs/server";
import React from "react";

type UpdateEventProps = {
  params: Promise<{
    id: string;
  }>;
};

const UpdateEvent = async ({ params }: UpdateEventProps) => {
  const { id } = await params; // Esperamos a que `params` se resuelva para obtener `id`

  const event = await getEventById(id); // Obtenemos el evento por su ID

  const { sessionClaims } = await auth(); // Obtenemos los claims de la sesión actual
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          type="Editar"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
