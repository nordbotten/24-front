import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const leadinZero = (num: number) => {
  return num < 10 ? `0${num}` : String(num);
};

export const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${leadinZero(date.getMonth() + 1)}-${leadinZero(
    date.getDate()
  )}`;
};

export const paramsToDate = (params: {
  fromDate?: string | null;
  toDate?: string | null;
}) => {
  return {
    from: params.fromDate ? new Date(params.fromDate) : undefined,
    to: params.toDate ? new Date(params.toDate) : undefined,
  };
};

export const calculateNights = (from: Date, to: Date) => {
  return Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
};
