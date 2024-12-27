import { FC, ReactElement } from "react";
import { Matcher } from "react-day-picker";
import { enGB, ms } from "date-fns/locale";
import { format } from "date-fns";
import { useControllableState } from "../hooks";
import { CalendarIcon } from "../icons/calendar";
import { Button, button_cva, ButtonIcon } from "./button";
import { Calendar } from "./calendar";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { VariantProps } from "class-variance-authority";

type DatePickerProps = {
  defaultDate?: Date;
  disabled?: Matcher | Matcher[];
  formatStr?: string;
  icon?: ReactElement;
  locale?: "en" | "ms";
  maxYear?: number;
  minYear?: number;
  placeholder?: string;
  value?: Date;
  onValueChange?: (date: Date) => void;
  size?: VariantProps<typeof button_cva>["size"];
  yearOrder?: "asc" | "desc";
};

/**
 * The DatePicker component allows users to select a date from an interactive calendar.
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-datepicker--docs}
 */
const DatePicker: FC<DatePickerProps> = ({
  defaultDate,
  disabled,
  formatStr = "dd MMM yyy",
  icon,
  locale = "en",
  onValueChange,
  placeholder,
  value,
  size,
  ...props
}) => {
  const [date, setDate] = useControllableState({
    prop: value,
    onChange: onValueChange,
    defaultProp: defaultDate,
  });

  const _locale = locale === "en" ? enGB : ms;
  const formatDate = (date: Date) =>
    format(date, formatStr, {
      locale: _locale,
    });

  return (
    <>
      {/* Mobile */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default-outline"
            size={size}
            className="flex lg:hidden"
          >
            <ButtonIcon>{icon ?? <CalendarIcon />}</ButtonIcon>
            {date ? formatDate(date) : placeholder}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-fit">
          <Calendar
            className="w-[304px]"
            disabled={disabled}
            locale={_locale}
            mode="single"
            month={date}
            onSelect={setDate}
            required
            selected={date}
            {...props}
          />
        </DialogContent>
      </Dialog>

      {/* Desktop */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="default-outline"
            size={size}
            className="hidden lg:flex"
          >
            <ButtonIcon>{icon ?? <CalendarIcon />}</ButtonIcon>
            {date ? formatDate(date) : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[304px] p-0" align="start">
          <Calendar
            disabled={disabled}
            locale={_locale}
            mode="single"
            month={date}
            onSelect={setDate}
            required
            selected={date}
            {...props}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};
DatePicker.displayName = "DatePicker";

export { DatePicker };
