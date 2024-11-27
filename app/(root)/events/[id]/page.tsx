import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";
import { formatDate } from "react-datepicker/dist/date_utils";

const EventDetails = async ({ params, searchParams }: SearchParamProps) => {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page || "1";

  const event = await getEventById(id); // Obtenemos el evento por su ID

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: typeof page === "string" ? page : page[0], // Aseguramos que `page` sea un string
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="Hero Image"
            height={1000}
            width={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-600">
                    {event.isFree ? "Gratis" : `$${event.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {event.category.name}
                  </p>
                </div>
                <p className="p-medium-18 ml-2 my-2 sm:ml-0">
                  Creado por{" "}
                  <span className="text-primary-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>
            {/* Checkout button */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calenadr"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p className="">
                    {formatDateTime(event.startDateTime).dateOnly}
                  </p>
                  <p className="ml-1">
                    {formatDateTime(event.startDateTime).timeOnly} -{" "}
                  </p>
                  <p className="ml-1">
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>
              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  height={32}
                  width={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Que Encontraras?</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Eventos Relacionados</h2>
        <Collection
          data={relatedEvents?.data}
          emptyTitle="Ningun evento encontrado"
          emptyStateSubtext="Vuelva mas tarde"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
};

export default EventDetails;
