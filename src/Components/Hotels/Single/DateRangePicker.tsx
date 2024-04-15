"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn, formatDate, paramsToDate } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const DateRangePicker: React.FC<Props> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const date = searchParams
    ? paramsToDate({
        fromDate: searchParams.get("fromDate") || undefined,
        toDate: searchParams.get("toDate") || undefined,
      })
    : undefined;

  const handleDateChange = (date: DateRange | undefined) => {
    const url = new URL(window.location.href);
    url.searchParams.set("fromDate", date?.from ? formatDate(date.from) : "");
    url.searchParams.set("toDate", date?.to ? formatDate(date.to) : "");
    router.push(url.toString());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          fromDate={new Date()}
          toDate={addDays(new Date(), 365)}
          defaultMonth={date?.from}
          selected={date}
          onSelect={handleDateChange}
          numberOfMonths={2}
          ISOWeek={true}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
