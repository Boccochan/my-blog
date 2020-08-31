import { TIMEZONE } from "@src/components/lab/study/components/clock/Time";

export type LocationInfo = {
  country: string;
  city: string;
  timezone: TIMEZONE;
  utc: number;
  top: number;
  left: number;
};

export const locations: LocationInfo[] = [
  {
    country: "The United States",
    city: "Los Angeles",
    top: 156,
    left: 172,
    timezone: TIMEZONE.LOSANGELES,
    utc: -7,
  },
  {
    country: "The United States",
    city: "New York",
    top: 134,
    left: 292,
    timezone: TIMEZONE.NEWYORK,
    utc: -4,
  },
  {
    country: "Brazil",
    city: "Sao Paulo",
    top: 310,
    left: 370,
    timezone: TIMEZONE.SAOPAULO,
    utc: -3,
  },
  {
    country: "England",
    city: "London",
    top: 103,
    left: 497,
    timezone: TIMEZONE.LONDON,
    utc: 0,
  },
  {
    country: "South Africa",
    city: "Cape Town",
    top: 340,
    left: 550,
    timezone: TIMEZONE.WINDHOEK,
    utc: 2,
  },
  {
    country: "Isreal",
    city: "Tel Aviv",
    top: 156,
    left: 596,
    timezone: TIMEZONE.GAZA,
    utc: 2,
  },
  {
    country: "India",
    city: "Mubai",
    top: 193,
    left: 700,
    timezone: TIMEZONE.KARACHI,
    utc: 5,
  },
  {
    country: "China",
    city: "Hong Kong",
    top: 183,
    left: 820,
    timezone: TIMEZONE.HONGKONG,
    utc: 8,
  },
  {
    country: "Japan",
    city: "Tokyo",
    top: 150,
    left: 885,
    timezone: TIMEZONE.TOKYO,
    utc: 9,
  },
  {
    country: "Austria",
    city: "Sydney",
    top: 340,
    left: 916,
    timezone: TIMEZONE.AUSTRALIA,
    utc: 10,
  },
];
