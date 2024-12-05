import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default async function ProfilePage() {
  const { sessionClaims } = await auth();

  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });

  return (
    <>
      {/** My tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Mis Tickets</h3>
          <Button size="lg" className="button hidden sm:flex" asChild>
            <Link href="/#events">Descubre mas eventos</Link>
          </Button>
        </div>
      </section>
      {/** <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No hay tickets comprados."
          emptyStateSubtext="No te preocupes - muchos eventos para explorar!"
          collectionType="All_Events"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Mis Eventos</h3>
          <Button size="lg" className="button hidden sm:flex" asChild>
            <Link href="/events/create">Crear nuevo evento</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No hay eventos creados."
          emptyStateSubtext="Crea uno ahora!"
          collectionType="All_Events"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
}
