import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek } from "date-fns"
import { cn } from "../../lib/utils"
import { Button } from "./button"

export type CalendarProps = {
  mode?: "single" | "range"
  selected?: Date | { from: Date; to?: Date }
  onSelect?: (date: Date | { from: Date; to?: Date } | undefined) => void
  className?: string
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    selected && mode === "single" ? (selected as Date) : new Date()
  )

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const dateRange = eachDayOfInterval({ start: startDate, end: endDate })

  const handleDateClick = (date: Date) => {
    if (mode === "single") {
      onSelect?.(date)
    } else if (mode === "range") {
      const rangeSelected = selected as { from: Date; to?: Date } | undefined
      if (!rangeSelected?.from || (rangeSelected.from && rangeSelected.to)) {
        onSelect?.({ from: date, to: undefined })
      } else {
        if (date < rangeSelected.from) {
          onSelect?.({ from: date, to: rangeSelected.from })
        } else {
          onSelect?.({ from: rangeSelected.from, to: date })
        }
      }
    }
  }

  const isSelected = (date: Date) => {
    if (mode === "single") {
      return selected && isSameDay(date, selected as Date)
    } else {
      const rangeSelected = selected as { from: Date; to?: Date } | undefined
      if (!rangeSelected?.from) return false
      if (!rangeSelected.to) return isSameDay(date, rangeSelected.from)
      return date >= rangeSelected.from && date <= rangeSelected.to
    }
  }

  const isRangeStart = (date: Date) => {
    if (mode !== "range") return false
    const rangeSelected = selected as { from: Date; to?: Date } | undefined
    return rangeSelected?.from && isSameDay(date, rangeSelected.from)
  }

  const isRangeEnd = (date: Date) => {
    if (mode !== "range") return false
    const rangeSelected = selected as { from: Date; to?: Date } | undefined
    return rangeSelected?.to && isSameDay(date, rangeSelected.to)
  }

  return (
    <div className={cn("p-3", className)}>
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="h-7 w-7"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="font-medium">
          {format(currentMonth, "MMMM, yyyy")}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="h-7 w-7"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-slate-500 h-8 flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dateRange.map((date, i) => {
          const isCurrentMonth = isSameMonth(date, currentMonth)
          const selected = isSelected(date)
          const rangeStart = isRangeStart(date)
          const rangeEnd = isRangeEnd(date)

          return (
            <button
              key={i}
              onClick={() => handleDateClick(date)}
              disabled={!isCurrentMonth}
              className={cn(
                "h-8 w-8 text-center text-sm rounded-full transition-colors",
                "hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
                !isCurrentMonth && "text-slate-300 hover:bg-transparent",
                selected && "bg-slate-900 text-white hover:bg-slate-900",
                (rangeStart || rangeEnd) && "bg-slate-900 text-white",
                isCurrentMonth && !selected && "text-slate-900"
              )}
            >
              {format(date, "d")}
            </button>
          )
        })}
      </div>
    </div>
  )
}
